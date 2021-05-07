import React, { Component } from "react";
import "./Transfer.css";

class Transfer extends Component {
  state = {};
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
              ></input>
            </td>
          </tr>

          <tr>
            <td>
              <label>Payee ID </label>
            </td>
            <td>
              <input type="number" id="payeeID" placeholder="Payee ID"></input>
            </td>
          </tr>

          <tr>
            <td>
              <label>Amount </label>
            </td>
            <td>
              <input type="number" id="amount" placeholder="Amount"></input>
            </td>
          </tr>

          <tr>
            <td>
              <label>eGift </label>
            </td>
            <td>
              <select id="eGift">
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
              <input type="text" id="message" placeholder="Message"></input>
            </td>
          </tr>

          <tr>
            <td>
              <label>Expense Category </label>
            </td>
            <td>
              <select id="category">
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
              <input type="submit" value="Transfer"></input>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Transfer;
