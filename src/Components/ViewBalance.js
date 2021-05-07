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
    
    checkAmountBalance () => {
        const data = JSON.stringify({
            custID: sessionStorage.getItem('custID'),
            accountKey: sessionStorage.getItem('accountKey')
        });
     axios.post('https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/login',
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
}