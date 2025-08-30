"use client"
import { useEffect, useRef, useState } from 'react';
import classes from '../card.module.css'
import styles from './password-menu.module.css'
import { PasswordMenu } from './password-menu';

export default function PasswordCard() {
    const [result, setResult] = useState("")

    const [options, setOptions] = useState(false);

    const [opts, setOpts] = useState({
        symbols: "max", // "basic" | "max"
        digits: true,
        letters: true,
        length: 16,
    });

    const [copied, setCopied] = useState(false);
    const timerRef = useRef(null);
    const copy = async () => {
        if (!result) return;
        try {
            await navigator.clipboard.writeText(result);
        } finally {
            setCopied(true);
            clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => setCopied(false), 700);
        }
    };
    useEffect(() => () => clearTimeout(timerRef.current), []);


    const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const DIGITS = "0123456789";
    const BASIC_SPECIALS = "!@#$%^&*()-_=+<>/?";
    const MAX_SPECIALS =
        "~`!@#$%^&*()-_=+[]{};:'\",.<>/?|№";

    function passwordGenerate() {
        const specials = opts.symbols === "max" ? MAX_SPECIALS : BASIC_SPECIALS;
        const pool =
            specials +
            (opts.digits ? DIGITS : "") +
            (opts.letters ? LETTERS : "");

        if (!pool.length) {
            setResult("");
            return;
        }

        let pwd = "";
        if (opts.letters) {
            const i = Math.floor(Math.random() * LETTERS.length);
            pwd += LETTERS[i];
        } else {
            const i = Math.floor(Math.random() * pool.length);
            pwd += pool[i];
        }

        const tailLen = Math.max(0, opts.length - 1);
        const arr = new Uint32Array(tailLen);
        crypto.getRandomValues(arr);
        for (let i = 0; i < arr.length; i++) {
            pwd += pool[arr[i] % pool.length];
        }

        setResult(pwd);
    }

    return (
        <div className={classes.card}>
            {options && <PasswordMenu value={opts} onChange={setOpts} />}
            <input
                className={`${classes.cardInput} ${styles.cardInputPass} ${copied ? styles.copied : ""}`}
                onClick={copy}
                type="text"
                style={{ cursor: "pointer" }}
                placeholder="Случайный пароль"
                value={result}
                readOnly
            />
            <div
                style={{
                    display: "flex",
                    boxShadow: "-1px 5px 24px -4px #4D9DE0",
                    background: "none",
                    borderRadius: "10px"
                }}
            >
                <button
                    className={classes.cardButton}
                    onClick={passwordGenerate}
                    style={{
                        background: "#4D9DE0",
                        borderTopRightRadius: "10px",
                        borderBottomRightRadius: "10px"
                    }}
                >Сгенерировать</button>
                <div className={styles.optionsBtn} onClick={() => {options?setOptions(false):setOptions(true)}}>
                    <img src="/gear.svg" alt="gear" />
                </div>
            </div>
        </div>
    )
}