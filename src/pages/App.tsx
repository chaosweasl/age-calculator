/*styles + components*/
import "../styles/App.css";
import { Card } from "../components/Card";

/*libraries*/
import { useState } from "react";

function App() {
  const [error, setError] = useState<string>("");

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      {error !== "" && (
        <div
          role="alert"
          className="absolute top-0 mt-10 w-9/10 h-auto alert alert-error"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-xl">{error}</span>
        </div>
      )}
      <Card error={error} setError={setError} />
    </div>
  );
}

export default App;
