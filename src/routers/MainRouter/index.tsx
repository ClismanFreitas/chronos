import { NotFound } from '../../pages/NotFound'
import { AboutPomodoro } from '../../pages/AboutPomodoro'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router'
import { Home } from '../../pages/Home'
import { useEffect } from 'react'
import { History } from '../../pages/History'

function ScrollToTop() {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [pathname])
    return null
}

export const MainRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/history/" element={<History />} />
                <Route path="/about-pomodoro/" element={<AboutPomodoro />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <ScrollToTop />
        </BrowserRouter>
    )
}