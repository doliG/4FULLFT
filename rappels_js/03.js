// <Ne pas toucher>
function glutenOrNotGluten(withGluten) {
  if (withGluten) {
    return "gluten"
  } else {
    return "sans-gluten"
  }
}

function makeKebab(kebab, withGluten) {
  if (withGluten) {
    return kebab + "gluten"
  } else {
    return kebab + "sans-gluten"
  }
}
// </Ne pas toucher>

// Avant d'ouvrir, le maitre kebabier prépare une dizaine
// de kebab classiques pour être en avance.
// Un kebab classique à cette forme: "pain salade tomate oignon gluten".
// Complétez la fonction suivante.
// 💡 https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
const makeManyKebabs = () =>
  new Array(10).fill(makeKebab("pain salade tomate oignon ", true))

// Le chef s'est planté, il devait faire en plus trois kebab sans gluten.
// Récupérez les kebab et ajoutez en trois nouveaux sans gluten "pain salade tomate oignon sans-gluten"
// A la fin vous devez avoir une liste de 13 kebab, dont trois sans gluten.
const makeManyVariousKebabs = () => [
  ...makeManyKebabs(),
  ...new Array(3).fill(makeKebab("pain salade tomate oignon ", false)),
]

// Des parisiens sont arrivés ! Récupérez tous les kebab sans gluten, ils ont faim.
// Récupérez dans la liste des kebabs uniquement les kebab avec la mention 'sans-gluten'
// 💡 https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
const getWithoutGluten = (kebabs) => kebabs.filter(k => k.includes('sans-gluten'))

// 10 lyonnais sont arrivé. Moins chochottes, ils sont ok pour prendre les kebab avec gluten,
// mais pas sans sauce ! Ajoutez de la sauce blanche harissa et servez leur!

// Pour ajouter une sauce à un kebab, on ajoute simplement le nom de la sauce
// à la fin de la string représentant le kebab.
// Completer la fonction ci-dessous
const getWithSauce = (kebabs, sauce) => kebabs.map(k => k + sauce)

module.exports = { makeManyKebabs, makeManyVariousKebabs, getWithoutGluten }
