let initialState = {
    id: '',
    title: '',
    location: '',
    date: '',
    text: '',
    image: ''
}

const ADD_NOTE = "ADD_NOTE"

export default function reducer(state=initialState, action) {
    switch(action.type) {
        // case ADD_NOTE:
        //     return Object.assign({}, state, {  })
        default: 
        return state;
    }
}

// export function addNote() {
//     return {
//         type: ADD_NOTE,
//         payload = {

//         }
//     }
// }
