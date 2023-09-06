import { BranchCard } from "../../Components/BranchCard/BranchCard"
import { Branch } from "../../Interfaces/BranchInterface"

interface Props {
    botonDeSalida?: boolean
}

export const CompanyCard = ({ botonDeSalida }: Props) => {
    return (
        <>
            <div className="companysArticle-content card flex">
                <BranchCard botonDeSalida={botonDeSalida} />
            </div>
        </>
    )
}
