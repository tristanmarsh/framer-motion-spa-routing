import { Switch, Link, Route } from "react-router-dom"
import React from "react"

export const About = () => (
  <>
    <h1>About Specific Routing</h1>

    <ul className="list-unstyled">
      <li>
        <Link to="/about/crazy-id">Crazy id</Link>
      </li>
    </ul>

    <hr />
    <Switch>
      <Route path="/about/child" render={() => <h2>about child</h2>} />
      <Route
        path="/about/another-child"
        render={() => <h2>about another child</h2>}
      />
      <Route
        path="/about/:id"
        render={({
          match: {
            params: { id },
          },
        }) => <h2>about another child with the id {id}</h2>}
      />
    </Switch>
  </>
)
