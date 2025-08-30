"use client"
import { useState } from 'react';
import classes from './card.module.css'

export default function MathCard() {
    const [inputResult, setInputResult] = useState(false)

    const [decision, setDecision] = useState(0)
    const [result, setResult] = useState("")
    const [mathValue, setMathValueResult] = useState("Решить уравнение")

    function mathRandom() {
        const operator = Math.floor(Math.random() * (3 - 0)) + 0
        const randomOne = Math.floor(Math.random() * (1001 - 0)) + 0
        const randomTwo = Math.floor(Math.random() * (1001 - 0)) + 0
        const mediumRandomOne = Math.floor(Math.random() * (51 - 0)) + 0
        const mediumRandomTwo = Math.floor(Math.random() * (51 - 0)) + 0
        switch (operator) {
            case 0:
                setMathValueResult(`Сколько будет ${randomOne} + ${randomTwo}`)
                const plus = randomOne + randomTwo
                setDecision(plus)
                break;
            case 1:
                setMathValueResult(`Сколько будет ${randomOne} - ${randomTwo}`)
                const minus = randomOne - randomTwo
                setDecision(minus)
                break;
            case 2:
                setMathValueResult(`Сколько будет ${mediumRandomOne} * ${mediumRandomTwo}`)
                const multiply = mediumRandomOne * mediumRandomTwo
                setDecision(multiply)
                break;
        }
        return setInputResult(true)
    }

    function equation() {
        if (result === "") {
            setMathValueResult("Решить уравнение")
            setDecision(0)
            return setInputResult(false)
        }
        if (Number(result) === decision) {
            setMathValueResult("Молодец")
            setResult("")
            setInputResult(false)
        } else {
            setMathValueResult(`Далбаеб ${decision}`)
            setResult("")
            setInputResult(false)
        }
    }

    return (
        <div className={classes.card}>
            <input className={classes.cardInput} type="text" placeholder="Реши уравнение" value={mathValue} disabled />
            {inputResult && (
                <input className={classes.cardInput} type="text" placeholder="Ответ" maxLength={20} value={result} onChange={e => setResult(e.target.value.replace(/[^0-9\. -]/g, ''))} />
            )}
            {inputResult ? (
                <button
                    className={classes.cardButton}
                    onClick={equation}
                    style={{
                        boxShadow: "-1px 5px 24px -4px #7768AE",
                        background: "#7768AE",
                    }}
                >Ответить</button>
            ) : (
                <button
                    onClick={mathRandom}
                    className={classes.cardButton}
                    style={{
                        boxShadow: "-1px 5px 24px -4px #7768AE",
                        background: "#7768AE",
                    }}
                >Сгенерировать</button>
            )}
        </div>
    )
}