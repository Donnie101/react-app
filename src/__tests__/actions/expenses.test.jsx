import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    expect(removeExpense('000')).toEqual({ type: 'REMOVE_EXPENSE', id: '000' })
});

test('sould setup edit expense action object', () => {
    expect(editExpense('000', { description: 'that is great' }))
        .toEqual({
            type: 'EDIT_EXPENSE',
            updates: { description: 'that is great' },
            id: '000'
        })
});

test('it should set add expense acion object with provided values', () => {
    expect(addExpense({ description: 'good', note: 'thanks' }))
        .toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                description:'good',
                note:'thanks',
                amount : 0,
                createdAt : 0,
                id:expect.any(String)
            }
        })
})

test('it should set add expense acion object with no values', () => {
    expect(addExpense({}))
        .toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                description:'',
                note:'',
                amount : 0,
                createdAt : 0,
                id:expect.any(String)
            }
        })
})