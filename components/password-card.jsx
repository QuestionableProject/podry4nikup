"use client"
import { useState } from 'react';
import classes from './card.module.css'

export default function PasswordCard() {
    const [result, setResult] = useState("")

    function passwordGenerate() {
        let password = "";
        let symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!№%?()_+=";
        for (var i = 0; i < 16; i++){
            password += symbols.charAt(Math.floor(Math.random() * symbols.length));     
        }
        setResult(password)
    }
    return (
        <div className={classes.card}>
            <input onClick={() => navigator.clipboard.writeText(result)} type="text" style={{cursor:"pointer"}} placeholder="Случайный пароль" value={result} disabled/>
            <button 
                onClick={passwordGenerate}
                style={{
                    boxShadow: "-1px 5px 24px -4px #4D9DE0",
                    background: "#4D9DE0",
                }}
            >Сгенерировать</button>
        </div>
    )
}