import { useEffect } from "react";

export function useClickOut(ref, callback) {
  useEffect(() => {
    function handleClickOut(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOut);
    return () => document.removeEventListener("mousedown", handleClickOut);
  }, [ref, callback]);
}
