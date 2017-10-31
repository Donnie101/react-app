import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom';

import {addExpense} from '../actions/expenses';

const Add = ({addExpense,history:{push}}) => {
    return (
        <div>
            <h1>Add Expense</h1>
            <ExpenseForm 
                onSubmit={(expense)=>{
                    addExpense(expense);
                    push('/');
                }}
            />
        </div>
    ); 
}

export default connect(null,{addExpense})(Add);
