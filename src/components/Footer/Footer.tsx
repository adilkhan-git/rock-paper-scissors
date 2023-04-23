import React, { useState } from "react";
import Modal from "../Modal/Modal";
const Footer = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <footer className="footer">
        <div className="attribution">
          Challenge by{" "}
          <a href="https://singularity.camp/" target="_blank">
            Jusan Singularity
          </a>
          . Coded by{" "}
          <a href="https://github.com/adilkhan-git" target="_blank">
            Adilkhan Zamanbek
          </a>
          .
        </div>
        <button className="rules" onClick={toggle}>
          Rules
        </button>
      </footer>
      {modal ? <Modal toggle={toggle} /> : null}
    </>
  );
};

export default Footer;
