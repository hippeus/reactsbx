import { useEffect, useState } from "react";

// Route is a custom made Router (not react.Router!) just to show some
// behind the scene complexity of routers in SPA world.
const Route = ({ path, children }: any) => {
  const [currentPath, setCurrentPath] = useState<string>(
    window.location.pathname
  );

  const onLocationChange = () => {
    setCurrentPath(window.location.pathname);
  };

  useEffect(() => {
    // using built-in browser behavior
    window.addEventListener("popMineState", onLocationChange);
    return () => {
      window.removeEventListener("popMineState", onLocationChange);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;
