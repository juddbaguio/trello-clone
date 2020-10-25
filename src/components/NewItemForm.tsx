import React, { useState } from 'react';
import { NewItembutton, NewItemFormContainer, NewItemInput } from '../styles';
import { useFocus } from '../utils/useFocus';

interface NewItemFormProps {
    onAdd(text: string): void
}

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
    const [text, setText] = useState('');
    const inputRef = useFocus();

    return(
        <NewItemFormContainer>
            <NewItemInput
             ref={inputRef}
             value={text}
             onChange={(e) => setText(e.target.value)}
            />
            <NewItembutton onClick={() => onAdd(text)}>
                    Create
            </NewItembutton>
        </NewItemFormContainer>
    )
}