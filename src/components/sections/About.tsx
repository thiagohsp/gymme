import { Box, Button, Center, Flex, Heading, Icon, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {FaUserFriends, FaChevronCircleRight} from 'react-icons/fa'

function About() {
  return (
      <Box
        maxW="container.md"
        mt="24"
        p={8}
      >
        <Flex alignItems={"center"} p={2}>
          <Icon as={FaUserFriends} w={32} h={32} color="neutral.500" opacity={"0.05"}/>
          <Text ml="-8" textStyle={"h2"}>
            Nossa Missão<Text as="span" color={"primary.300"}>.</Text>
          </Text>
        </Flex>
        <Text textStyle={"md"} my={8}>
          Nos diferenciamos por nossa atmosfera motivadora insuperável,
          equipe experiente e equipamentos de primeira linha, que ajudam
          nossos alunos a atingir suas metas individuais de condicionamento
          físico.<br />
          <br />
          O poder de nossa paixão por essa identidade é utilizada para inspirar
          cada pessoa que entra em nossas academias para melhorar a si mesma.
        </Text>
        <Flex
          as="a"
          alignItems={"center"}
          textTransform={"uppercase"}
          href=''
          textStyle={"h6"}
          py='1rem'
        >
          Join Now
          <Icon as={FaChevronCircleRight} w={"22px"} h={"22px"} ml={8} />
        </Flex>
      </Box>
  )
}

export { About }
