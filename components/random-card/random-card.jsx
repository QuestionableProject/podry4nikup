"use client"
import { useState } from 'react';
import classes from '../card.module.css'
import classesCard from './random.module.css'
import clsx from "clsx"

export default function RandomCard() {
    const [randomNumberState, setRandomNumberState] = useState('')

    function randomNumber() {
        const number = Math.floor(Math.random() * (101 - 0) + 0);

        setRandomNumberState(number)
    }
    return (
        <div className={clsx(classes.card, classesCard.random__card)}>
            <input type="text" placeholder="Случайное число" value={randomNumberState} disabled />
            <button onClick={randomNumber}>Сгенерировать</button>
        </div>
    )
}