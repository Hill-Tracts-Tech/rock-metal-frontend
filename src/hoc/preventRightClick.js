import { useEffect } from "react";

function useRightClickContext() {
  useEffect(() => {
    const handleContextmenu = (e) => {
      e.preventDefault();
    };

    if (process.env.NODE_ENV === "production") {
      document.addEventListener("contextmenu", handleContextmenu);
    }

    return function cleanup() {
      if (process.env.NODE_ENV === "production") {
        document.removeEventListener("contextmenu", handleContextmenu);
      }
    };
  }, []);
}

export default useRightClickContext;
