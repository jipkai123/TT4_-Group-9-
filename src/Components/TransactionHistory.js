import './TransactionHistory.css'
import TransactionItem from './TransactionItem'
import { useState, useEffect } from 'react';

const TransactionHistory = (props) => {
    let transactions = [];
    let accountInfo = [];
    const [filterMonth, setFilterMonth] = useState(new Date().toLocaleString('en-US', { month: 'long' }));
    const [filterYear, setFilterYear] = useState(new Date().getFullYear());

    async function getInfo() {
        try {
            let accountKey = sessionStorage.getItem('accountKey');
            let custID = sessionStorage.getItem('custID');
            await fetch("https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/accounts", {
                method: "POST",
                headers: { "x-api-key": "Jkx76CEYnp3NaTpwSXceo4ONDFLJNZcA717hzo1m" },
                body: JSON.stringify({
                    "custID": custID,
                    "accountKey": accountKey
                })
            }).then(response => response.json())
                .then(data => {
                    accountInfo = data;
                });
        } catch (err) {
            console.error(err.message);
        }
    }
    useEffect(() => {
        getInfo();
    }, []);

    async function getTransactions() {
        try {
            let accountKey = sessionStorage.getItem('accountKey');
            let custID = sessionStorage.getItem('custID');
            await fetch("https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view", {
                method: "POST",
                headers: { "x-api-key": "Jkx76CEYnp3NaTpwSXceo4ONDFLJNZcA717hzo1m" },
                body: JSON.stringify({
                    "custID": custID,
                    "accountKey": accountKey
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
        getTransactions();
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
                <h2>{accountInfo.accountName}</h2>
                <h5>{accountInfo.accountNumber}</h5>
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