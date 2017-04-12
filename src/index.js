import {render} from 'inferno'

import {Router, Route, Redirect} from 'inferno-router'
import createHashHistory from 'history/createHashHistory'

import App from 'schedule-app/App'
import Schedule from 'schedule-app/Schedule'
import Edit from 'schedule-app/Edit'

if (module.hot) {
    require('inferno-devtools')
}

const browserHistory = createHashHistory()

const routes = (
    <Router history={browserHistory}>
        <Route component={App}>
            <Route
                path='/'
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
