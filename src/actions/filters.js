
//---------- SET TEXT FILTER ---------//
export const setTextFilter = (text) => {
    return {
        type: 'SET_TEXT_FILTER',
        text
    }
}

//----------- SORT BY AMOUNT --------//
export const sortByAmount = () => {
    return {
        type: 'SORT',
        sortBy: 'amount'
    }
}

//----------- SORT BY DATE --------//
export const sortByDate = () => {
    return {
        type: 'SORT',
        sortBy: 'date'
    }
}

//----------- SET START DATE -------//
export const setStartDate = (startDate) => {
    return {
        type: 'SET_START_DATE',
        startDate
    }
}

//----------- SET END DATE --------//
export const setEndDate = (endDate) => {
    return {
        type: 'SET_END_DATE',
        endDate
    }
}