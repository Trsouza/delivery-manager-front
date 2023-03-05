import { Link } from "react-router-dom";
import * as Global from "../../styles/global";

export function NotFound() {

  return (
    <Global.Container>
      <Global.Box>
        <h1>Ops!</h1>
        <p>Página não encontrada</p>
        <Global.ButtonStyled >
          <Link to="/home">Ir para a Home</Link>
        </Global.ButtonStyled>
      </Global.Box>
    </Global.Container>
  )
}
