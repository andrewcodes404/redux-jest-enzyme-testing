import React from 'react'
import { mount } from 'enzyme'
import CommentList from 'components/CommentList'
import Root from 'Root'

let wrapped;

beforeEach(() => {
    const initialState = {
        comments: ['comment1', 'comment2']
    }
    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    )
})

it('creates an li per comment', () => {
    expect(wrapped.find('li').length).toEqual(2)
})

it('shows the text for each comment', ()=>{
    // console.log("comments : ", wrapped.render().text());
    expect(wrapped.render().text()).toContain('comment1')
    expect(wrapped.render().text()).toContain('comment2')
})