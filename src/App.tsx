import { Container } from './components/Container'
import { CountDown } from './components/CountDown'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'

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
              <div className="fomRow">
                <label htmlFor="input">Task</label>
                <input id="input" type="text" />
              </div>

              <div className="fomRow">
                <p>Lorem ipsum dolor sit amet.</p>
              </div>

              <div className="fomRow">
                <p>Ciclos</p>
                <p>0 0 0 0</p>
              </div>

              <div className="fomRow">
                <button>Enviar</button>
              </div>
            </form>
          </Container>
        </>
    )
} 