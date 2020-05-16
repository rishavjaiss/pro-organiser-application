import React from "react";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <h2 className={styles.Warning}>
      <img
        src="https://dv-website.s3.amazonaws.com/uploads/2012/12/Looking-Glass.jpg"
        alt="looking glass"
        style={{ width: "300px", height: "300px" }}
      />
      Oops! Looks like you are stranded, kindly go to Homepage :)
    </h2>
  );
}
