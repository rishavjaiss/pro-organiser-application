import React from "react";
import axios from "axios";
import styles from "./CreateBoard.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CreateBoard() {
  function handleSubmit(e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var team = document.getElementById("team").value.split(",");
    var type = document.getElementById("type").value;
    if (name !== "" && team !== "" && type !== "")
      axios
        .post(`https://pro-organizer-app-7871e.firebaseio.com/.json`, {
          Name: name,
          Members: team,
          Type: type,
        })
        .then(
          (document.getElementById("name").value = ""),
          (document.getElementById("team").value = ""),
          (document.getElementById("type").value = "")
        );
  }

  return (
    <div className={styles.Container}>
      <p className={styles.Heading}>Create a Board</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">
            Enter a name for your board
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="e.g. Agile Sprint Board"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Add your team members</label>
          <input
            type="text"
            className="form-control"
            id="team"
            placeholder="Add your team (seperated by commas)"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput3">
            Enter type of your board
          </label>
          <input
            type="text"
            className="form-control"
            id="type"
            placeholder="e.g. Design UI/UX"
            required
          />
        </div>
        <button type="submit" id="CreateBoard" className="btn btn-primary">
          Create
        </button>
      </form>
    </div>
  );
}
