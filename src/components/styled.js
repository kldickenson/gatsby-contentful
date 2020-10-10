import React from "react"
import { Flex } from "rebass"

export const CenteredContent = props => (
  <Flex m="0 auto" maxWidth="960px" padding="1.45rem 1.0875rem">
    {props.children}
  </Flex>
)
