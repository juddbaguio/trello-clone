import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { DispatchActionType, PayloadType } from '../store/reducers';
import { AddItemButton } from '../styles';
import { NewItemForm } from './NewItemForm';

interface AddNewItemProps {
    toggleButtonText: string
    dark?: boolean
    column?: string
    ADD_ITEM(column: string, payload: PayloadType): DispatchActionType
}

const AddNewItem = (props: AddNewItemProps) => {
    const [showForm, setShowForm] = useState(false);
    const { toggleButtonText, dark, column, ADD_ITEM } = props;
    if(showForm) {
        return(
            <NewItemForm
             onAdd={(text) => {
                 console.log(column);
                ADD_ITEM(column!, {id: `${Math.random()}`, text})
                 setShowForm(false)
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

const mapDispatchToProps = (dispatch: Dispatch<DispatchActionType>) => {
    return {
        ADD_ITEM: (column: string, payload:PayloadType) => dispatch({type: column, payload})
    }
}

export default connect(null,mapDispatchToProps)(AddNewItem)