import { useState } from "react"
import { initialTaskState } from "./initialTaskState"
import { TaskContext } from "./TaskContext"

type TaskContextProviderProps = {
    children: React.ReactNode
}

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
    const [state, setState] = useState(initialTaskState)

    return (
        <TaskContext.Provider value={{ state, setState }}>
            <h1>TESTE</h1>
        </TaskContext.Provider>
    )
}