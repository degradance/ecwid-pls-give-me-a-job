export const getSavedItems = () => {
    const items = localStorage.getItem('savedItems');
    return items ? JSON.parse(items) as number[] : [];
}

export const saveItems = (items: number[]) => {
    localStorage.setItem('savedItems', JSON.stringify(items));
    window.dispatchEvent(new Event('storage'));
}

export const clearItems = () => {
    localStorage.removeItem('savedItems');
    window.dispatchEvent(new Event('storage'));
}

export const deleteItem = (id: number) => {
    let items = getSavedItems();
    items = items.filter((itemId: number) => itemId !== id);
    saveItems(items);
}

export const addItem = (id: number) => {
    let items = getSavedItems();
    if (!items.includes(id)) {
        items.push(id);
    }
    saveItems(items);
}

export const isAdded = (id: number) => {
    const items = getSavedItems();
    return items.includes(id);
}
