"use client"
import { useEffect, useState } from 'react';
import classes from './card.module.css'

export default function MathCard() {
    const [inputResult, setInputResult] = useState(false)

    const [decision, setDecision] = useState(0)
    const [result, setResult] = useState("")
    const [mathValue, setMathValueResult] = useState("Решить уравнение")

    function mathRandom() {
        const operator = Math.floor(Math.random() * (4 - 0)) + 0
        const randomOne = Math.floor(Math.random() * (1001 - 0)) + 0
        const randomTwo = Math.floor(Math.random() * (1001 - 0)) + 0
        const mediumRandomOne = Math.floor(Math.random() * (51 - 0)) + 0
        const mediumRandomTwo = Math.floor(Math.random() * (51 - 0)) + 0
        switch (operator) {
            case 0:
                setMathValueResult(`Сколько будет ${randomOne} + ${randomTwo}`)
                let plus = randomOne + randomTwo
                setDecision(plus)
                break;
            case 1:
                setMathValueResult(`Сколько будет ${randomOne} - ${randomTwo}`)
                let minus = randomOne - randomTwo
                setDecision(minus)
                break;
            case 2:
                setMathValueResult(`Сколько будет ${mediumRandomOne} * ${mediumRandomTwo}`)
                let multiply = mediumRandomOne * mediumRandomTwo
                setDecision(multiply)
                break;
            case 3:
                setMathValueResult(`Сколько будет ${mediumRandomOne} / ${mediumRandomTwo}`)
                let share = mediumRandomOne / mediumRandomTwo
                setDecision(share.toFixed(1))
                break;
        }
        return setInputResult(true)
    }

    function equation() {
        if (result === "") {
            setMathValueResult("Решить уравнение")
            return setInputResult(false)
        }
        if (Number(result) === decision) {
            setMathValueResult("Молодец")
            setResult("")
            setInputResult(false)
        } else {
            setMathValueResult("Далбаеб")
            setResult("")
            setInputResult(false)
        }
    }

    return (
        <div className={classes.card}>
            <input type="text" placeholder="Реши уравнение" value={mathValue} disabled />
            {inputResult && (
                <input type="text" placeholder="Ответ" maxLength={20} value={result} onChange={e => setResult(e.target.value.replace(/[^0-9\., -]/g, ''))} />
            )}
            {inputResult ? (
                <button
                    onClick={equation}
                    style={{
                        boxShadow: "-1px 5px 24px -4px #7768AE",
                        background: "#7768AE",
                    }}
                >Ответить</button>
            ) : (
                <button
                    onClick={mathRandom}
                    style={{
                        boxShadow: "-1px 5px 24px -4px #7768AE",
                        background: "#7768AE",
                    }}
                >Сгенерировать</button>
            )}
        </div>
    )
}