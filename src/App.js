import React, { useState, useEffect } from "react";
import GridLoader from "react-spinners/GridLoader";
import Root from "./root";
export const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 30);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="loader">
          <GridLoader color={"#FCB600"} loading={loading} size={50} />
        </div>
      ) : (
        <Root />
      )}
    </div>
  );
};
export default App;
