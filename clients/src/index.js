import React,{useEffect} from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import {BrowserRouter} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { getRecipes } from "./actions/recipes";


import Body from "./component/Body/Body";
import Sidebar from "./component/Sidebar/Sidebar";

import './Global.scss';
import  * as s from './App.styles';
import * as Palette from './colors'
import reducers from './reducers/index'
import { createStore } from "redux";

const App = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getRecipes());
    },[dispatch])

    const backgroundImage = '/images/food.jpg'
    const sidebarHeader = {
        fullName : 'The Foodie',
        name : 'Foodie'
    };
    const menuItem =[
        {name:'Home', to:'/', icon:'/icons/home_black_24dp.svg',subMenuItem:[]},
        {name:'Get Recipe', to:'/getrecipe', icon:'/icons/auto_stories_black_36dp.svg',subMenuItem:[]},
        {name:'Add Recipe', to:'/addrecipe', icon:'/icons/create_black_36dp.svg',subMenuItem:[]},
        {name:'Extra Recipe', to:'/extrarecipe', icon:'/icons/local_library_black_36dp.svg',subMenuItem:[]},
       
    ]
    ;
    return(
        <s.App>
          
            <Sidebar backgroundImage={backgroundImage} sidebarHeader={sidebarHeader} menuItem={menuItem} Palette={Palette.swampy}  />
            <Body />
        </s.App>
    )
}
export default App

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, document.getElementById('root'))
