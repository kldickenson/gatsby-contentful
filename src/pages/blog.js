import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Box, Heading } from "rebass"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => {
  const data = useStaticQuery(graphql`
    {
      blogs: allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              slug
              title
            }
          }
        }
      }
    }
  `)

  const blogs = data.blogs.edges.map(blog => blog.node.frontmatter)
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      {blogs &&
        blogs.map(blog => (
          <Box key={blog.slug} mb={3}>
            <Heading fontSize="4">
              <Link to={`/blogpost/${blog.slug}`}>{blog.title}</Link>
            </Heading>
            <Heading fontSize="3">{blog.date}</Heading>
          </Box>
        ))}

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Blog
