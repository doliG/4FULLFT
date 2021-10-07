import "./Burger.css"

// TODO create a component to display the price. Using TDD.
const Burger = ({ burger, addToCart }) => {
  const { name, image, price } = burger
  const formattedPrice = `${parseInt(price / 100)}€${price % 100 || ""}`

  return (
    <div className="card">
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>{formattedPrice}</p>
      <button onClick={() => addToCart(burger)}>J'ai faim !</button>
    </div>
  )
}

export default Burger
