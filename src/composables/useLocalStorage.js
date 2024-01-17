import { ref } from 'vue';

export function useLocalStorage(key) {
    const getItem = () => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : null;
    };

    const setItem = (value) => {
        localStorage.setItem(key, JSON.stringify(value));
    };

    const removeItem = () => {
        localStorage.removeItem(key);
    };

    const clear = () => {
        localStorage.clear();
    };

    const storedValue = ref(getItem());

    const updateStoredValue = () => {
        storedValue.value = getItem();
    };

    return {
        storedValue,
        setItem,
        removeItem,
        clear,
        updateStoredValue,
    };
}
