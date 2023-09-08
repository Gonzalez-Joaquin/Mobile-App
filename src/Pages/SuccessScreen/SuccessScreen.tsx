import { useNavigate } from "react-router-dom"
import { Button } from "../../Components/Buttons/Button"
import { Text } from "../../Components/Typography/Typography"

import './SuccessScreen.css'

export const SuccessScreen = () => {
  const navigate = useNavigate()
  return (
    <div className="screencontainer">
      

    <div className="SuccessScreen">
    <svg className="closescreen" onClick={() => navigate("/Catalogue")} width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.992661 2.99074L7.98532 9.9834L0.992664 16.9761L2.99044 18.9738L9.9831 11.9812L16.9758 18.9738L18.9735 16.9761L11.9809 9.9834L18.9735 2.99074L16.9758 0.992961L9.9831 7.98562L2.99044 0.99296L0.992661 2.99074Z" fill="#98A0B6"/>
</svg>
        <img src="./Png/Success.png" className="successbag" />
        <br/>
        <p className="pedidocompletado">¡Listo! pedido completado. Ahora puedes dirigirte a la caja." </p>
        <br/> <br/>
        <p className="pedido">Pedido</p>
        <p className="pedidonum">Nº 0004-00005560</p>
        <br/> <br/>
        <div className="button1">
        <Button value="Salir de la sucursal" type="button" type_style="violeta" />
        </div>
        <br/>
        <div className="button1">
        <Button value="Volver al inicio" type="button" type_style="blanco" />
        </div>
    </div>
    </div>
  )
}
