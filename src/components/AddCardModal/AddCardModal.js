import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import styles from "./AddCardModal.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function MyVerticallyCenteredModal(props) {
  function addCardHandler() {
    const { columnid } = props;
    const { boardid } = props;
    var title = document.getElementById("title").value;
    var members = document.getElementById("team").value;
    var description = document.getElementById("description").value;
    var duedate = document.getElementById("due_date").value;
    if (
      title === "" ||
      members === "" ||
      description === "" ||
      duedate === ""
    ) {
      alert("Please fill all fields!");
    } else {
      axios
        .post(
          `https://pro-organizer-app-7871e.firebaseio.com/${boardid}/ColumnList/${columnid}/Cards.json`,
          {
            Title: title,
            Members: members,
            Description: description,
            Due_Date: duedate,
          }
        )
        .then(props.updateboard)
        .then(props.onHide());
    }
  }

  useEffect(() => {
    console.log("Add Card Modal Mounted!");
  }, []);

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className={styles.Heading}
        >
          Add Card
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">
              Enter a title for your task
            </label>
            <input
              type="text"
              id="title"
              className="form-control"
              placeholder="e.g. Add a new icon"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">
              Choose members for this task (select multiple,if needed)
            </label>
            <select className="form-control" id="team" multiple>
              <option>RJ-Rishav Jaiswal</option>
              <option>NN-Nikhil Nair</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">
              Add the description for your task
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              placeholder="Add your description here"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">
              Select due-date for this task
            </label>
            <input
              type="date"
              className="form-control"
              id="due_date"
              required
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => addCardHandler()}
          >
            Add Card
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
}
export default MyVerticallyCenteredModal;
