import React, { Component } from 'react';
import ExpenseList from './ExpeseList'
import ExpenseListFilters from './ExpenseListFilters';

const Dashboard = () => {
    return (
        <div>
            <ExpenseListFilters/>
            <ExpenseList/>
        </div>
    );
}

export default Dashboard;