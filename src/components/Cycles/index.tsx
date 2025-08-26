import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"
import { getNextCycle } from "../../utils/getNextCycle"
import { getNextCycleType } from "../../utils/getNextCycleType"
import styles from "./styles.module.css"

export const Cycles = () => {
    const {state} = useTaskContext()

    const cycleStep = Array.from({length: state.currentCycle})

    const cycleDescriptionMap = {
        workTime: 'foco',
        shortBreakTime: 'descanso curto',
        longBreakTime: 'descanso longo'
    }

    return (
        <div className={styles.cycles}>
            <span>Cliclos:</span>
            <div className={styles.cyclesDots}>
                {cycleStep.map((_, index) => {
                    const  nextCycle = getNextCycle(index)
                    const nextCyleType = getNextCycleType(nextCycle)
                    return(
                     <span 
                     key={`${nextCyleType}_${nextCycle}`}
                     className={`${styles.cyclesDot} ${styles[nextCyleType]}`} aria-label={`Indicador de ciclo de ${cycleDescriptionMap[nextCyleType]}`} title={`Indicador de ciclo de ${cycleDescriptionMap[nextCyleType]}`}></span>
                    )
                })}
            </div>
        </div>
    )
}