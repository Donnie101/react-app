import React from 'react';
import { shallow } from 'enzyme';
import {ExpenseList} from '../../components/ExpeseList';
import expenses from '../../fixtuers/expenses';

test('render ExpenseList',()=>{
    const wrapper = shallow(<ExpenseList expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot()
});