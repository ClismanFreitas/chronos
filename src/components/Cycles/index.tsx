import styles from "./styles.module.css"

export const Cycles = () => {
    return (
        <div className={styles.cycles}>
            <span>Cliclos:</span>
            <div className={styles.cyclesDots}>
                <span className={`${styles.cyclesDot} ${styles.workTime}`}></span>
                <span className={`${styles.cyclesDot} ${styles.shortBreakTime}`}></span>
                <span className={`${styles.cyclesDot} ${styles.workTime}`}></span>
                <span className={`${styles.cyclesDot} ${styles.shortBreakTime}`}></span>
                <span className={`${styles.cyclesDot} ${styles.workTime}`}></span>
                <span className={`${styles.cyclesDot} ${styles.shortBreakTime}`}></span>
                <span className={`${styles.cyclesDot} ${styles.workTime}`}></span>
                <span className={`${styles.cyclesDot} ${styles.longBreakTime}`}></span>
            </div>
        </div>
    )
}