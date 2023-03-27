import * as React from 'react'
import { Link,useStaticQuery,graphql} from 'gatsby'
import ResponsiveAppBar from './appbar'
const Layout = ({ pageTitle, children }) => {
  return (
    <div>
    <ResponsiveAppBar>
    </ResponsiveAppBar>
    {children}
    </div>
  )
  
}

export default Layout