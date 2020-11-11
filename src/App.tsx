import React from "react"
import { Route, BrowserRouter, Switch, Link } from "react-router-dom"
import { Helmet } from "react-helmet"

import "./App.css"
import { About } from "./scenes/about/About"
import { Navigation } from "./components/Navigation"
import { Home } from "./scenes/home/Home"
import { Profile } from "./components/Profile"

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/profile/:id" component={Profile} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  )
}

const Header = () => (
  <Helmet>
    <meta lang="en-AU" />
    <meta charSet="utf-8" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossOrigin="anonymous"
    />
  </Helmet>
)
export default App
