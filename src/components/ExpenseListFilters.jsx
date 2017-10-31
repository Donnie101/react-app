import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates'
import { setEndDate,setStartDate, setTextFilter, sortByAmount, sortByDate } from '../actions/filters'


class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }

    onDatesChange = ({startDate,endDate})=>{
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate)
    }

    onFocusChange = (calendarFocused)=>{
        this.setState(()=>({calendarFocused}))
    }

    render() {
        return (
            <div>
                <input type="text" onChange={(e) => {
                    setTextFilter(e.target.value)
                }} value={this.props.filters.text} />
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        e.target.value === 'date' ? this.props.sortByDate() : this.props.sortByAmount();
                    }}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                    showClearDates={true}
                />
            </div>
        );
    }
}

function mapStateToProps({ filters }) {
    return { filters }
}

export default connect(mapStateToProps,
    {
        setTextFilter,
        sortByAmount,
        sortByDate,
        setStartDate,
        setEndDate
    }
)(ExpenseListFilters);