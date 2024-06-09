'use client'
import React, { createContext, useContext, useState } from "react";
type storeQuestionsType = { ie: number, ns: number, ft: number, jp: number }
type cotnextType = {
    finalResult: string,
    setFinalResult: React.Dispatch<React.SetStateAction<string>>,
    questionNumber: number,
    setQuestionNumber: React.Dispatch<React.SetStateAction<number>>,
    storeQuestions: storeQuestionsType,
    setStoreQuestions: React.Dispatch<React.SetStateAction<storeQuestionsType>>
}
const MainContext = createContext<cotnextType | null>(null)

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [finalResult, setFinalResult] = useState('')
    const [questionNumber, setQuestionNumber] = useState(0)
    const [storeQuestions, setStoreQuestions] = useState({ ie: 0, ns: 0, ft: 0, jp: 0 })


    return (
        <MainContext.Provider value={{ finalResult, setFinalResult, questionNumber, setQuestionNumber ,setStoreQuestions,storeQuestions}}>
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