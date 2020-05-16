import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./BoardDetails.module.css";
import AddColumnModal from "../AddColumnModal/AddColumnModal.js";
import AddCardModal from "../AddCardModal/AddCardModal.js";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BoardDetails(props) {
  const [boardDetails, setBoardDetails] = useState({});
  const [columnModalShow, setColumnModalShow] = useState(false);
  const [cardModalShow, setCardModalShow] = useState(false);
  const [ColumnId, setColumnId] = useState("");

  var BoardId = props.match.params.id;

  useEffect(() => {
    axios
      .get(`https://pro-organizer-app-7871e.firebaseio.com/${BoardId}.json`)
      .then((res) => setBoardDetails(res.data));
  }, [BoardId]);

  // useEffect(() => {
  //   if (cardModalShow === false || columnModalShow === false) {
  //     axios
  //       .get(`https://pro-organizer-app-7871e.firebaseio.com/${BoardId}.json`)
  //       .then((res) => setBoardDetails(res.data));
  //   }
  //   console.log("AGAIN FETCHED");
  // }, [cardModalShow, columnModalShow]);

  function deleteColumn(e) {
    var delKey = e.currentTarget.parentNode.parentNode.id;
    console.log(delKey);
    axios
      .delete(
        `https://pro-organizer-app-7871e.firebaseio.com/${BoardId}/ColumnList/${delKey}.json`
      )
      .then(e.currentTarget.parentNode.parentNode.remove());
  }

  function addCard(ColumnId) {
    setColumnId(ColumnId);
    setCardModalShow(true);
  }

  function getColumnList() {
    var ColumnArray = [];
    var ColumnID = [];
    for (let key in boardDetails.ColumnList) {
      const name = boardDetails.ColumnList[key].Column;
      const id = key;
      ColumnArray.push(name);
      ColumnID.push(id);
    }
    const ColumnList = ColumnArray.map((name, index) => (
      <div className={styles.Column} id={ColumnID[index]} key={index}>
        <div className={styles.ColumnHead}>
          <span>{name}</span>
          <img
            src="https://image.flaticon.com/icons/svg/60/60761.svg"
            alt="delete"
            className={styles.DeleteBin}
            onClick={(e) => deleteColumn(e)}
          />
        </div>
        <div className={styles.CardContainer}></div>
        <div
          className={styles.AddCard}
          onClick={() => {
            addCard(ColumnID[index]);
          }}
        >
          Add a card
        </div>
      </div>
    ));
    return ColumnList;
  }

  function deleteBoard() {
    // axios.delete(
    //   `https://pro-organizer-app-7871e.firebaseio.com/${BoardId}.json`
    // );
  }
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.Head}>
          <div className={styles.Heading}>{boardDetails.Name}</div>
          <button
            id="DeleteBoard"
            className="btn btn-danger"
            onClick={() => deleteBoard()}
          >
            Delete Board
          </button>
        </div>
        <div className={styles.ColumnContainer}>
          {getColumnList()}
          <div
            className={styles.AddColumn}
            onClick={() => setColumnModalShow(true)}
          >
            Add a column
          </div>
        </div>
      </div>
      {columnModalShow ? (
        <AddColumnModal
          show={columnModalShow}
          onHide={() => setColumnModalShow(false)}
        />
      ) : null}
      {cardModalShow ? (
        <AddCardModal
          show={cardModalShow}
          onHide={() => setCardModalShow(false)}
          columnid={ColumnId}
          boardid={BoardId}
        />
      ) : null}
    </>
  );
}
