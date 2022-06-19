import { useCallback, useState } from 'react';
//Hooks
// parameters for boolean properties to value default false
const useToggle = (initialState: boolean = false): [boolean, () => void] => {

  //initialization state
  const [state, setState] = useState(initialState);

  //definition on function to call memories for value
  const toggle = useCallback((): void => setState((state) => !state), []);

  return [state, toggle];
}

export default useToggle;