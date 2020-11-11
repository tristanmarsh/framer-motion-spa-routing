import {
  Link,
  Route,
  RouteComponentProps,
  Switch,
  match,
} from "react-router-dom"
import React, { useEffect, useState } from "react"
import axios, { AxiosRequestConfig } from "axios"

import { About } from "../scenes/about/About"
import { Home } from "../scenes/home/Home"

interface IProfileProps {
  match: match<{
    id: string
  }>
}

export const Profile = ({ match }: IProfileProps) => {
  const [profile, setProfile] = useState<IGithubUserResponse>()

  const getGithubData = async () => {
    const baseUrl = "https://api.github.com"
    const axiosRequestConfig: AxiosRequestConfig = {
      headers: {
        Accept: "application/vnd.githubv3+json",
      },
    }

    const response = await axios.get(
      `${baseUrl}/users/${match.params.id}`,
      axiosRequestConfig
    )
    setProfile(response.data)
  }

  useEffect(() => {
    getGithubData()
  }, [match.params.id])

  return (
    <>
      <h1>Profile</h1>
      <Link to="/profile">All Profiles</Link>

      <Link to="/profile/tristanmarsh">Tristan Marsh</Link>
      <Link to="/profile/gracemarsh">Grace Marsh</Link>

      <Switch>
        <Route
          path="/profile/:id"
          render={({
            match,
          }: RouteComponentProps<{ id: string }> & IProfileProps) => {
            return (
              <>
                <h1>{match.params.id}</h1>
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">
                      <img src={profile?.avatar_url} alt={profile?.name} />
                    </div>
                  </div>
                  <div className="card-body text-dark">
                    <div>Name: {profile?.name}</div>
                    <div>
                      User Name:{" "}
                      <a
                        target="_blank"
                        rel="noreferrer noopener"
                        href={profile?.html_url}
                      >
                        {profile?.login}
                      </a>
                    </div>
                    <div>Location: {profile?.location}</div>
                    <div>
                      Created:{" "}
                      {profile?.created_at &&
                        new Date(profile.created_at).toLocaleDateString(
                          "en-AU"
                        )}
                    </div>
                    <div>Bio: {profile?.bio}</div>
                    <div>Public Repos: {profile?.public_repos}</div>
                    <div>
                      Blog:{" "}
                      <a
                        target="_blank"
                        rel="noreferrer noopener"
                        href={profile?.blog}
                      >
                        {profile?.blog}
                      </a>
                    </div>
                  </div>
                </div>
                {/* <div className="card">
                  <div className="card-body">
                    <pre>{JSON.stringify(profile, null, 2)}</pre>
                  </div>
                </div> */}
              </>
            )
          }}
        />
      </Switch>
    </>
  )
}

const ProfileLoaded = (props: IGithubUserResponse) => {
  return
}

interface IGithubUserResponse {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  name: string
  company: string
  blog: string
  location: string
  email: any
  hireable: boolean
  bio: string
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}
