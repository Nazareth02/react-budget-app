import { useCallback, useState } from "react";

export const useToggle = (initialValue = false): [boolean, () => void] => {
  const [state, setValue] = useState(initialValue);
  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);
  return [state, toggle];
};
