import type { TaskModel } from "./TaskModel"

export type TaskStateModel = {
    tasks: TaskModel[];
    secondsRemaining: number;
    formattedSecondsRemaining: string;
    asctiveTask: TaskModel | null;
    currentCycle: number;
    config: {
        workTime: number;
        shortBreakTime: number;
        longBreakTime: number;
    }
}