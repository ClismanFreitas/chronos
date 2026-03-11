import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
    id: string;
    name: string;
    duration: number;
    // renamed for consistency with worker logic
    startDate: number;
    completeDate: number | null;
    interruptDate: number | null;
    type: keyof TaskStateModel['config'];
}