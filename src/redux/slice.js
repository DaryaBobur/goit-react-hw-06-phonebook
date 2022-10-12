import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid';
import {  toast } from 'react-toastify';



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
        const index = state.findIndex(contact => contact.id === action.payload);
        state.splice(index, 1);
        },
        duplicateName (state, action)  {
          const duplicat = state.find((contact) => contact.name === action.payload);
          // console.log(duplicat)
          if(duplicat) {
            toast.error(`${action.payload} is already in contacts!`)
            return;
          }
          }
    },
  })

  export const {addContact, removeContact, duplicateName} = contactsSlice.actions;



  const filtersInitialState = {
    filterContacts: ''
  };;

  export const filtersSlice = createSlice({
    name: "filter",
    initialState: filtersInitialState,
    reducers: {
      filterName(state, action) {
        state.filterContacts = action.payload;
        console.log(action.payload)

      },
    },
  });


  export const {filterName} = filtersSlice.actions

