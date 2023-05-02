import './index.css'
import Title from './components/Title'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom"
import BarType from './components/options/BarType'
import BarScan from './components/options/BarScan'
import Home from './components/options/Home'


function App() {
  return (
    <div className="App">
      <Title
        title={"MotoClub"}
        subtitle={"Ticket Scanner"}
      />

      <Router>
        <div>

          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/barcode_scanner">
              <BarScan/>
            </Route>
            <Route path="/barcode_type">
              <BarType/>
            </Route>
          </Switch>

        </div>
      </Router>
    </div>
  )
}

export default App
