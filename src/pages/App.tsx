/*styles + components*/
import "../styles/App.css";
import { Card } from "../components/Card";

/*libraries*/
// import { DateTime } from "luxon";

function App() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Card />
    </div>
  );
}

export default App;
