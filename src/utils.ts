const MAX_LEN = 5;

export function generate() {
    let result = '';
    const subset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (let i = 0; i < MAX_LEN; i++) {
        const randomIndex = Math.floor(Math.random() * subset.length);
        result += subset[randomIndex];
    }
    return result;
}