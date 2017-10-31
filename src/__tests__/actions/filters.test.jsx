import {
    setEndDate,
    setStartDate,
    setTextFilter,
    sortByAmount,
    sortByDate
} from '../../actions/filters';

test('returns set start date action object',()=>{
    expect(setStartDate(0)).toEqual({type:'SET_START_DATE',startDate:0})
})

test('returns set end date action object',()=>{
    expect(setEndDate(0)).toEqual({type:'SET_END_DATE',endDate:0})
})

test('returns set text action object',()=>{
    expect(setTextFilter('nigger')).toEqual({type:'SET_TEXT_FILTER',text:'nigger'})
})

test('return sortByAmount action object',()=>{
    expect(sortByAmount()).toEqual({type:'SORT',sortBy:'amount'})
})

test('return sortByDate action object',()=>{
    expect(sortByDate()).toEqual({type:'SORT',sortBy:'date'})
})