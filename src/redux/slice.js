import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid';
const contactsInitialState = [];

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
              },
              prepare(text) {
                return {
                  payload: {
                    ...text,
                    id: nanoid(),
                    
                  },
                };
              },
        },
        removeContact(state, action) {
        const index = state.findIndex(task => task.id === action.payload);
        state.splice(index, 1);
        }
    },
  })

  export const {addContact, removeContact} = contactsSlice.actions;
  console.log(addContact)