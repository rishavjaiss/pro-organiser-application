import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Loader from "react-loader-spinner";
import axios from "axios";

export default function Home() {
  const [board, setBoard] = useState();
  const [isLoading, setIsLoading] = useState(true);

  function getBoards() {
    var BoardArray = [];
    var BoardID = [];
    for (let key in board) {
      const name = board[key].Name;
      const id = key;
      BoardArray.push(name);
      BoardID.push(id);
    }
    const BoardList = BoardArray.map((name, index) => (
      <Link to={`/home/${BoardID[index]}`} key={BoardID[index]}>
        <div className={styles.Board} id={BoardID[index]}>
          {name}
        </div>
      </Link>
    ));
    return BoardList;
  }

  useEffect(() => {
    axios
      .get(`https://pro-organizer-app-7871e.firebaseio.com/.json`)
      .then((res) => (res.data != null ? setBoard(res.data) : setBoard("null")))
      .then(setIsLoading(false));
  }, []);

  return isLoading ? (
    <div
      style={{
        width: "100%",
        height: "100",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loader type="ThreeDots" color="blue" height="100" width="100" />
    </div>
  ) : board === "null" ? (
    <div className={styles.Container}>
      <p className={styles.Heading}>Boards</p>
      <h5>
        You haven't created any boards. Kindly click on the 'Create Board'
        button in the navigation bar to create a board.
      </h5>
    </div>
  ) : (
    <div className={styles.Container}>
      <p className={styles.Heading}>Boards</p>
      <div className={styles.BoardContainer}>{getBoards()}</div>
    </div>
  );
}
