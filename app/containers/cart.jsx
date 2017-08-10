import React, { Component } from 'react'
import Cart from '../components/cart'
import { removeFromCart } from '../actions'
import { connect } from 'react-redux'

function getCartProducts(items, cart) {
    return items.filter(i => {
        return (cart.indexOf(i.id) != -1)
    });
}

function mapStateToProps(state) {
    return {
        products: getCartProducts(state.items, state.cart)
    }
}

function mapDispathToProps(dispatch) {
    return {
        handleClick(id) {
            dispatch(removeFromCart(id))
        }
    }
}

let CartContainer = connect(mapStateToProps, mapDispathToProps)(Cart);

export default CartContainer;