import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function callBack(e) {
        // if (document.activeElement === key) return;
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }
      document.addEventListener("keydown", callBack);
      return () => document.addEventListener("keydown", callBack);
    },
    [action, key]
  );
}
