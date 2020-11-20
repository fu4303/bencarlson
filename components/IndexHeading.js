import React from 'react'
import {
    Heading,
    Flex,
    Icon,
    Link
} from '@chakra-ui/core'

const IndexHeading = () => {
    return (
        <Flex
            h='60vh'
            alignSelf="center"
            w="70%"
            justifyContent="center"
            flexDirection="column"
            display={['none', 'none', 'flex']}
            mb={10}
        >
            <Heading letterSpacing="wide" mb={10} as="h1" fontSize={["40px", "50px", "60px"]}>
                Hello! I'm Benjamin Carlson, <br /> a <Flex display="inline" color="blue.200">developer</Flex> and <Flex display="inline" color="blue.200">student</Flex> living and working in CT.
            </Heading>
            <Link alignSelf="center" href="#main" mt={20}>
                <Icon name="chevron-down" size="40px"></Icon>
            </Link>
            <Flex id="main"></Flex>
        </Flex>
    )
}

export default IndexHeading