import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  useEffect(() => {
    document.title = "Pro Organiser Application";
  }, []);
  return (
    <div className={styles.Navbar}>
      <p className={styles.Title}>Pro-Organiser</p>
      <div className={styles.NavItemContainer}>
        <NavLink exact to="/" activeClassName={styles.Active}>
          <div className={styles.NavItem}>Home</div>
        </NavLink>
        <NavLink to="/createboard" activeClassName={styles.Active}>
          <div className={styles.NavItem}>Create Board</div>
        </NavLink>
      </div>
    </div>
  );
}
