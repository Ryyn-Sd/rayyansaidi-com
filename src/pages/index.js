import { Helmet as Head } from 'react-helmet'
import * as React from "react"
import Nav from '../navbar'

const App = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Click here for a bio and the projects about the author of the website" />
        <title>rayyansaidi.com</title>
        <html lang="en" />
      </Head>
      <Nav act={1}/>
      <h1>Home</h1>
      <p>Welcome to Rayyansaidi.com! This is a place where you can find info about the author, Rayyan Saidi, and some of the projects that I am working on that will hopefully go on this website soon!</p>
    </>
  )
}

export default App
