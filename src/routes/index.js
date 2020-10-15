import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from '../pages/home'
import { Layout } from '../containers/Layout'
import { Provider } from 'react-redux';
import { store } from '../redux/store'

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>      
        </Layout>
      </BrowserRouter>
    </Provider>
  ) 
}
