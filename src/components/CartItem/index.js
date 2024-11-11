import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'

import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = props => (

  
  <CartContext.Consumer>
    {value => {
      const {
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      } = value
      const {cartItemDetails} = props
      const {id, title, brand, quantity, price, imageUrl} = cartItemDetails
      const onClickDecrement = () => {
        decrementCartItemQuantity(id)
      }
      const onClickIncrement = () => {
        incrementCartItemQuantity(id)
      }
      const onRemoveCartItem = () => {
        removeCartItem(id)
      }
      const totalPrice = price * quantity

      return (
        <li className="cart-item">
          <div className='io'>
            <h1 className='hojj'>Booking Details</h1>
            <div className='io1'>
              <input className='io2' placeholder='Name'/>
              <input className='io2' placeholder='email'/>
            </div>
            <div className='io1'>
            <input className='io2' placeholder='PhoneNumber'/>
            <input className='io2' placeholder='Above 18'/>
            <input className='io2' placeholder='Below 16'/>
            </div>
          </div>
          <div className="cart-item-details-container">
              
            <div className="cart-quantity-container">
            <p className="cart-product-title">Rooms</p>
              <button
                type="button"
                className="quantity-controller-button"
                data-testid="minus"
                onClick={onClickDecrement}
              >
                <BsDashSquare className='plusss' color="#333" size={12} />
              </button>
              <p className="cart-quantity">{quantity}</p>
              <button
                type="button"
                className="quantity-controller-button"
                data-testid="plus"
                onClick={onClickIncrement}
              >
                <BsPlusSquare className='plusss' color="#fff" size={12} />
              </button>
            </div>
            <div className="total-price-remove-container">
              <p className="cart-total-price">Room Price {2000}/-</p>
              <button
                className="remove-button"
                type="button"
                onClick={onRemoveCartItem}
              >
                Remove
              </button>
            </div>
          </div>
          <button
            className="delete-button"
            type="button"
            onClick={onRemoveCartItem}
            data-testid="remove"
          >
            <AiFillCloseCircle color="#616E7C" size={20} />
          </button>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
