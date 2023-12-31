"use client"
import { useState } from 'react'
import classes from '../card.module.css'
import classesCard from './user-card.module.css'
import SelectUser from '../select-user'
import clsx from 'clsx'
import Cookies from 'js-cookie'

export default function UserCard() {

    const [randomUserState, setRandomUserState] = useState(false)
    const [result, setResult] = useState('')

    function randomUser(userOne, userTwo) { 
        const number = Math.floor(Math.random() * (2 - 0) + 0);
        if (userOne === "" && userTwo === "" && Cookies.get("userOne") && Cookies.get("userTwo") ) {
            if (number === 1) {
                setResult(Cookies.get("userOne"))
            } else {
                setResult(Cookies.get("userTwo"))
            }
            setRandomUserState(false)
            return false
        }  
        if (userOne === "" && userTwo === "") {
            if (number === 1) {
                setResult("Пользователь 1")
            } else {
                setResult("Пользователь 2")
            }
            setRandomUserState(false)
            return false
        } 
        if (userOne === "") {
            if (number === 1) {
                setResult("Пользователь 1")
            } else {
                setResult(userTwo)
            }
            setRandomUserState(false)
            return false
        } 
        if (userTwo === "") {
            if (number === 1) {
                setResult(userOne)
            } else {
                setResult("Пользователь 2")
            }
            setRandomUserState(false)
            return false
        } 

        if (number === 1) {
            setResult(userOne)
        } else {
            setResult(userTwo)
        }
        Cookies.set('userOne', userOne, { expires: 365 })
        Cookies.set('userTwo', userTwo, { expires: 365 })
        setRandomUserState(false)
    }
    return (
        <div className={clsx(classes.card, classesCard.user__card)}>
            {randomUserState ? (
                <SelectUser func={randomUser} />
            ) : (
                <div className={classes.options__block}>
                    <input type="text" placeholder="Случайный человек" value={result} disabled />
                    <button
                        onClick={() => setRandomUserState(true)}
                    >Сгенерировать</button>
                </div>
            )}
        </div>
    )
}