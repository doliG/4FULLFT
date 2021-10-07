import "./App.css"
import Burger from "./Burger"
import React from "react"

/**
 * Ça marche ? Wow. Bon, c'est bien beau d'afficher une liste de burger, mais
 * c'est mieux de pouvoir les commander, non ?
 *
 * - Ajoutez un bouton "Commander" en dessous de chaque burger
 * - Au clic sur le bouton "Commander", on veut sauvegarder le burger dans
 * le panier. Pour cela on va ajouter une nouvelle propriété dans le state de
 * App.js: checkout.
 * this.state = { burgers: [], checkout: [] }
 * Checkout contiendra un tableau et chaque élément sera un objet comportant
 * deux props: checkout: [
 *   { burger: {}, quantity: 1 },
 * ]
 *
 * https://fr.reactjs.org/docs/handling-events.html
 * https://fr.reactjs.org/docs/lifting-state-up.html
 * https://fr.reactjs.org/docs/faq-functions.html#how-do-i-bind-a-function-to-a-component-instance
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

  addToCart = burger => {
    if (this.state.checkout.find(el => el.burger.name === burger.name)) {
      const checkout = this.state.checkout.map(el => {
        el.burger.name === burger.name ? { ...el, qt: el.qt + 1 } : el
      })
      this.setState({ checkout })
    } else {
      const checkout = [...this.state.checkout, { burger, qt: 1 }]
      this.setState({ checkout })
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
          {/* TODO: Use shortcut props for burger */}
          {this.state.burgers.map(burger => (
            <Burger
              key={burger.name}
              burger={burger}
              addToCart={this.addToCart}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App
