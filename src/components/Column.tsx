import React from 'react';
import { useAppState } from '../AppStateContext';
import { ColumnContainer, ColumnTitle } from '../styles';
import { AddNewItem } from './AddNewItem';
import { Card } from './Card';

interface ColumnProps {
    text?: string
}

const Lists = React.memo(({text}: React.PropsWithChildren<ColumnProps>) => {
    const {state} = useAppState();
    return(
        <>
            {state.lists.filter((list) => list.text === text)[0].tasks.map((task => <Card key={task.id} text={task.text} />))}
        </>
    )
})

export const Column = ({text, children}: React.PropsWithChildren<ColumnProps>) => {
    return(
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            <Lists text={text} />
            <AddNewItem
             toggleButtonText="+ Add Another Task"
             onAdd={console.log}
             column={text}
             dark
            />
        </ColumnContainer>
    )
}