import './TransactionHistory.css'
import TransactionItem from './TransactionItem'
import { useState, useEffect } from 'react';

let transactions = [
    {
        "eGift": false,
        "datetime": 1612705768,
        "custID": 9,
        "amount": "57.51",
        "message": "",
        "payeeID": 1,
        "expenseCat": "Insurance"
    },
    {
        "eGift": true,
        "datetime": 1612016194,
        "custID": 9,
        "amount": "647.70",
        "message": "",
        "payeeID": 13,
        "expenseCat": "Transport"
    },
    {
        "eGift": false,
        "datetime": 1617000461,
        "custID": 9,
        "amount": "608.74",
        "message": "",
        "payeeID": 19,
        "expenseCat": "Shopping"
    },
    {
        "eGift": true,
        "datetime": 1610593166,
        "custID": 13,
        "amount": "964.17",
        "message": "Dinner",
        "payeeID": 9,
        "expenseCat": "Transfer"
    },
    {
        "eGift": false,
        "datetime": 1613030203,
        "custID": 9,
        "amount": "906.71",
        "message": "",
        "payeeID": 21,
        "expenseCat": "Entertainment"
    },
    {
        "eGift": false,
        "datetime": 1618749967,
        "custID": 9,
        "amount": "193.60",
        "message": "",
        "payeeID": 15,
        "expenseCat": "Others"
    },
    {
        "eGift": true,
        "datetime": 1618120355,
        "custID": 9,
        "amount": "724.25",
        "message": "Dinner",
        "payeeID": 21,
        "expenseCat": "Shopping"
    },
    {
        "eGift": false,
        "datetime": 1611910613,
        "custID": 12,
        "amount": "501.74",
        "message": "",
        "payeeID": 9,
        "expenseCat": "Transport"
    }
];

const TransactionHistory = (props) => {
    const [filterMonth, setFilterMonth] = useState(new Date().toLocaleString('en-US', { month: 'long' }));
    const [filterYear, setFilterYear] = useState(new Date().getFullYear());

    async function getInfo() {
        try {
            let id = 0;
            await fetch("https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view", {
                method: "POST",
                headers: { "x-api-key": "Jkx76CEYnp3NaTpwSXceo4ONDFLJNZcA717hzo1m" },
                body: JSON.stringify({
                    "custID": 9,
                    "accountKey": "tmrhdi7k-tp5t-ptk6-d577-yxg2illy0vi"
                })
            }).then(response => response.json())
                .then(data => {
                    transactions = data;
                });
        } catch (err) {
            console.error(err.message);
        }
    }
    useEffect(() => {
        getInfo();
    }, []);

    // const filteredTransactionHistory = transactions;
    const filteredTransactionHistory = transactions.filter(transaction =>
        new Date(transaction.datetime).toLocaleString('en-US', { month: 'long' }) === filterMonth &&
        new Date(transaction.datetime).getFullYear().toString() === filterYear);

    let transactionListContent = <p>No Transactions Found.</p>;
    if (filteredTransactionHistory.length > 0)
        transactionListContent = filteredTransactionHistory.map((transaction, index) =>
            <TransactionItem key={"trans" + index.toString()} title={transaction.expenseCat} date={transaction.datetime} amount={transaction.amount} />);

    const dropdownChangeMonthHandler = (e) => {
        setFilterMonth(e.target.value);
    };
    const dropdownChangeYearHandler = (e) => {
        setFilterYear(e.target.value);
    };

    return (
        <div>
            <div className="account-details">
                <h2>Multiplier Account</h2>
                <h5>12152818</h5>
            </div>
            <div className='expenses-filter'>
                <div className='expenses-filter__control'>
                    <label>Filter by Month</label>
                    <select value={filterMonth} onChange={dropdownChangeMonthHandler}>
                        <option value='January'>Jan</option>
                        <option value='Feburary'>Feb</option>
                        <option value='March'>Mar</option>
                        <option value='April'>Apr</option>
                        <option value='May'>May</option>
                        <option value='June'>Jun</option>
                        <option value='July'>Jul</option>
                        <option value='August'>Aug</option>
                        <option value='September'>Sep</option>
                        <option value='October'>Oct</option>
                        <option value='November'>Nov</option>
                        <option value='December'>Dec</option>
                    </select>
                    <label>Filter by year</label>
                    <select value={filterYear} onChange={dropdownChangeYearHandler}>
                        <option value='2022'>2022</option>
                        <option value='2021'>2021</option>
                        <option value='2020'>2020</option>
                        <option value='2019'>2019</option>
                        <option value={1970}>1970</option>
                    </select>
                </div>
            </div>
            <div>
                <ul className='expenses-list'>
                    {transactionListContent}
                </ul>
            </div>
        </div>
    )

}

export default TransactionHistory;