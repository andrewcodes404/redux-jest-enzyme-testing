///we rename the reducer here to make it clearer
import commentsReducer from 'reducers/comments'

import { SAVE_COMMENT } from 'actions/types'

it('handles actions of type SAVE_COMMENT', ()=>{
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    };

    const newState = commentsReducer([], action)
    expect(newState).toEqual(['New Comment'])
})


////Check that if type unkown an error is NOT thrown
// Bascially doing this
it('does not throw error on unknown action type', () => {
    const action = {
        type: "UNKOWN_TYPE",
        payload: 'New Comment'
    };

    const newState = commentsReducer([], action)
    expect(newState).toEqual([])
})

///in a more terse way
it('does not throw error on unknown action type', () => {
    const newState = commentsReducer([], {})
    expect(newState).toEqual([])
})