import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react"
import style from "./styles.module.css"
import { useState, useEffect } from "react"

type AvailableThemes = 'dark' | 'light'

export const Menu = () => {
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark'
        return storageTheme
    })

    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />
    }
    
    const handleThemeChange = (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        event.preventDefault()

        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
            return nextTheme
        })
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <nav className={style.menu}>
            <a className={style.menuLink} href="#" aria-label="Ir para a Home" title="Ir para a Home">
                <HouseIcon />
            </a>
            <a className={style.menuLink} href="#" aria-label="Ver Historico" title="Ver Historico">
                <HistoryIcon />
            </a>
            <a className={style.menuLink} href="#" aria-label="Configurações" title="Configurações">
                <SettingsIcon />
            </a>
            <a className={style.menuLink} href="#" aria-label="Mudar o Tema" title="Mudar o Tema" onClick={handleThemeChange}>
               {nextThemeIcon[theme]}
            </a>
        </nav>
    )
}