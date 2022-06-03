import FetchData from "./Component/FetchData";
import { Route, Switch } from "react-router-dom";
import Data from "./Component/Data";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={FetchData} />
        <Route path="/data" component={Data} />
      </Switch>
    </>
  );
}

export default App;
