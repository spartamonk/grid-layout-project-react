import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Cards, HeroPage, HomePage, Layout, Tiles, ErrorPage } from './pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/layout'>
          <Layout></Layout>
        </Route>
        <Route path='/hero'>
          <HeroPage />
        </Route>
        <Route path='/cards'>
          <Cards />
        </Route>
        <Route path='/tiles'>
          <Tiles />
        </Route>
        <Route path='*'>
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
