import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Heading } from "rebass"

const ViewAllPosts = () => <Link to="/blog">View all blogs</Link>

const BlogPost = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  const { title, date } = frontmatter
  return (
    <Layout>
      <SEO title={title} />
      <div className="blogpost">
        <ViewAllPosts />
        <Box padding="20px 0">
          <Heading fontSize="5" mb="10px">
            {title}
          </Heading>
          {date && <h3>{date}</h3>}
        </Box>
        {html && <div dangerouslySetInnerHTML={{ __html: html }} />}
        <ViewAllPosts />
      </div>
    </Layout>
  )
}
export default BlogPost
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        slug
        title
      }
      html
    }
  }
`
