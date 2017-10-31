import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const Edit = ({ expense, editExpense, removeExpense, history: { push } }) => {
    return (
        <div>
            <h1>Edit Expense</h1>
            <ExpenseForm
                expense={expense}
                onSubmit={(updates) => {
                    editExpense(expense.id, updates)
                    push('/');
                }}
            />
            <button onClick={() => {
                removeExpense(expense.id)
                push('/');
            }}>Remove Expense</button>
        </div>
    );
}

function mapStateToProps({ expenses }, { match: { params: { id } } }) {
    return {
        expense: expenses.find((expense) => (id === expense.id))
    }
}

export default connect(mapStateToProps, { editExpense, removeExpense })(Edit);