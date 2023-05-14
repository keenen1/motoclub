import './index.css'
import Title from './components/Title'
import {BrowserRouter as Router,  Switch,  Route} from 'react-router-dom'
import Home from './components/options/Home'
import BarScan from './components/options/BarScan'
import BarType from './components/options/BarType'

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
