import { Icon } from "../Icon/Icon"
import { Text } from "../Typography/Typography"

interface Props {
    titleButton: string,
    textButton: string,
    icon: string


    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const Button2 = ({ onClick, icon, textButton, titleButton }: Props) => {
    return (
        <>
            <button className="btn2 flex" onClick={onClick}>
                <div className="btn2-container flex">
                    <div className="btn2-content icon flex">
                        <Icon icon={icon} size="icon-large" />
                    </div>
                    <div className="btn2-content text flex">
                        <Text type="h4" style_type="text-button" content={titleButton} styles_color="text-gris-oscuro" size="text-medium" />
                        <Text type="p" style_type="text-button" content={textButton} styles_color="text-gris" size="text-extra-small" />
                    </div>
                    <div className="btn2-content icon2 flex">
                        <Icon icon="arrow-right" style_color="icon-gris-medio" />
                    </div>
                </div>
            </button>
        </>
    )
}
