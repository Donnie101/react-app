import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {removeExpense} from '../actions/expenses';

const ExpenseListItme = ({ expense: {id, description, amount, createdAt },removeExpense }) => {
    return (
        <div>
            <h3>{description}</h3>
            <p>{amount} - {createdAt}</p>
            <Link to={`/edit/${id}`}>Edit</Link>
        </div>
    )
}

export default connect(null,{removeExpense})(ExpenseListItme);
