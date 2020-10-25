import React, { useState } from 'react';
import { useAppState } from '../AppStateContext';
import { AddItemButton } from '../styles';
import { NewItemForm } from './NewItemForm';

interface AddNewItemProps {
    onAdd(text: string): void
    toggleButtonText: string
    dark?: boolean
    column?: string
}

export const AddNewItem = (props: AddNewItemProps) => {
    const [showForm, setShowForm] = useState(false);
    const { toggleButtonText, dark, column } = props;
    const {state, dispatch} = useAppState();
    if(showForm) {
        return(
            <NewItemForm
             onAdd={(text) => {
                // onAdd(text)
                 dispatch({type: column!, payload: text})
                 setShowForm(false)
                 console.log(state);
             }}
            />
        )
    }

    return(
        <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
            {toggleButtonText}
        </AddItemButton>
    )
}