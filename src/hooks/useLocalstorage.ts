import { useEffect, useState } from "react";

export function useLocalStorage<T>(
  localSorageKey: string,
  initialValue: T | (() => T)
) {
  const [value, setValue] = useState<T>(() => {
    const localSotrageValue = localStorage.getItem(localSorageKey);
    if (localSotrageValue != null) return JSON.parse(localSotrageValue);

    if (typeof initialValue === "function") {
      return (initialValue as () => T)();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(localSorageKey, JSON.stringify(value));
  }, [localSorageKey, value]);

  return [value, setValue] as [T, React.Dispatch<React.SetStateAction<T>>];
}
