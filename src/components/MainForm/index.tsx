import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DeafaltButton } from "../DefaultButton";
import { DeafaltInput } from "../Input";

export function MainForm() {
    return(
        <form className="form" action="">
              <div className="formRow">
                <DeafaltInput labelText='task' id='meuInput' type='text' placeholder='Digite algo'/>
              </div>

              <div className="formRow">
                <p>Próximo intervalo é de 25min.</p>
              </div>

              <div className="formRow">
                <Cycles />
              </div>

              <div className="formRow">
                <DeafaltButton icon={<PlayCircleIcon />}/>
              </div>
            </form>
    )
}