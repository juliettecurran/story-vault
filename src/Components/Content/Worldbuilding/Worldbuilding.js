import React, { Component } from 'react'
import questionsData from '../../../Utils/questionsData'
import { DragDropContext } from 'react-beautiful-dnd'
import styled from 'styled-components'
import Column from './Column'

const Container = styled.div`
display: flex;
`;


console.log('qd', questionsData.columns)
export class Worldbuilding extends Component {
    state = questionsData;

    onDragStart = () => {
        document.body.style.color = '#095256';
        // document.body.style.transition = 'background-color 0.2s ease';
    }

    /*   onDragUpdate = update => {
          const { destination } = update;
          const opacity = destination ? destination.index / Object.keys(this.state.questions).length : 0;
          document.body.style.backgroundColor = `rgba(153, 141, 217, ${ opacity })`;
      } */

    onDragEnd = result => {
        document.body.style.color = 'inherit';
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const start = this.state.columns[source.droppableId];
        const finish = this.state.columns[destination.droppableId];

        if (start === finish) {
            const newQuestionIds = Array.from(start.questionIds);
            newQuestionIds.splice(source.index, 1);
            newQuestionIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...start,
                questionIds: newQuestionIds,
            };

            const newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newColumn.id]: newColumn,
                },
            };

            this.setState(newState)
            return;
        }

        //moving to other list
        const startQuestionIds = Array.from(start.questionIds);
        startQuestionIds.splice(source.index, 1);
        const newStart = {
            ...start,
            questionIds: startQuestionIds,
        };
        const finishQuestionIds = Array.from(finish.questionIds);
        finishQuestionIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            questionIds: finishQuestionIds,
        };

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        }
        this.setState(newState)
    }

    render() {
        return (
            <DragDropContext
                onDragEnd={this.onDragEnd}
                onDragStart={this.onDragStart}
                onDragUpdate={this.onDragUpdate}>
                <Container>
                    {this.state.columnOrder.map(columnId => {
                        const column = this.state.columns[columnId];
                        const questions = column.questionIds.map(questionId => this.state.questions[questionId]);

                        return <Column key={column.id} column={column} questions={questions} />
                    })}
                </Container>
            </DragDropContext>
        );
    }
}

export default Worldbuilding
