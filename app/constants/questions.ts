export type option = {
    value: string,
    score: number,
}[]
export type mbtiQuestions = { question: string, questionType: string, options: option }[]
export type mbtiQuestion = { question: string, questionType: string, options: option }
export type questionOptionType = {value : string, score : number}
export const mbtiQuestions: mbtiQuestions = [
    { question: 'how many people would you invite to a party?', options: [{ value: '1 person', score: -12 }, { value: '2 - 4 people', score: -6 }, { value: '4 - 6 people', score: 6 }, { value: '6 - more', score: 12 }], questionType: 'ie' },
    { question: 'how often do you think about fictional stuff?', options: [{ value: 'always', score: -12 }, { value: 'sometimes', score: -6 }, { value: 'rarely', score: 6 }, { value: 'never', score: 12 }], questionType: 'ns' },
    { question: 'how much do you think about your crush (if you have one, or when you had one)?', options: [{ value: 'I overthink', score: -12 }, { value: 'i think a lot', score: -6 }, { value: 'I rarely think', score: 6 }, { value: 'I dont care', score: 12 }], questionType: 'ft' },
    { question: 'are you ontime on diffrent events and classes?', options: [{ value: 'Yes, always', score: -12 }, { value: 'Yes, usually', score: -6 }, { value: 'No, not often', score: 6 }, { value: 'Never', score: 12 }], questionType: 'jp' },

    { question: 'how difficult it is for you to make friends?', options: [{ value: 'Very difficult', score: -12 }, { value: 'it might bother me', score: -6 }, { value: 'not that difficult', score: 6 }, { value: 'Really easy', score: 12 }], questionType: 'ie' },
    { question: 'Do you like to live in an old castle with a giant dragon?', options: [{ value: 'absolutly', score: -12 }, { value: 'probably', score: -6 }, { value: 'I dont think so', score: 6 }, { value: 'definitley not', score: 12 }], questionType: 'ns' },
    { question: 'how emotional are you?', options: [{ value: 'extremely emotional', score: -12 }, { value: 'Kind of emotional', score: -6 }, { value: 'Not really', score: 6 }, { value: 'Not at all', score: 12 }], questionType: 'ft' },
    { question: 'how clean is your room? ', options: [{ value: 'Really clean', score: -12 }, { value: 'kind of clean', score: -6 }, { value: 'kind of messy', score: 6 }, { value: 'super messy', score: 12 }], questionType: 'jp' },

    { question: 'theres a big party at your friends house, would you like to get there?', options: [{ value: 'definitley not', score: -12 }, { value: 'i dont think so', score: -6 }, { value: 'i might go', score: 6 }, { value: 'of course', score: 12 }], questionType: 'ie' },
    { question: 'if you should take a path and you "feel" like its wrong, would you take that path?', options: [{ value: 'Definitley not', score: -12 }, { value: 'I probably wont', score: -6 }, { value: 'I think I will', score: 6 }, { value: 'I will', score: 12 }], questionType: 'ns' },
    { question: 'how good you are at understanding peoples emotions?', options: [{ value: 'very good', score: -12 }, { value: 'i understand them', score: -6 }, { value: 'Not really', score: 6 }, { value: 'Not at all', score: 12 }], questionType: 'ft' },
    { question: 'you have an important exam tommorow, when will you start studying?', options: [{ value: 'right now', score: -12 }, { value: 'in an hour or two', score: -6 }, { value: 'probably at night', score: 6 }, { value: 'tommorow', score: 12 }], questionType: 'jp' },

    { question: 'How likely are you to prefer a quiet weekend alone over a social event?', options: [{ value: 'I definitely prefer alone time.', score: -12 }, { value: 'I usually prefer alone time.', score: -6 }, { value: 'I like socializing', score: 6 }, { value: 'I will go for the event', score: 12 }], questionType: 'ie' },
    { question: "How likely are you to rely on imagination over concrete facts when solving problems?", options: [{ value: 'I rely on imagination', score: -12 }, { value: 'I usually rely on imagination', score: -6 }, { value: 'I usually rely on facts', score: 6 }, { value: 'I rely on facts', score: 12 }], questionType: 'ns' },
    { question: 'How likely are you to make decisions based on empathy rather than objective analysis?', options: [{ value: 'I base decisions on empathy', score: -12 }, { value: 'I usually base decisions on empathy', score: -6 }, { value: 'I usually base decisions on analysis', score: 6 }, { value: 'I base decisions on analysis', score: 12 }], questionType: 'ft' },
    { question: 'How likely are you to prefer spontaneous plans over well-structured plans?', options: [{ value: 'I prefer structured plans', score: -12 }, { value: 'I usually prefer structured plans', score: -6 }, { value: 'I usually prefer spontaneous plans', score: 6 }, { value: 'I prefer spontaneous plans', score: 12 }], questionType: 'jp' },
]


