import { useStaticQuery, Link } from "gatsby"
import React from "react"
import { Flex, Box } from "rebass"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Events = () => {
  const data = useStaticQuery(graphql`
    {
      events: allContentfulEvents {
        edges {
          node {
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
      }
    }
  `)

  const events = data.events.edges.map(event => event.node)

  return (
    <Layout>
      <SEO title="Events" />
      <h1>Events</h1>
      {events &&
        events.map(event => {
          const { location, slug, title, presenters, datetime } = event

          return (
            <Flex flexDirection="column" mb="3" key={slug}>
              <Link to={`/event/${slug}`}>{title}</Link>
              {location && (
                <Box>
                  <em>{location}</em>
                </Box>
              )}
              {datetime && (
                <Box>
                  <em>{datetime}</em>
                </Box>
              )}
              {presenters && presenters.length === 1 && (
                <Box fontSize={2}>By: {presenters[0].name}</Box>
              )}
              {presenters && presenters.length > 1 && (
                <Box fontSize={2}>
                  By:
                  {presenters.map((pres, index) => {
                    if (index !== presenters.length - 1)
                      return <span key={pres.id}> {pres.name},</span>
                    else {
                      return <span key={pres.id}> and {pres.name}</span>
                    }
                  })}
                </Box>
              )}
            </Flex>
          )
        })}
    </Layout>
  )
}

export default Events
