interface Props {
    active: boolean
}

export const Loading_Button = ({ active }: Props) => {
    return (
        <div className={`loading__button flex ${active ? 'active' : ''}`}>
            <div className="shapeLoading"></div>
            <div className="shapeLoading"></div>
            <div className="shapeLoading"></div>
            <div className="shapeLoading"></div>
            <div className="shapeLoading"></div>
        </div>
    )
}
