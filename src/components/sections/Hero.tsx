import { Box, Button, Center, Flex, Heading, Image, Text } from "@chakra-ui/react"
import { NavBar } from "../layout/NavBar"

function Hero() {
  return (
    <Box
      h="790px"
      w={"100%"}
      maxW="container.xl"
      bgImage="url('/assets/hero.png')"
      bgPosition={{ sm: "right 0% bottom 100%", lg: "right 22% bottom 100%"}}
      bgRepeat="no-repeat"
      bgSize={"contain"}
    >
      <NavBar />

      <Flex alignItems={"center"} h="100%" p={4}>
        <Box  /* w={{ sm: "100%", md: "100%", lg: "70%"}}*/ w={{base: "100%", md: "30rem", lg: "40rem"}} px={4} >
          <Box as={"h1"} textStyle="h1" color={"neutral.100"}>A melhor parte do seu dia
            <Text as="span" color={"primary.300"}> – é aqui.</Text>
          </Box>
          <Box
            as="p"
            textStyle={["sm", "md", "lg"]}
            w="100%"
            my={8}
            color="neutral.100">
            Te ajudamos na busca pela saúde com um ambiente seguro e amigável.
          </Box>

          <Button size={"md"} variant={"secondary"}>Join Now</Button>

        </Box>
      </Flex>



    </Box>
  )
}

export { Hero }