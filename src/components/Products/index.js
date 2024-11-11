
import Header from '../Header'

import './index.css'
import { FaFacebookF } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"


import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CartContext from '../../context/CartContext'


import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Products extends Component {
  state = {
    quantity: 1,
    apiStatus: apiStatusConstants.initial,
  }

  

  renderLoadingView = () => (
    <div className="products-details-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div className="product-details-error-view-container">
      <img
        alt="error view"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
        className="error-view-image"
      />
      <h1 className="product-not-found-heading">Product Not Found</h1>
        <button type="button" className="button">
          Continue Shopping
        </button>
    
    </div>
  )

  onDecrementQuantity = () => {
    const {quantity} = this.state
    if (quantity > 1) {
      this.setState(prevState => ({quantity: prevState.quantity - 1}))
    }
  }

  onIncrementQuantity = () => {
    this.setState(prevState => ({quantity: prevState.quantity + 1}))
  }

  renderProductDetailsView = () => (
    <CartContext.Consumer>
      {value => {
        const { quantity} = this.state
        const {addCartItem} = value
        const onClickAddToCart = () => {
          addCartItem({ quantity})
        }

        return (
          <div className="product-sections">
      <div className="product-sections1">
        <div className='first'>
          <h1 className='code1'>Work from<br/>
          ladakh</h1>
          <p>India’s first true digital tourism ecosystem</p>
          <div className='row'>
            <a href='https://www.instagram.com/sukish_17/profilecard/?igsh=ajM1cTAwd3hraTI2' ><FaInstagram className='insta' /></a>
            <a   href='https://www.instagram.com/sukish_17/profilecard/?igsh=ajM1cTAwd3hraTI2'><FaFacebookF className='insta'/></a>

          </div>
          <div className='product-sections2'>
            <div>
              <h1 className='ho'>Rooms</h1>
              <div className='plus'>
                <p className='qu' onClick={this.onIncrementQuantity}>+</p>
                <p className='qu'>{quantity}</p>
                <p className='qu' onClick={this.onDecrementQuantity}>-</p>
              </div>
            </div>
            <button className='but1' onClick={onClickAddToCart}>Book</button>
      </div>
        </div>
        <img src='https://vl-prod-static.b-cdn.net/system/images/000/599/318/7dc59b000298e659299d8de22bc76e81/original/1500451427_lEfBpj_ladakh-shutterstock.jpeg?1715077952'
        className='lad'
        alt='imga'/>
      </div>

     </div>
        )
      }}
    </CartContext.Consumer>
  )

  renderProductDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProductDetailsView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="product-item-details-container">
          {this.renderProductDetailsView()}
        </div>
      </>
    )
  }
}

export default Products
