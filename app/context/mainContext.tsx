'use client'
import React, { createContext, useContext, useState } from "react";
import { mbtiQuestions } from "../constants/questions";
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
    showResult: () => void,
    snackBar: snackBarType,
    setSnackBar: React.Dispatch<React.SetStateAction<snackBarType>>
    answeredQuestions: boolean[],
    setAnsweredQuestions: React.Dispatch<React.SetStateAction<boolean[]>>
}
type finalResultsType = {
    type: string,
    percentage: { label: string, value: number }[][]
}
type snackBarType = {
    open: boolean,
    message: string
    severity: string;
}

let initialAnsweredQuestions = new Array(mbtiQuestions.length).fill(false)
const MainContext = createContext<cotnextType | null>(null)
const ISSERVER = typeof window === "undefined";

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [questionNumber, setQuestionNumber] = useState(0)
    const [storeQuestions, setStoreQuestions] = useState({ ie: 0, ns: 0, ft: 0, jp: 0 })
    const [buttonLoading, setButtonLoading] = useState(false)
    const [finalResults, setFinalResults] = useState<finalResultsType>({ type: '', percentage: [] })
    const [answeredQuestions, setAnsweredQuestions] = useState(initialAnsweredQuestions)
    const [snackBar, setSnackBar] = useState({
        open: false,
        message: '',
        severity: '',
    })

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
    const dataCalculator = (item: number, types: string[], symbols: string[]) => {
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
            type = Math.random() < 0.5 ? firstWord : secondWord
            percentage.push([{ label: secondLetter, value: 50 }, { label: firstLetter, value: 50 }])
        }
        return { type: type, percentage: percentage }
    }
    const showResult = () => {
        const temperarayData1 = dataCalculator(storeQuestions.ie, ['Introversion', 'Extroversion'], ['i', 'e'])
        const temperarayData2 = dataCalculator(storeQuestions.ns, ['Intuitive', 'Sensing'], ['n', 's'])
        const temperarayData3 = dataCalculator(storeQuestions.ft, ['Feeling', 'Thinking'], ['f', 't'])
        const temperarayData4 = dataCalculator(storeQuestions.jp, ['Judging', 'Perceiving'], ['j', 'p'])
        const permanentData = [...temperarayData1.percentage, ...temperarayData2.percentage, ...temperarayData3.percentage, ...temperarayData4.percentage]
        const type = temperarayData1.type + temperarayData2.type + temperarayData3.type + temperarayData4.type
        setFinalResults({ type: type, percentage: permanentData })
        !ISSERVER && localStorage.setItem('mbtiData', JSON.stringify({ type: type, percentage: permanentData }))
    }

    return (
        <MainContext.Provider value={{ questionNumber, setQuestionNumber, setStoreQuestions, storeQuestions, buttonLoading, setButtonLoading, finalResults, setFinalResults, changeHandler, questionNumberHandler, showResult, setSnackBar, snackBar, answeredQuestions, setAnsweredQuestions }}>
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

