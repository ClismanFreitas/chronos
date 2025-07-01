import { PlayCircleIcon } from 'lucide-react'
import { Container } from './components/Container'
import { CountDown } from './components/CountDown'
import { Cycles } from './components/Cycles'
import { DeafaltButton } from './components/DefaultButton'
import { DeafaltInput } from './components/Input'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { Footer } from './components/footer'

import './styles/global.css'
import './styles/theme.css'

export const App = () => {

    return (
        <>
          <Container>
            <Logo/>
          </Container>

          <Container>
            <Menu/>
          </Container>

          <Container>
            <CountDown/>
          </Container>

          <Container>
            <form className="form" action="">
              <div className="formRow">
                <DeafaltInput labelText='task' id='meuInput' type='text' placeholder='Digite algo'/>
              </div>

              <div className="formRow">
                <p>Lorem ipsum dolor sit amet.</p>
              </div>

              <div className="formRow">
                <Cycles />
              </div>

              <div className="formRow">
                <DeafaltButton icon={<PlayCircleIcon />}/>
              </div>
            </form>
          </Container>

          <Container>
            <Footer/>
          </Container>

        </>
    )
} 