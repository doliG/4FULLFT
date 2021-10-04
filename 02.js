// Transformez ci-dessous les fonctions en fonctions fléchées.
// Bonus: réutilisez les ternaires.
// Quelle différence entre une fonction fléchée et une fonction classique ?

const helloKebab = ()=>  'Hello, Kebab !'

const glutenOrNotGluten = withGluten =>  {
    if (withGluten) {
        return 'gluten'
    } else {
        return 'sans-gluten'
    }
}


function makeKebab(kebab, withGluten) {
    if (withGluten) {
        return kebab + 'gluten'
    } else {
        return kebab + 'sans-gluten'
    }
}

module.exports = { helloKebab, glutenOrNotGluten, makeKebab }