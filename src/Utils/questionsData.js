const questionsData = {
    questions: {
        'question-1': { id: 'question-1', content: 'Who enforces the laws?' },
        'question-2': { id: 'question-2', content: 'What kind of pets are common?' },
        'question-3': { id: 'question-3', content: 'How do people tell the time?' },
        'question-4': { id: 'question-4', content: 'What foods are expensive?' },
        'question-5': { id: 'question-5', content: 'Who heals the sick?' },
        'question-6': { id: 'question-6', content: 'What crimes are common?' },
        'question-7': { id: 'question-7', content: 'What goods is the location known for?' },
        'question-8': { id: 'question-8', content: 'What goods is the location known for?' },
        'question-9': { id: 'question-9', content: 'What goods is the location known for?' },
        'question-10': { id: 'question-10', content: 'What goods is the location known for?' }
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Location Questions',
            questionIds: ['question-1', 'question-2', 'question-3', 'question-4', 'question-5', 'question-6', 'question-7', 'question-8', 'question-9', 'question-10'],
        },
        'column-2': {
            id: 'column-2',
            title: 'Answers',
            questionIds: [],
        }
    },
    //Helps reordering of columns
    columnOrder: ['column-1', 'column-2'],
};

export default questionsData;