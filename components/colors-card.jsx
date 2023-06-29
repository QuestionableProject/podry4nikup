"use client"
import { useState } from 'react';
import classes from './card.module.css'

export default function ColorsCard() {
    const [colorOne, setColorOne] = useState("#E15554")
    const [colorTwo, setColorTwo] = useState("#FFD166")
    const [colorTree, setColorTree] = useState("#3BB273")

    function randomColor() {
        let a = Math.floor(Math.random() * (256 - 0)) + 0;
        let b = Math.floor(Math.random() * (256 - 0)) + 0;
        let c = Math.floor(Math.random() * (256 - 0)) + 0;
        setColorOne('#' + a.toString(16) + b.toString(16) + c.toString(16))
        let r = Math.floor(Math.random() * (256 - 0)) + 0;
        let g = Math.floor(Math.random() * (256 - 0)) + 0;
        let k = Math.floor(Math.random() * (256 - 0)) + 0;
        setColorTwo('#' + r.toString(16) + g.toString(16) + k.toString(16))
        let z = Math.floor(Math.random() * 256);
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        setColorTree('#' + x.toString(16) + y.toString(16) + z.toString(16))
    }

    function copy(e) {
        navigator.clipboard.writeText(e.target.style.background)
    }
    return (
        <div className={classes.card}>
            <div className={classes.colors}>
                <div onClick={copy} className={classes.colors__block} style={{
                    background: colorOne
                }}></div>
                <div onClick={copy} className={classes.colors__block} style={{
                    background: colorTwo
                }}></div>
                <div onClick={copy} className={classes.colors__block} style={{
                    background: colorTree
                }}></div>
            </div>
            <button
                onClick={randomColor}
                style={{
                    boxShadow: "-1px 5px 24px -4px #FFD166",
                    background: "#FFD166",
                    color: "black"
                }}
            >Сгенерировать</button>
        </div>
    )
}