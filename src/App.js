import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Centerpoint from "./components/Centerpoint/Centerpoint";
import ServiceFeedback from "./components/ServiceFeedback/ServiceFeedback";
import Success from "./components/Success/Success";
import InvoiceItems from "./components/InvoiceItems/InvoiceItems";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactPopUp from "./components/ContactPopUp/ContactPopUp";
import QRScanner from "./components/InvoiceItems/QrScanner";
import ErrorPage from "./components/404 Page/ErrorPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={InvoiceItems}/>
        <Route exact path="/centerpoint" component={Centerpoint}/>
        <Route exact path="/servicefeedback/:ratingId" component={ServiceFeedback}/>
        <Route exact path="/success" component={Success}/>
        <Route exact path="/contact" component={ContactForm}/>
        <Route exact path="/contactPopup" component={ContactPopUp}/>
        <Route exact path="/qrScanner" component={QRScanner} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
