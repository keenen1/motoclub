import './index.css'
import Title from './components/Title'
import Container from './components/Scanner/Container'

function App() {
  return (
    <div className="App">
      <Title 
        title={"MotoClub"} 
        subtitle={"Ticket Scanner"}
      />
      <Container/>
    </div>
  )
}

export default App
