import React from "react"
import { match } from "react-router"

interface IUsersProps {
  match: match<{
    id: string
  }>
}

export const Users = ({ match }: IUsersProps) => (
  <div>
    <h2>users</h2>
    <pre>{match.params.id}</pre>
  </div>
)
