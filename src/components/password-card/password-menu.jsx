"use client";
import classes from "./password-menu.module.css";

const MIN_LEN = 1;
const MAX_LEN = 64;

export function PasswordMenu({ value, onChange }) {
    const set = (patch) => onChange({ ...value, ...patch });

    const onRange = (e) => set({ length: Number(e.target.value) });

    const onLenText = (e) => {
        let digits = e.target.value.replace(/\D+/g, "").slice(0, 2);
        if (digits === "") {
            set({ length: MIN_LEN });
        } else {
            let n = parseInt(digits, 10);
            if (n > MAX_LEN) n = MAX_LEN;
            set({ length: n });
        }
    };

    return (
        <section className={classes.card}>
            <div className={classes.row}>
                <span>Спецсимволы (Все)</span>
                <label className={classes.switch}>
                    <input
                        type="radio"
                        name="symbols"
                        aria-label="Спецсимволы (Все)"
                        checked={value.symbols === "max"}
                        onChange={() => set({ symbols: "max" })}
                    />
                    <span />
                </label>
            </div>
            <div className={classes.row}>
                <span>Спецсимволы (базовые)</span>
                <label className={classes.switch}>
                    <input
                        type="radio"
                        name="symbols"
                        aria-label="Спецсимволы (базовые)"
                        checked={value.symbols === "basic"}
                        onChange={() => set({ symbols: "basic" })}
                    />
                    <span />
                </label>
            </div>

            <div className={classes.row}>
                <span>Цифры</span>
                <label className={classes.switch}>
                    <input
                        type="checkbox"
                        checked={value.digits}
                        onChange={(e) => set({ digits: e.target.checked })}
                    />
                    <span />
                </label>
            </div>

            <div className={classes.row}>
                <span>Буквы</span>
                <label className={classes.switch}>
                    <input
                        type="checkbox"
                        checked={value.letters}
                        onChange={(e) => set({ letters: e.target.checked })}
                    />
                    <span />
                </label>
            </div>

            <div className={classes.row}>
                <span>Длина</span>
                <div className={classes.lengthWrap}>
                    <input
                        type="range"
                        min={MIN_LEN}
                        max={MAX_LEN}
                        step={1}
                        value={value.length}
                        onChange={onRange}
                    />
                    <input
                        className={classes.lengthInput}
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={2}
                        value={String(value.length)}
                        onChange={onLenText}
                        placeholder="16"
                    />
                </div>
            </div>
        </section>
    );
}
