import classes from './line.module.css'

export default function Line() {
    return (
        <svg className={classes.line} width="1440" height="800" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-8 3C42.5 9.5 184.6 75.1 349 285.5C554.5 548.5 750.5 655 885 482C1019.5 309 936.5 125 1166.5 123.5C1396.5 122 916 656.5 1186.5 689C1402.9 715 1488 772.833 1503.5 798.5" stroke="url(#paint0_linear_10_3)" strokeOpacity="0.2" strokeWidth="5" />
            <defs>
                <linearGradient id="paint0_linear_10_3" x1="29.5" y1="23" x2="1422.5" y2="773" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E15554" />
                    <stop offset="0.353572" stopColor="#605589" />
                    <stop offset="0.482292" stopColor="#FFD166" />
                    <stop offset="0.728037" stopColor="#3BB273" />
                    <stop offset="0.773958" stopColor="#4D9DE0" />
                </linearGradient>
            </defs>
        </svg>

    )
}