export const setKey = (key, value) => ({
    type: 'SET_KEY',
    payload: {
        key,
        value       
    }
});

export const resetKey = (key) => ({
    type: 'RESET_KEY',
    payload: {
        key
    }
});