import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>YES, QZJ IS YOU</p>
    </Layout>
  )
}

export const Head = () => <Seo title="ABOUT ME"></Seo>

export default AboutPage