import React, { Component, useEffect } from "react";
import "./Transfer.css";
import axios from "axios";

class Transfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      custId: null,
      accountKey: null,
      payeeId: null,
      amount: null,
      eGift: false,
      message: null,
      category: null,
    };
  }

  handleOnCustIdChange = (event) => {
    this.setState({
      state: {
        ...this.state,
        custId: event.target.value,
      },
    });
  };

  handleOnAccountKeyChange = (event) => {
    this.setState({
      state: {
        ...this.state,
        accountKey: event.target.value,
      },
    });
  };

  handleOnPayeeIdChange = (event) => {
    this.setState({
      state: {
        ...this.state,
        payeeId: event.target.value,
      },
    });
  };

  handleOnAmountChange = (event) => {
    this.setState({
      state: {
        ...this.state,
        amount: event.target.value,
      },
    });
  };

  handleOnEGiftChange = (event) => {
    this.setState({
      state: {
        ...this.state,
        eGift: event.target.value,
      },
    });
  };

  handleOnMessageChange = (event) => {
    this.setState({
      state: {
        ...this.state,
        message: event.target.value,
      },
    });
  };

  handleOnCategoryChange = (event) => {
    this.setState({
      state: {
        ...this.state,
        category: event.target.value,
      },
    });
  };

  handleTransfer = () => {
    const data = { ...this.object };
    axios
      .post(
        "https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add",
        data,
        {
          headers: {
            "x-api-key": "Jkx76CEYnp3NaTpwSXceo4ONDFLJNZcA717hzo1m",
          },
        }
      )
      .then(() => {})
      .catch((error) => {
        console.log("Transaction has failed", error);
      });
  };

  render() {
    return (
      // custID, accountKey, payeeID, amount, eGift, message
      // int, str, int, int, bool, string

      <div>
        <table>
          <tr>
            <td>
              <label>Customer ID </label>
            </td>
            <td>
              <input
                type="number"
                id="custID"
                placeholder="Customer ID"
                onChange="handleOnCustIdChange"
              ></input>
            </td>
          </tr>

          <tr>
            <td>
              <label>Account Key </label>
            </td>
            <td>
              <input
                type="text"
                id="accountKey"
                placeholder=">Account Key"
                onChange="handleOnAccountKeyChange"
              ></input>
            </td>
          </tr>

          <tr>
            <td>
              <label>Payee ID </label>
            </td>
            <td>
              <input
                type="number"
                id="payeeID"
                placeholder="Payee ID"
                onChange="handleOnPayeeIdChange"
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
                onChange="handleOnAmountChange"
              ></input>
            </td>
          </tr>

          <tr>
            <td>
              <label>eGift </label>
            </td>
            <td>
              <select id="eGift" onChange="handleOnEGiftChange">
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
                onChange="handleOnMessageChange"
              ></input>
            </td>
          </tr>

          <tr>
            <td>
              <label>Expense Category </label>
            </td>
            <td>
              <select id="category" onChange="handleOnCategoryChange">
                <option value="Entertainment">Entertainment</option>
                <option value="Food">Food</option>
                <option value="Insurance">Insurance</option>
                <option value="Transfer">Transfer</option>
                <option value="Transport">Transport</option>
                <option value="Shopping">Shopping</option>
                <option value="Others">Others</option>
              </select>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <br />
              <button
                type="button"
                value="Transfer"
                onClick="handleTransfer"
              ></button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Transfer;
