import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./BoardDetails.module.css";
import AddColumnModal from "../AddColumnModal/AddColumnModal.js";
import AddCardModal from "../AddCardModal/AddCardModal.js";
import CardDetailsModal from "../CardDetailsModal/CardDetailsModal.js";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BoardDetails(props) {
  const [boardDetails, setBoardDetails] = useState({});
  const [columnModalShow, setColumnModalShow] = useState(false);
  const [cardModalShow, setCardModalShow] = useState(false);
  const [ColumnId, setColumnId] = useState("");
  const [viewCardModal, setViewCardModal] = useState(false);
  const [cardId, setCardId] = useState("");
  const [updateBoard, setUpdateBoard] = useState(0);
  const BoardId = props.match.params.id;

  useEffect(() => {
    axios
      .get(`https://pro-organizer-app-7871e.firebaseio.com/${BoardId}.json`)
      .then((res) => setBoardDetails(res.data));
  }, [updateBoard]);

  useEffect(() => {
    axios
      .get(`https://pro-organizer-app-7871e.firebaseio.com/${BoardId}.json`)
      .then((res) => setBoardDetails(res.data));
  }, [BoardId]);

  function deleteCard(e) {
    var delCard = e.currentTarget.parentNode.parentNode.id;
    var colId = e.currentTarget.parentNode.parentNode.parentNode.parentNode.id;
    axios
      .delete(
        `https://pro-organizer-app-7871e.firebaseio.com/${BoardId}/ColumnList/${colId}/Cards/${delCard}.json`
      )
      .then(e.currentTarget.parentNode.parentNode.remove());
  }
  function deleteColumn(e) {
    var delCol = e.currentTarget.parentNode.parentNode.id;
    axios
      .delete(
        `https://pro-organizer-app-7871e.firebaseio.com/${BoardId}/ColumnList/${delCol}.json`
      )
      .then(e.currentTarget.parentNode.parentNode.remove());
  }

  //-------  Drag and Drop-------//

  function drag(e) {
    e.dataTransfer.setData("cardID", e.currentTarget.id);
    e.dataTransfer.setData(
      "columnID",
      e.currentTarget.parentNode.parentNode.id
    );
    e.dataTransfer.setData(
      "cardData",
      document.getElementById(e.currentTarget.id).querySelectorAll("*")
    );
    console.log(
      document.getElementById(e.currentTarget.id).querySelectorAll("*")
    );
  }
  function allowDrop(e) {
    e.preventDefault();
  }
  function drop(e) {
    e.preventDefault();
    var cardID = e.dataTransfer.getData("cardID");
    var columnID = e.dataTransfer.getData("columnID");
    var cardData = e.dataTransfer.getData("cardData");
    console.log(cardID);
    console.log(columnID);
    console.log(cardData);
    // axios
    //   .post(
    //     `https://pro-organizer-app-7871e.firebaseio.com/${BoardId}/ColumnList/${columnID}/Cards.json`,
    //     {}
    //   )
    //   .then(e.target.appendChild(document.getElementById(cardID)));
  }

  //---------Drag and Drop end--------//

  function viewDetails(cardId) {
    setCardId(cardId);
    setColumnId(document.getElementById(cardId).parentNode.parentNode.id);
    setViewCardModal(true);
  }
  function addCard(ColumnId) {
    setColumnId(ColumnId);
    setCardModalShow(true);
  }
  function getCards(ColumnId) {
    var CardTitle = [];
    var CardMembers = [];
    var CardID = [];
    for (let key in boardDetails.ColumnList[ColumnId]?.Cards) {
      const title = boardDetails.ColumnList[ColumnId]?.Cards[key].Title;
      const members = boardDetails.ColumnList[ColumnId]?.Cards[key].Members;
      const id = key;
      CardTitle.push(title);
      CardMembers.push(members.split("-")[0]);
      CardID.push(id);
    }
    const CardList = CardTitle.map((title, index) => (
      <div
        className={styles.Card}
        id={CardID[index]}
        key={index}
        draggable
        onDragStart={(e) => drag(e)}
      >
        <div className={styles.Title}>
          <p>{title}</p>
          <img
            src="https://image.flaticon.com/icons/svg/60/60761.svg"
            alt="delete"
            className={styles.DeleteBin}
            onClick={(e) => deleteCard(e)}
          />
        </div>
        <div className={styles.MemberContainer}>
          <img
            src="https://static.thenounproject.com/png/1107449-200.png"
            alt="ViewButton"
            className={styles.ViewButton}
            onClick={() => viewDetails(CardID[index])}
          ></img>
          <span className={styles.MemberIcon}>{CardMembers[index]}</span>
        </div>
      </div>
    ));
    return CardTitle.length > 0 ? CardList : <span>No tasks added</span>;
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
      <div
        className={styles.Column}
        id={ColumnID[index]}
        key={index}
        onDragOver={(e) => allowDrop(e)}
        onDrop={(e) => drop(e)}
      >
        <div className={styles.ColumnHead}>
          <span>{name}</span>
          <img
            src="https://image.flaticon.com/icons/svg/60/60761.svg"
            alt="delete"
            className={styles.DeleteBin}
            onClick={(e) => deleteColumn(e)}
          />
        </div>
        <div className={styles.CardContainer}>{getCards(ColumnID[index])}</div>
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
    axios.delete(
      `https://pro-organizer-app-7871e.firebaseio.com/${BoardId}.json`
    );
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
          updateboard={() => setUpdateBoard((s) => s + 1)}
        />
      ) : null}
      {cardModalShow ? (
        <AddCardModal
          show={cardModalShow}
          onHide={() => setCardModalShow(false)}
          columnid={ColumnId}
          boardid={BoardId}
          updateboard={() => setUpdateBoard((s) => s + 1)}
        />
      ) : null}
      {viewCardModal ? (
        <CardDetailsModal
          show={viewCardModal}
          onHide={() => setViewCardModal(false)}
          columnid={ColumnId}
          cardid={cardId}
          boardid={BoardId}
        />
      ) : null}
    </>
  );
}
