import "./App.css"
import Burger from "./Burger"
import React from "react"

/**
 * Ok, maintenant il est temps de passer aux Hooks.
 * Les hooks permettent de faire la même chose avec React que les classes,
 * mais en restant dans un paradigme de programmation fonctionnelle.
 * Pour les découvrir, je vous propose de reprendre le code que nous avons mis
 * dans App.js et de retransformer la Classe en fonction.
 *
 * https://fr.reactjs.org/docs/hooks-intro.html
 *
 * Pour cela, vous aurez besoin de:
 * - useState pour les burger et le checkout
 *  -> https://fr.reactjs.org/docs/hooks-state.html
 * - useEffect pour fetch les burgers
 *  -> https://fr.reactjs.org/docs/hooks-effect.html
 *  -> https://maxrozen.com/fetching-data-react-with-useeffect
 */

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      burgers: [],
      checkout: [],
    }
  }

  componentDidMount() {
    fetch("https://run.mocky.io/v3/dcb6a144-7e4f-4c30-b570-6433ee331291")
      .then(res => res.json())
      .then(res => this.setState({ burgers: res }))
  }

  addToCart = burger => () => {
    const { checkout } = this.state

    if (checkout.find(el => el.burger.name === burger.name)) {
      // Si le burger est deja dans le panier, on augmente la quantité
      const updatedCheckout = checkout.map(el =>
        el.burger.name === burger.name
          ? { ...el, quantity: el.quantity + 1 }
          : el
      )
      this.setState({ checkout: updatedCheckout })
    } else {
      // Sinon, on ajoute le burger avec une quantité de 1
      const updatedCheckout = [...this.state.checkout, { burger, quantity: 1 }]
      this.setState({ checkout: updatedCheckout })
    }
  }

  render() {
    return (
      <div className="App">
        <nav>
          <img
            height="100px"
            src="https://cdn.dribbble.com/users/1787323/screenshots/9382093/media/db80fee4b04ff0cdcc3d51dee78a5275.png"
            alt="Logo le bon burger"
          />
          Le bon burger
        </nav>
        <div className="container">
          {this.state.burgers.map(burger => (
            <Burger
              key={burger.name}
              burger={burger}
              addToCart={this.addToCart(burger)}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App
