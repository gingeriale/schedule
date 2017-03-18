import {render} from 'inferno'

import {Router, Route} from 'inferno-router'
import createBrowserHistory from 'history/createBrowserHistory'

import App from './App'

if (module.hot) {
    require('inferno-devtools')
}

const browserHistory = createBrowserHistory()

const TestComponent = () => {
    <div style={{width: '50px', height: '50px', background: '#000'}}></div>
}

const routes = (
    <Router history={browserHistory}>
        <Route component={App}>
            <Route 
                path='/'
                component={TestComponent}    
            />
        </Route>
    </Router>
)

render(routes, document.getElementById('app'))

if (module.hot) {
    module.hot.accept()
}
