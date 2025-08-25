import type { TaskStateModel } from "../../models/TaskStateModel";

export const initialTaskState: TaskStateModel = {
    tasks: [],
    secondsRemaining: 0,
    formattedSecondsRemaining: '00:00',
    asctiveTask: null,
    currentCycle: 0,
    config: {
        workTime: 15,
        shortBreakTime: 5,
        longBreakTime: 25,
    }
}