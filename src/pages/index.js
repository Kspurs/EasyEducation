import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import Seo from '../components/seo'
const IndexPage = () => {
  return (
    <main>
    <p>Hello world</p>
    <Link to='/camera'>Link</Link>
    </main>
  )
}

export const Head = () => <Seo title="HomePage"></Seo>

export default IndexPage