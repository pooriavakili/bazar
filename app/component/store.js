import React,{Component} from 'react'
import {createStore,combineReducers} from 'redux'
import{reducer as reduxForm} from 'redux-form'
const reducer=combineReducers({
    form:reduxForm
})
const store=createStore(reducer);
export default store;