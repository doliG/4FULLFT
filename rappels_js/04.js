// Le chef doit servir le Kebab 1 et 2.
// Retournez simplement les deux premiers kebabs.
// 💡 https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const serveKebabs1And2 = ([k1, k2]) => [k1, k2]

// Décidément, les clients affluent. Le chef vous demande d'être son commis de cuisine.
// Vous allez devoir lui passer les objets au bon moment. Voici une représentation de la cuisine:
const cuisine = {
  toque: 1,
  sauces: ["andalouse", "blanche", "algérienne"],
  rotissoir: {
    heat: 180,
    remainingMeatWeight: 1200,
  },
}

// "Combien de viande reste-il sur le rotissoir 1 ?"
const remainingMeatWeight = ({ rotissoir }) => {
  const { remainingMeatWeight } = rotissoir
  return remainingMeatWeight
}

// Passe moi les sauces !
const getSauces = ({ sauces }) => sauces

// Passe moi la sauce andalouse !
const getSauceAndalouse = ({ sauces }) => sauces[0]

// Donne moi la toque et les sauces !
const getToqueAndSauce = ({ toque, sauces }) => ({ toque, sauces })
