import axios from "axios";
import React, { Component, useState } from "react";

export default function Transfer() {
  const [payeeID, setPayeeID] = useState(0);
  const [amount, setAmount] = useState(0);
  // const [eGift, setEGift] = useState("Yes");
  // const [message, setMessage] = useState(0);

  function handlePayeeChange(e) {
    e.preventDefault();
    setPayeeID(e.target.value);
  }

  function handleAmountChange(e) {
    e.preventDefault();
    setAmount(e.target.value);
  }

  // function handleEGiftChange(e) {
  //   e.preventDefault();
  //   setEGift(e.target.value);
  // }

  // function handleMessageChange(e) {
  //   e.preventDefault();
  //   setMessage(e.target.value);
  // }

  async function handleTransfer() {
    try {
      let data = await axios.post(
        "https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add",
        {
          custID: "9",
          accountKey: "tmrhdi7k-tp5t-ptk6-d577-yxg2illy0vi",
          payeeID,
          amount,
          // eGift,
          // message,
        },
        {
          headers: {
            "x-api-key": "Jkx76CEYnp3NaTpwSXceo4ONDFLJNZcA717hzo1m",
          },
        }
      );
      alert("Trasfer successful");
    } catch (error) {
      console.error("Transaction has failed", error);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleTransfer();
  }

  return (
    <div>
      <table>
        <tr>
          {" "}
          <td>
            <label>Payee ID </label>
          </td>
          <td>
            <input
              type="number"
              id="payeeID"
              placeholder="Payee ID"
              value={payeeID}
              onChange={handlePayeeChange}
            ></input>
          </td>
        </tr>

        <tr>
          <td>
            <label>Amount </label>
          </td>
          <td>
            <input
              type="number"
              id="amount"
              placeholder="Amount"
              value={amount}
              onChange={handleAmountChange}
            ></input>
          </td>
        </tr>
        {/* 
        <tr>
          <td>
            <label>eGift </label>
          </td>
          <td>
            <select id="eGift" onChange={handleEGiftChange} value={eGift}>
              <option value="True">Yes</option>
              <option value="False">No</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>
            <label>Message </label>
          </td>
          <td>
            <input
              type="text"
              id="message"
              placeholder="Message"
              onChange={handleMessageChange}
              value={message}
            ></input>
          </td>
        </tr> */}

        <tr>
          <td></td>
          <td>
            <br />
            <button type="submit" onClick={handleSubmit}>
              Transfer
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}
