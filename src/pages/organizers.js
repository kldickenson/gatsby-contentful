import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Flex, Box, Image, Heading, Link } from "rebass"

const Organizers = () => {
  const data = useStaticQuery(graphql`
    {
      organizers: allOrganizersJson {
        edges {
          node {
            email
            employer
            name
            id
            phone
            photo
            role
            website
          }
        }
      }
    }
  `)

  const organizers = data.organizers.edges.map(org => org.node)

  return (
    <Layout>
      <SEO title="Organizers" description="The organizers of our group" />
      <h1>Organizers</h1>
      {organizers.map(organizer => (
        <Flex key={organizer.id}>
          <Box mb="30px">
            <Image src={organizer.photo} />
            <Heading fontSize="4">{organizer.name}</Heading>
          </Box>
          <Box ml="20px">
            <Box>Role: {organizer.role}</Box>
            <Box>Phone: {organizer.phone}</Box>
            <Box>Email: {organizer.email}</Box>
            <Box>Workplace: {organizer.employer}</Box>
            {organizer.website && <Link href={organizer.website}>Website</Link>}
          </Box>
        </Flex>
      ))}
    </Layout>
  )
}

export default Organizers
