import { useState } from 'react';


// https://dev.to/bytebodger/synchronous-state-with-react-hooks-1k4f
export default function useSynchronousState(initialValue) {
   const [state, updateState] = useState(initialValue);

   let current = state;

   const get = () => current;

   const set = newValue => {
      current = newValue;
      updateState(newValue);
      return current;
   }

   return {
      get,
      set,
   }
}