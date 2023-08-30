import { Text } from "../Typography/Typography"

interface Props {
    value: string,
    onClick: React.MouseEventHandler<HTMLAnchorElement>
}

export const Links = ({ onClick, value }: Props) => {
    return (
        <a onClick={onClick}>
            <Text type={"label"} style_type={"text-label"} content={value} size={'text-small'} style_transform={'text-capitalize'} styles_color={'text-violeta'} />
        </a>
    )
}
