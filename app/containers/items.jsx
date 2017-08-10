import React, {Component} from 'react'
import  Items from '../components/items'
import {addToCart} from '../actions'
import {connect} from 'react-redux'

function mapStateToProps(state) {
    return {
        products: state.items
    }
}

function mapDispathToProps(dispatch) {
    return {
        handleClick(id) {
            dispatch(addToCart(id))
        }
    }
}

let ItemsContainer = connect(mapStateToProps, mapDispathToProps)(Items);

export default ItemsContainer;