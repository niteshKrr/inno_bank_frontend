import React, { useState } from "react";
import styles from "../../styles/SquareBox.module.css";
import StayAnonymous from "../donate/StayAnonymous";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

const SquareBox = ({ idea, setIdea, amount, setAmount }) => {
  const btnClicked = () => {
    // console.log(`amount is: ${amount}`);
    // console.log(`idea is: ${idea}`);
  };

  return (
    <div className="d-flex justify-content-center my-5">
      <div className={`${styles.squareBox}`}>
        <h3 style={{ color: "white", marginTop: "15px" }}>
          Make request to the community
        </h3>

        <div
          className="input-group  mx-5 d-flex justify-content-center"
          style={{ width: "400px" }}
        >
          <InputGroup className="my-1">
            <InputGroup.Text>Idea</InputGroup.Text>
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              rows="8"
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
            />
          </InputGroup>
          <span className="input-group-text">Funds required</span>
          <input
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            type="text"
            className="form-control"
            aria-label="Amount (to the nearest dollar)"
          />
        </div>
        <div className="mb-2" style={{ color: "white" }}>
          "Enter amount in wei"
        </div>
        <button
          className={`btn btn-primary rounded-pill`}
          style={{ width: "175px" }}
          onClick={() => {
            btnClicked();
          }}
        >
          Request
        </button>
      </div>
    </div>
  );
};

export default SquareBox;