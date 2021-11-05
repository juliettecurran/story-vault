import React, { Component } from 'react'
import Question from './Question'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'

const Container = styled.div`
margin: 8px;
border - radius: 2px;
width: 400px;
display: flex;
flex-direction: column;
border: 2px solid green;
`;

const Title = styled.h3`
padding:8px;
	position: relative;
	overflow: hidden;
	font-family: "Satisfy", cursive;
	font-size: 1.7em;
`;
const QuestionList = styled.div`
   padding: 8px;
   background-color: ${props => (props.isDraggingOver ? 'green' : 'blue')}
   flex-grow: 1;
   min-height: 250px;
`;


export default class Column extends Component {
    render() {
        return (
            <Container>
                <Title> {this.props.column.title} </Title>
                <Droppable droppableId={this.props.column.id}>

                    {(provided, snapshot) => (
                        <QuestionList
                            ref={provided.innerRef}
                            innerRef={provided.innerRef}
                            {...provided.droppableProps}
                            isDraggingOver={snapshot.isDraggingOver}
                        >
                            {this.props.questions.map((question, index) => <Question columnId={this.props.column.id} key={question.id} question={question} index={index} />)}

                            {provided.placeholder}
                        </QuestionList>
                    )}


                </Droppable>
            </Container>
        )
    }
}

