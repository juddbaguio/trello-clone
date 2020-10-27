import React from 'react';
import { connect } from 'react-redux';
import {ListType, StateType } from '../store/reducers';
import { ColumnContainer, ColumnTitle } from '../styles';
import AddNewItem from './AddNewItem';
import { Card } from './Card';

interface ColumnProps {
    text?: string
}

interface StateProps {
    lists: ListType[]
}

type Props = ColumnProps & StateProps

const Column = ({text, lists}: Props) => {
    
    return(
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {lists.filter((list: ListType) => list.text === text!.toUpperCase())[0].tasks.map((task) => <Card key={task.id} text={task.text} />)}
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

export default connect(mapStateToProps)(Column)