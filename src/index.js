import {render} from 'inferno'

import {Router, Route, Redirect} from 'inferno-router'
import createBrowserHistory from 'history/createBrowserHistory'

import App from 'schedule-app/App'
import Schedule from 'schedule-app/Schedule'
import Edit from 'schedule-app/Edit'

if (module.hot) {
    require('inferno-devtools')
}

const browserHistory = createBrowserHistory()

// роутинг: переключение между расписанием (задание 1) и редактированием данных (задание 2) 

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
