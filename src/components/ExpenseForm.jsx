import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();

class ExpenseForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            description:props.expense?props.expense.description: '',
            note: props.expense?props.expense.note: '',
            amount: props.expense?(props.expense.amount/100).toString(): '',
            createdAt: props.expense?moment(props.expense.createdAt): '',
            calendarFocused: false,
            error: ''
        }
    }

    onDescripionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }))
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }

    onDateChange = (createdAt) => {
        if (createdAt)
            this.setState(() => ({ createdAt }))
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'PLEASE PROVIDE INFO' }))
        } else {
            this.setState(() => ({ error: '' }));
            const { description, amount, createdAt, note } = this.state;
            this.props.onSubmit({
                description,
                amount: parseFloat(amount, 10) * 100,
                createdAt: createdAt.valueOf(),
                note
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.error || <p>{this.state.error}</p>}
                <form onSubmit={this.handleSubmit} action="">
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescripionChange}
                    />
                    <input
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                        type="text"
                        placeholder="amount"
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        value={this.state.note}
                        onChange={this.onNoteChange}
                        placeholder="Add a note">
                    </textarea>
                    <button type="submit">Add Expense</button>
                </form>
            </div>
        );
    }
}

export default ExpenseForm;