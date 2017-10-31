import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//---------ADD EXPENSE----------//
const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
}) => {
    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }
}

//-------REMOVE EXPENSE -------//
const removeExpense = (id) => {
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
}

//--------- EDIT EXPENSE --------//
const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        updates,
        id
    }
}

//---------- SET TEXT FILTER ---------//
const setTextFilter = (text) => {
    return {
        type: 'SET_TEXT_FILTER',
        text
    }
}

//----------- SORT BY AMOUNT --------//
const sortByAmount = () => {
    return {
        type: 'SORT',
        sortBy: 'amount'
    }
}

//----------- SORT BY DATE --------//
const sortByDate = () => {
    return {
        type: 'SORT',
        sortBy: 'date'
    }
}

//----------- SET START DATE -------//
const setStartDate = (startDate) => {
    return {
        type: 'SET_START_DATE',
        startDate
    }
}

//----------- SET END DATE --------//
const setEndDate = (endDate) => {
    return {
        type: 'SET_END_DATE',
        endDate
    }
}
//--------EXPENSE REDUCER -----//
const expensesDefaultState = [];

const expensesReducer = (state = expensesDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => {
                return id !== action.id;
            });

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id)
                    return {
                        ...expense,
                        ...action.updates
                    }
            })

        default:
            return state;
    }
}
//--------FILTER REDUCER -----//
const filterDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
const filterReducer = (state = filterDefaultState, action) => {

    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }

        case 'SORT':
            CompositionEvent
            return {
                ...state,
                sortBy: action.sortBy
            }

        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }

        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }

        default:
            return state;
    }
}

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch;
    })).sort((a,b)=>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt? 1:-1;
        }

        if(sortBy === 'amount'){
            return a.amount < b.amount? 1:-1;
        }
    })
}

//----------CREATES REDUX STORES---------//
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
});

//----------DISPATCHES AN ACTION--------//
const expenseOne = store.dispatch(addExpense({
    description: 'Rent',
    amount: 99100,
    createdAt:-21000
}));

const expenseTwo = store.dispatch(addExpense({
    description: 'Coffee',
    amount: 200,
    createdAt:-1000
}));


// store.dispatch(removeExpense(expenseOne.expense.id));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 666 }));
// store.dispatch(setTextFilter('great'));
// store.dispatch(sortByDate());
store.dispatch(sortByAmount());
// store.dispatch(setStartDate(1000));
// store.dispatch(setEndDate(444));

const demoState = {
    expenses: [{
        id: 'lkfadsjkl',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 5574,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

}
