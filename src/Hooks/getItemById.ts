import { ApiItem } from "../Interfaces/ItemsInterface";

const getItemById = (id: number, all_items: ApiItem[]) => {
    return all_items.find(item => item.id === id)
}

export default getItemById