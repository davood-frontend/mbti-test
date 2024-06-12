'use client'
import React, { createContext, useContext, useState } from "react";
type storeQuestionsType = { ie: number, ns: number, ft: number, jp: number }
type cotnextType = {
    questionNumber: number,
    setQuestionNumber: React.Dispatch<React.SetStateAction<number>>,
    storeQuestions: storeQuestionsType,
    setStoreQuestions: React.Dispatch<React.SetStateAction<storeQuestionsType>>
    buttonLoading: boolean,
    setButtonLoading: React.Dispatch<React.SetStateAction<boolean>>
    finalResults: finalResultsType,
    setFinalResults: React.Dispatch<React.SetStateAction<finalResultsType>>
    changeHandler: (item: number, questionType: string, prev: any, revalidate: boolean) => void
    questionNumberHandler: (action: 'next' | 'prev') => void,
    showResult: () => void
}
type finalResultsType = {
    type: string,
    percentage: { label: string, value: number }[][]
}
const MainContext = createContext<cotnextType | null>(null)

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [questionNumber, setQuestionNumber] = useState(0)
    const [storeQuestions, setStoreQuestions] = useState({ ie: 0, ns: 0, ft: 0, jp: 0 })
    const [buttonLoading, setButtonLoading] = useState(false)
    const [finalResults, setFinalResults] = useState<finalResultsType>({ type: '', percentage: [] })

    const changeHandler = (item: number, questionType: string, prev: any, revalidate: boolean) => {
        const clone = { ...storeQuestions }
        if (!revalidate) {
            switch (questionType) {
                case 'ie':
                    clone.ie += item
                    break
                case 'ns':
                    clone.ns += item
                    break
                case 'ft':
                    clone.ft += item
                    break
                case 'jp':
                    clone.jp += item
                    break
            }
        } else {
            switch (questionType) {
                case 'ie':
                    clone.ie -= prev
                    clone.ie += item
                    break
                case 'ns':
                    clone.ns -= prev
                    clone.ns += item
                    break
                case 'ft':
                    clone.ft -= prev
                    clone.ft += item
                    break
                case 'jp':
                    clone.jp -= prev
                    clone.jp += item
                    break
            }
        }
        setStoreQuestions(clone)
    }
    const questionNumberHandler = (action: 'next' | 'prev') => {
        if (action === 'next') {
            setQuestionNumber(prev => prev + 1)
        } else if (action === 'prev') {
            setQuestionNumber(prev => prev - 1)
        }
    }
    const dataCalculator = (data: number) => {
        return Math.abs((data + 50) - 100)
    }
    const test = (item: any, types: string[], symbols: string[]) => {
        const [firstLetter, secondLetter] = types
        const [firstWord, secondWord] = symbols
        let type = ''
        const percentage = []
        if (item > 0) {
            type = secondWord
            percentage.push([{ label: secondLetter, value: item + 50 }, { label: firstLetter, value: Math.abs((item + 50) - 100) }])
        } else if (item < 0) {
            type = firstWord
            percentage.push([{ label: firstLetter, value: Math.abs(item) + 50 }, { label: secondLetter, value: (item + 50) }])
        } else if (item === 0) {
            type = 'x'
            percentage.push([{ label: secondLetter, value: 50 }, { label: firstLetter, value: 50 }])
        }
        return { type: type, percentage: percentage }
    }

    const showResult = () => {
        const temperarayData1 = test(storeQuestions.ie, ['Introversion', 'Extroversion'], ['i', 'e'])
        const temperarayData2 = test(storeQuestions.ns, ['Intuitive', 'Sensing'], ['n', 's'])
        const temperarayData3 = test(storeQuestions.ft, ['Feeling', 'Thinking'], ['f', 't'])
        const temperarayData4 = test(storeQuestions.jp, ['Judging', 'Perceiving'], ['j', 'p'])
        const permanentData = [...temperarayData1.percentage, ...temperarayData2.percentage, ...temperarayData3.percentage, ...temperarayData4.percentage]
        const type = temperarayData1.type + temperarayData2.type + temperarayData3.type + temperarayData4.type
        setFinalResults({ type: type, percentage: permanentData })
        localStorage.setItem('mbtiData', JSON.stringify({ type: type, percentage: permanentData }))
    }

    return (
        <MainContext.Provider value={{ questionNumber, setQuestionNumber, setStoreQuestions, storeQuestions, buttonLoading, setButtonLoading, finalResults, setFinalResults, changeHandler, questionNumberHandler, showResult }}>
            {children}
        </MainContext.Provider>
    )
}
export const useMainContext = () => {
    const context = useContext(MainContext)
    if (!context) {
        throw new Error("can't find the context")
    }
    return context
}

// const showResult = () => {
//     const type = []
//     const percentage = []
//     if (storeQuestions.ie > 0) {
//         type.push('e')
//         percentage.push({ type: 'e', percentage: storeQuestions.ie + 50 })
//     } else if (storeQuestions.ie < 0) {
//         type.push('i')
//         percentage.push({ type: 'i', percentage: Math.abs(storeQuestions.ie) + 50 })
//     } else if (storeQuestions.ie === 0) {
//         type.push('x')
//         percentage.push({ type: 'x', percentage: storeQuestions.ie })
//     }

//     if (storeQuestions.ns > 0) {
//         type.push('s')
//         percentage.push({ type: 's', percentage: storeQuestions.ns + 50 })
//     } else if (storeQuestions.ns < 0) {
//         type.push('n')
//         percentage.push({ type: 'n', percentage: Math.abs(storeQuestions.ns) + 50 })
//     } else if (storeQuestions.ns === 0) {
//         type.push('x')
//         percentage.push({ type: 'x', percentage: storeQuestions.ns })
//     }

//     if (storeQuestions.ft > 0) {
//         type.push('t')
//         percentage.push({ type: 't', percentage: storeQuestions.ft + 50 })
//     } else if (storeQuestions.ft < 0) {
//         type.push('f')
//         percentage.push({ type: 'f', percentage: Math.abs(storeQuestions.ft) + 50 })
//     } else if (storeQuestions.ft === 0) {
//         type.push('x')
//         percentage.push({ type: 'x', percentage: storeQuestions.ft })
//     }

//     if (storeQuestions.jp > 0) {
//         type.push('p')
//         percentage.push({ type: 'p', percentage: storeQuestions.jp + 50 })
//     } else if (storeQuestions.jp < 0) {
//         type.push('j')
//         percentage.push({ type: 'j', percentage: Math.abs(storeQuestions.jp) + 50 })
//     } else if (storeQuestions.jp === 0) {
//         type.push('x')
//         percentage.push({ type: 'x', percentage: storeQuestions.jp })
//     }

//     setFinalResults({ ...finalResults, type: type.join(""), percentage: [...percentage] })

// }