import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import axios from "axios";

export default function Home() {
  const [board, setBoard] = useState({});

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
      .then((res) => setBoard(res.data));
  }, []);

  return (
    <div className={styles.Container}>
      <p className={styles.Heading}>Boards</p>
      <div className={styles.BoardContainer}>{getBoards()}</div>
    </div>
  );
}
