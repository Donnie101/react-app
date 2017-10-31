import expensesReducer from '../../reducers/expenses';
import expenses from '../../fixtuers/expenses';

test('returns default state', () => {
    expect(expensesReducer(undefined, { type: '' })).toEqual([])
});

test('removes an expense', () => {
    expect(expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: '1' }).length)
        .toEqual(2)
})

test('removes an expense', () => {
    expect(expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: '100' }).length)
        .toEqual(3)
});

test('adds an expense', () => {
    expect(expensesReducer(expenses, {
        type: 'ADD_EXPENSE',
        expense: {
            id: '4',
            description: 'Gum',
            note: '',
            amount: 195,
            createdAt: 0
        }
    }).length).toEqual(4)
});

test('edtis an expense',()=>{
    expect(expensesReducer(expenses,{type:'EDIT_EXPENSE',id:'1',updates:{
        description:'Gumu'
    }})[0].description).toEqual('Gumu')
})



