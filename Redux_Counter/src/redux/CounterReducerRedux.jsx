function CounterReducer(state, action) {

    switch (action.type) {
        case 'inc': {
            return { ...state, counter: state.counter + 1 }
        }
        case 'desc': {
            return { ...state, counter: state.counter - 1 }
        }
    }

}

export default CounterReducer