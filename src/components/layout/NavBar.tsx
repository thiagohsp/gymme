import { Box, Button, Flex, HStack, Icon, IconButton, Image, Link, Text } from "@chakra-ui/react"
import {MdMenu} from 'react-icons/md'

function NavBar() {
  return (
    <Box
      w="100%"
      maxW={"container.xl"}
      color={"neutral.100"}
      px={4}
    >
      <Flex
        pt="1rem"
        justifyContent={"space-between"}
        alignItems={"center"}
        w="100%"
      >
        <Image src="/assets/logo.svg" alt="Gym.me" />

        <HStack
          spacing={8}
          textStyle={"sm"}
          display={{ base: "none", sm: "none", md: "none", lg: "block"}}
        >
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Training</Link>
          <Link>Pricing</Link>
          <Link>Community</Link>
          <Link>FAQ</Link>

        </HStack>

        <HStack spacing={4} display={{ base: "none", sm: "none",  md: "none", lg: "block"}}>
          <Button variant={"ghost"} px={2}>LOG IN</Button>
          <Button variant={"primary"}>SIGN UP</Button>
        </HStack>

        <HStack spacing={4} display={{ base: "block", lg: "none"}}>
          <IconButton aria-label='Open Menu' icon={<MdMenu />} variant={"ghost"} size={"lg"} />
        </HStack>
      </Flex>
    </Box>
    // <Flex
    //   as="nav"
    //   dir="row"
    //   textStyle={"md"}
    //   color={"neutral.100"}
    //   w="100%"
    //   pos={"absolute"}
    //   right={"0"}
    //   top={"0"}

    // >

    // </Flex>
  )
}

export { NavBar }