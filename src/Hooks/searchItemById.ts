import { ApiItem } from "../Interfaces/ItemsInterface";

const searchItemById = (searchValue: string, all_items: ApiItem[]) => {
    return all_items.filter(item => item.id === parseInt(searchValue))
}

export default searchItemById