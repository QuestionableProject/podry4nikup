"use client"
import { useState } from 'react';
import classes from './select-user.module.css';

export default function SelectUser({ func }) {
    const [userOne, setUserOne] = useState('')
    const [userTwo, setUserTwo] = useState('')

    return (
        <div className={classes.selectUser}>
            <label>
                <p>
                    {userOne}
                </p>
                <input placeholder="Пользователь 1" type="text" maxLength={30} value={userOne} onChange={(e) => { setUserOne(e.target.value) }} />
            </label>
            <label>
                <p>
                    {userTwo}
                </p>
                <input placeholder="Пользователь 2" type="text" maxLength={30} value={userTwo} onChange={e => setUserTwo(e.target.value)} />
            </label>
            <button onClick={() => func(userOne, userTwo)}>Сгенерировать</button>
        </div>
    )
}