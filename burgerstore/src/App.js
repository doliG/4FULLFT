import "./App.css"
import Burger from "./Burger"
import burgers from "./burgers.json"

// TODO: Use lifecycle to simulate a fetch
// Bonus: fetch burgers list from this URL
function App() {
  // TODO: Add filters to display only vegetarian burgers with class
  // TODO with hooks
  return (
    <div className="App">
      <nav>Le bon burger</nav>
      <div className="container">
        {/* TODO: Use shortcut props for burger */}
        {burgers.map(burger => (
          <Burger key={burger.name} burger={burger} />
        ))}
      </div>
    </div>
  )
}

export default App
