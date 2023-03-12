import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>QZJ IS A MOTHERFUCKER DICK ASS.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/SpongeBob_SquarePants_character.svg.webp"
      />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage