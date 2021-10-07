import "./App.css"
import Burger from "./Burger"
import burgers from "./burgers.json"

/**
 * Maintenant qu'on peut afficher la liste de nos burgers, on aimerait les
 * récupérer depuis une api.
 *
 * Pour cela, on va utiliser les classes de React. Pour commencer, on va
 * convertir notre fonction App() en une classe.
 * Puis nous allons utiliser l'un des cycles de vies pour faire notre appel API
 * ou le simuler un appel avec setTimeout.
 * Enfin nous allons mettre les résultats obtenus dans le state.
 *
 * Prenez le temps de bien lire la documentation.
 * 💡 https://fr.reactjs.org/docs/state-and-lifecycle.html#converting-a-function-to-a-class
 * 💡 https://fr.reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
 * 💡 https://run.mocky.io/v3/dcb6a144-7e4f-4c30-b570-6433ee331291
 *
 * En bonus: ajouter un petit loader en attendant les données.
 * 💡 https://lottiefiles.com/search?q=burger&category=animations
 */
function App() {
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
        {burgers.map(burger => (
          <Burger key={burger.name} burger={burger} />
        ))}
      </div>
    </div>
  )
}

export default App
