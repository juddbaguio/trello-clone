import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {ListType, StateType } from '../store/reducers';
import { store } from '../store/storeConfiguration';
import { ColumnContainer, ColumnTitle } from '../styles';
import AddNewItem from './AddNewItem';
import { Card } from './Card';

interface ColumnProps {
    text?: string
    lists?: ListType[]
}

const Column = ({text, lists, children}: React.PropsWithChildren<ColumnProps>) => {
    const [List, setList] = useState(lists);

    useEffect(() => {
        setList(store.getState().lists)
    },)
    
    return(
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {List!.filter((list: ListType) => list.text === text?.toUpperCase())[0].tasks?.map((task) => <Card key={task.id} text={task.text} />)}
            <AddNewItem
             toggleButtonText="+ Add Another Task"
             column={text?.toUpperCase()}
             dark
            />
        </ColumnContainer>
    )
}   

const mapStateToProps = (state: StateType) => {
    return {
        lists: state.lists
    }
}

export default connect(mapStateToProps,null)(Column)