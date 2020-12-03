import { GlobalStyle } from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Countries from "./pages/Countries";
import Global from "./pages/Global";
import Indonesia from "./pages/Indonesia";
import indoProvince from "./pages/indoProvince";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />

        <Switch>
          <Route exact path="/" component={Global} />
          <Route path="/countries" component={Countries} />
          <Route path="/indonesia" component={Indonesia} />
          <Route path="/indoprovince" component={indoProvince} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
