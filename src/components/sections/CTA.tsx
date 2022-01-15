import { Box, Button, Center, Flex, Heading, Image, Text } from "@chakra-ui/react"

function CTA() {
  return (
    <Box
      w="100%"
      bg={"neutral.500"}
      mt={32}
      pb={8}
    >
      <Center>

        <Flex
          alignItems={"center"}
          h="100%"
          mt={-16}
          direction={["column", "row"]}
        >
          <Box mr={[28, 0]}>
            <Image src="/assets/cta.png" alt="Join Now"/>
          </Box>

          <Box
            ml={[4, -16]}
            mr={4}
            mt={[ -28, 0 ]}
          >
            <Box as={"h1"} textStyle={["h3", "h1"]} color={"neutral.100"}>
              Wanna join <Text as="span" color={"primary.300"}>&<br/></Text> have fun?
            </Box>
            <Box
              as="p"
              textStyle={["sm", "md", "lg"]}
              maxW="container.sm"
              my={8}
              color="neutral.100">
              We’ll keep you updated on the things you need to know about us. Nothing more, nothing less.
            </Box>

            <Button size={"md"} variant={"secondary"}>Join Now</Button>

          </Box>

        </Flex>

      </Center>

    </Box>
  )
}

export { CTA }