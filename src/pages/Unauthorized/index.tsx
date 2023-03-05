import { Link } from "react-router-dom";
import * as Global from "../../styles/global";
// import { useNavigate } from "react-router-dom";

export function Unauthorized() {
  // const navigate = useNavigate();
  // const goBack = () => navigate(-1);

  return (
    <Global.Container>
      <Global.Box>
        <h1>Não autorizado!</h1>
        <p>Você não tem acesso à página solicitada.</p>
        <Global.ButtonStyled>
          <Link to="/home">Ir para a Home</Link>
        </Global.ButtonStyled>
      </Global.Box>
    </Global.Container>
  )
}
