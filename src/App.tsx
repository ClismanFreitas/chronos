import { BrowserRouter, Routes, Route } from 'react-router'
import { MessagesContainer } from './components/MessagesContainer'
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider'
import { Home } from './pages/Home'

import './styles/global.css'
import './styles/theme.css'
import { NotFound } from './pages/NotFound'
import { AboutPomodoro } from './pages/AboutPomodoro'

export const App = () => {

    return (
        <TaskContextProvider>
            <BrowserRouter>
                <MessagesContainer>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/about-pomodoro" element={<AboutPomodoro/>}/>

                        <Route path="*" element={<NotFound />}/>
                    </Routes>
                </MessagesContainer>
            </BrowserRouter>
        </TaskContextProvider>
    )

} 