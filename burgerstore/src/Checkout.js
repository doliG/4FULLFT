import "./Checkout.css"

const Checkout = ({ checkout }) => {
  if (!checkout.length) {
    return <></>
  }

  return (
    <div className="checkout">
      <b>Votre panier</b>
      <br />
      {checkout.map(({ burger, quantity }) => (
        <p key={burger.name}>
          {burger.name} x{quantity}
        </p>
      ))}
    </div>
  )
}

export default Checkout
