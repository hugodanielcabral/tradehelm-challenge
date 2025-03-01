import { useState, useEffect } from "react";

export function useLocalStorage<T>(
  key: string,
  initialValue: T | (() => T)
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item
        ? JSON.parse(item)
        : initialValue instanceof Function
        ? initialValue()
        : initialValue;
    } catch (error) {
      console.error(`Error al recuperar ${key} de localStorage:`, error);
      return initialValue instanceof Function ? initialValue() : initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`Error al guardar ${key} en localStorage:`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
