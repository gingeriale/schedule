import {render} from 'inferno'

import {Router, Route, Redirect} from 'inferno-router'
import createBrowserHistory from 'history/createBrowserHistory'

import App from './App'
import Schedule from './Schedule'
import Edit from './Edit'

if (module.hot) {
    require('inferno-devtools')
}

const browserHistory = createBrowserHistory()

const routes = (
    <Router history={browserHistory}>
        <Route component={App}>
            <Redirect
                from='/'
                to='/schedule'
            />
            <Route
                path='/schedule'
                component={Schedule}
            />
            <Route 
                path='/edit'
                component={Edit}    
            />
        </Route>
    </Router>
)

render(routes, document.getElementById('app'))

if (module.hot) {
    module.hot.accept()
}
