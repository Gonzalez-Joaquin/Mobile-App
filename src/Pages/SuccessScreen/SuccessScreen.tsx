import { Button } from "../../Components/Buttons/Button"
import { Text } from "../../Components/Typography/Typography"

import './SuccessScreen.css'

export const SuccessScreen = () => {
  return (
    <div className="SuccessScreen">
        <img src="./Png/Success.png" className="successbag" />
        <p className="pedidocompletado">¡Listo! pedido completado. Ahora puedes dirigirte a la caja." </p>
        <p className="pedido">Pedido</p>
        <p className="pedidonum"></p>

        <Button value="Salir de la sucursal" type="button" type_style="violeta" />
        <Button value="Volver al inicio" type="button" type_style="blanco" />
    </div>
  )
}
