import React from 'react'
import { Switch, Route } from 'react-router'

import Home from './component/Body/Home/Home'
import GetRecipe from './component/Body/GetRecipe/GetRecipe'
import AddRecipe from './component/Body/AddRecipe/addrecipe'
import ApiRecipe from './component/Body/ApiRecipe/ApiRecipe'

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/getrecipe' component={GetRecipe} />
            <Route exact path='/addrecipe' component={AddRecipe} />
            <Route exact path='/extrarecipe' component={ApiRecipe} />
        </Switch>
    )
}

export default Routes
