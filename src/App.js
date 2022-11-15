import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./component/header";
import Main from "./component/main";
import Color from "./component/color";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/color">
          <Color />
        </Route>
        <Route path="*">
          <p>error</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
