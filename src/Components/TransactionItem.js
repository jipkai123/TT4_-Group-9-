import './TransactionItem.css';

const TransactionItem = (props) => {
    let date = new Date(props.date * 1000)
    const month = date.toLocaleString('en-US', { month: 'long' });
    const day = date.toLocaleString('en-US', { day: '2-digit' });
    const year = date.getFullYear();
    const time = date.toLocaleTimeString();

    return (
        <li>
            <div className="expense-item">
            <div className="expense-date">
                <div className="expnse-date__month">{month}</div>
                <div className="expnse-date__year">{year}</div>
                <div className="expnse-date__day">{day}</div>
            </div>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price"> - ${props.amount}</div>
                </div>
            </div>
        </li>
    );
}
export default TransactionItem;