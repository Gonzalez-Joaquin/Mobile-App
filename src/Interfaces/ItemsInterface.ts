export interface ApiItem {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string,
}

export interface items_state {
    isLoading: boolean,
    items: ApiItem[]
}