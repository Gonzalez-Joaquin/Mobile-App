import { ApiItem } from "../Interfaces/ItemsInterface";

const getItemsBySearch = (searchValue: string, all_items: ApiItem[]) => {
    return all_items.filter(item => item.title.toUpperCase().includes(searchValue.toUpperCase()))
}

export default getItemsBySearch