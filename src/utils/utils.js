// save data to local storage
export const saveToLocalStorage = (key, value) => {
	localStorage.setItem(key, JSON.stringify(value));
};