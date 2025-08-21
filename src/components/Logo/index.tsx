import { TimerIcon } from "lucide-react"
import style from "./styles.module.css"

export const Logo = () => {

    return (
        <div className={style.logo}>
            <a className={style.logoLink} href="#">
                <TimerIcon />
                <span>Chronos</span>
            </a>
        </div>
    )
}