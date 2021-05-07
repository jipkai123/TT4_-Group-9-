import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import axios from 'axios';

class ViewBalance extends Component {
    state = {
        accounts = []
    };

    componentDidMount() {
        this.checkAmountBalance();
      }
    
    checkAmountBalance () {
        const data = JSON.stringify({
            custID: sessionStorage.getItem('custID'),
            accountKey: sessionStorage.getItem('accountKey'),
        });
     axios.post('https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/accounts',
            {
                headers: {
                    "x-api-key": 'Jkx76CEYnp3NaTpwSXceo4ONDFLJNZcA717hzo1m',
                },
                data: data
            })
            .then((res) => {
                console.log(res)
                //history.replace("/home");

            }).catch((error) => {
                alert("Unable to retrieve account balance")
                console.log(error)
            });

    }

    render() {
        return (
          <div>
            <h2>Account Details</h2>
            <Table>
              <thead>
                <tr>
                  <th><h5>Account Name</h5></th>
                  <th><h5>Account Number</h5></th>
                  <th><h5>Available Balance (SGD)</h5></th>
                  <th><h5>Is Linked?</h5></th>
                </tr>
              </thead>
              <tbody>
              { this.state.accounts.map(account => 
                <tr key="{accounts.key}">
                  <td>{account.accountName}</td>
                  <td>{account.accountNumber}</td>
                  <td>${account.availableBal}</td>
                  <td>{account.islinked}</td>
                </tr>
                )
              }
              </tbody>
            </Table>
          </div>
        )
      }
    }
    
    export default ViewBalance;