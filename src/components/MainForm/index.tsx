import { PlayCircleIcon} from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DeafaltInput } from "../Input";
import { useRef} from "react";

export function MainForm() {
    const taskNameInput = useRef<HTMLInputElement>(null)

    const handleCreateNewTask = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return(
        <form onSubmit={handleCreateNewTask} className="form" action="">
              <div className="formRow">
                <DeafaltInput 
                labelText='task' 
                id='meuInput' 
                type='text' 
                placeholder='Digite algo'
                ref={taskNameInput}
                />
              </div>

              <div className="formRow">
                <p>Próximo intervalo é de 25min.</p>
              </div>

              <div className="formRow">
                <Cycles />
              </div>

              <div className="formRow">
                <DefaultButton icon={<PlayCircleIcon />}/>
              </div>
            </form>
    )
}