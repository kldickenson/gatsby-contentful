import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blog</h1>
    <p>Blogs from our great authors.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Blog
