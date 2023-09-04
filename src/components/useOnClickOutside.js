import { useEffect } from "react";
export const useOnClickOutside = (ref, currentState, updater) => {
  useEffect(() => {
    const handler = (event) => {
      if (currentState && ref.current && !ref.current.contains(event.target)) {
        updater();
      }
    };
    document.addEventListener("mouseup", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mouseup", handler);
    };
  }, [ref, currentState, updater]);
};
