import React, { Component } from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'
import './question.css'

const Container = styled.div`
margin-bottom: 8px;
padding: 8px;
border-radius: 3px;
background-color: ${props => (props.isDragging ? 'lightgray' : 'white')};
`;



export default class Question extends Component {
    render() {
        return (
            <Draggable draggableId={this.props.question.id} index={this.props.index}>
                {(provided, snapshot) => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        innerRef={provided.innerRef}
                        isDragging={snapshot.isDragging}
                    >

                        <div className="question__questionTile" >{this.props.question.content}</div>
                    </Container>
                )}
            </Draggable>
        )
    }
}
