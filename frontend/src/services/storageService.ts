export function saveToStorage(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function getFromStorage(key: string) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

export function removeFromStorage(key: string) {
    localStorage.removeItem(key);
}