import { useState } from "react";


function useLocalStorage<T>(key: string, initialValue: T) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);

      // Parse stored json or if none return initialValue
      const verifyItem = item ? JSON.parse(item) : initialValue;

      return verifyItem;

    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: T | ((val: T) => T)) => {
    try {

      // Allow value to be a function so we have same API as useState
      const valueToStorage = value instanceof Function ? value(storedValue) : value;

      // Save state
      setStoredValue(valueToStorage);

      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStorage));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }

  };

  return [storedValue, setValue] as const;
}

export default useLocalStorage;