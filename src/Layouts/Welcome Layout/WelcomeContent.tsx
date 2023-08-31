import { Button } from "../../Components/Buttons/Button"
import { Text } from "../../Components/Typography/Typography"

interface Props {
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const WelcomeContent = ({ onClick }: Props) => {
    return (
        <>
            <article className="welcomeContent flex">
                <div className="img">
                    <img src="./Png/carrito.png" className="imgCarrito" />
                </div>
                <div className="text flex">
                    <Text type="h2" style_type="text-title" content="Te damos la bienvenida" size="text-large" styles_color="text-gris" />
                    <Text type="p" style_type="text-p" content="Comienza escaneando el QR de la sucursal" />
                </div>
                <div className="button">
                    <Button onClick={onClick} type="button" size={'auto'} type_style="violeta" value="Comenzar" />
                </div>
            </article>
        </>
    )
}
