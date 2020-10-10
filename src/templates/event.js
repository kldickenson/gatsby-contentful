import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Flex, Heading } from "rebass"

const ViewAllEvents = () => <Link to="/events">View all events</Link>

const Event = ({ data }) => {
  const {
    description,
    location,
    slug,
    title,
    presenter,
    date,
  } = data.contentfulEvents
  return (
    <Layout>
      <SEO title={title} />
      <ViewAllEvents />
      <Flex flexDirection="column" mb="3" key={slug}>
        <Heading>{title}</Heading>
        {location && (
          <Box>
            <em>{location}</em>
          </Box>
        )}
        {date && (
          <Box>
            <em>{date}</em>
          </Box>
        )}
        {presenter && presenter.length === 1 && (
          <Box fontSize={2}>By: {presenter[0].name}</Box>
        )}
        {presenter && presenter.length > 1 && (
          <Box fontSize={2}>
            By:
            {presenter.map((pres, index) => {
              if (index !== presenter.length - 1)
                return <span key={pres.id}> {pres.name},</span>
              else {
                return <span key={pres.id}> and {pres.name}</span>
              }
            })}
          </Box>
        )}
        {description && (
          <Box
            mt="2"
            dangerouslySetInnerHTML={{
              __html: description.childMarkdownRemark.html,
            }}
          />
        )}
      </Flex>
    </Layout>
  )
}
export default Event
export const pageQuery = graphql`
  query($slug: String!) {
    contentfulEvents(slug: { eq: $slug }) {
      description {
        childMarkdownRemark {
          html
        }
      }
      location
      slug
      title
      presenters {
        slug
        name
        bio {
          bio
        }
      }
      date(formatString: "hh:mm, MMMM DD, YYYY")
    }
  }
`
