import cartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <cartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartListLLength = cartList.length
      let total = 0
      cartList.forEach(each => {
        total += each.price * each.quantity
      })
      return (
        <div className="summaryContainer">
          <div className="priceContainer">
            <h1 className="heading">
              Order Total: <span className="totalPrice">{total}</span>
              <p className="describe">{cartListLLength} Items in cart</p>
              <button type="button" className="proceed-btn">
                Checkout
              </button>
            </h1>
          </div>
        </div>
      )
    }}
  </cartContext.Consumer>
)

export default CartSummary
