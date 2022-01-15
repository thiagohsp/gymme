import { Button, Flex, HStack, Image, Link, Text } from "@chakra-ui/react"

function Footer() {
  return (
    <Flex
      as="footer"
      dir="row"
      textStyle={"md"}
      bg={"neutral.500"}
      color={"neutral.300"}
      fontSize={"xs"}
      w="100%"
      p={12}
    >
      <Flex
        py="1.5rem"
        justifyContent={"space-between"}
        alignItems={"center"}
        h="42px"
        w="100%"
      >
        <Image src="/assets/logo.svg" alt="Gym.me" />

        <Text>All rights reserved. Gymme 2021.</Text>
      </Flex>
    </Flex>
  )
}

export { Footer }