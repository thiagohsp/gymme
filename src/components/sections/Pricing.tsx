import { Box, Button, Center, Flex, Grid, GridItem, Heading, HStack, Icon, List, ListIcon, ListItem, Stack, Text, VStack } from "@chakra-ui/react";
import Badge from "../ui/Badge";
import { HiCheckCircle, HiTag } from 'react-icons/hi'

function Pricing() {
  return (
    <Flex
      direction={"column"}
      w={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      my={16}
    >
      <Flex alignItems={"center"} p={2} mb={12}>
        <Icon as={HiTag} w={32} h={32} color="neutral.500" opacity={"0.05"}/>
        <Text ml="-8" textStyle={"h2"}>
          Planos<Text as="span" color={"primary.300"}>.</Text>
        </Text>
      </Flex>
      <Stack
        direction={["column", "row"]}
        w="100%"
        maxW={"container.xl"}
        spacing={4}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)'}}
          templateRows={{ base: 'repeat(3, 1fr)', lg: 'repeat(1, 1fr)' }}
          gap={8}
          width={"100%"}
          maxW={"container.xl"}
          mx={[16, 8]}
        >
          <GridItem>
            <Box bg={"rgba(19, 19, 22, 0.05)"} boxShadow={"dark-lg"} py={16} px={12} h="100%">
              <Center>
                <Stack spacing={16} direction={{base: "row", lg: "column"}}>

                  <Flex direction={"column"} alignItems={"center"} justifyContent={"center"}>
                    <Badge type="dark" mb={8}>Basic</Badge>

                    <Flex direction={"column"} align={"center"} >
                      <Text textStyle={"h1"} lineHeight={"1"}>
                        20<Text textStyle={"h4"} as="span" >$</Text>
                      </Text>
                      <Text textStyle={"sm"} fontWeight={"bold"} >/month</Text>
                    </Flex>
                  </Flex>


                  <Box>
                    <List spacing={4} mb={8}>
                      <ListItem>
                        <ListIcon as={HiCheckCircle} w={5} h={5}/>
                        unlimited gym access
                      </ListItem>
                      <ListItem>
                        <ListIcon as={HiCheckCircle} w={5} h={5}/>
                        1 training programs
                      </ListItem>
                      <ListItem>
                        <ListIcon as={HiCheckCircle} w={5} h={5}/>
                        free fitness consultation
                      </ListItem>
                    </List>

                    <Button variant={"outlined"}>JOIN NOW</Button>
                  </Box>

                </Stack>
              </Center>
            </Box>
          </GridItem>

          <GridItem>
            <Box bg={"neutral.500"} color={"white"} boxShadow={"dark-lg"} py={16} px={12} h="100%">
              <Center h="100%" >
                <Stack spacing={16} direction={{base: "row", lg: "column"}}>

                  <Flex direction={"column"} alignItems={"center"} justifyContent={"center"}>
                    <Badge type="light" mb={8} >Premium</Badge>

                    <Flex direction={"column"} align={"center"} >
                      <Text textStyle={"h1"} lineHeight={"1"}>
                        35<Text textStyle={"h4"} as="span" >$</Text>
                      </Text>
                      <Text textStyle={"sm"} fontWeight={"bold"} >/month</Text>
                    </Flex>
                  </Flex>

                  <Box>
                    <List spacing={4}  mb={8}>
                      <ListItem>
                        <ListIcon as={HiCheckCircle} w={5} h={5}/>
                        unlimited gym access
                      </ListItem>
                      <ListItem>
                        <ListIcon as={HiCheckCircle} w={5} h={5}/>
                        5 training programs
                      </ListItem>
                      <ListItem>
                        <ListIcon as={HiCheckCircle} w={5} h={5}/>
                        free fitness consultation
                      </ListItem>
                      <ListItem>
                        <ListIcon as={HiCheckCircle} w={5} h={5}/>
                        personal trainer
                      </ListItem>

                    </List>

                    <Button variant={"secondary"}>JOIN NOW</Button>
                  </Box>
                </Stack>
              </Center>
            </Box>
          </GridItem>

          <GridItem>
            <Box bg={"rgba(19, 19, 22, 0.05)"} boxShadow={"dark-lg"} py={16} px={12} h="100%">
              <Center h="100%" >
                <Stack spacing={16} direction={{base: "row", lg: "column"}}>

                  <Flex direction={"column"} alignItems={"center"} justifyContent={"center"}>
                    <Badge type="dark" mb={8}>Elite</Badge>

                    <Flex direction={"column"} align={"center"} >
                      <Text textStyle={"h1"} lineHeight={"1"}>
                        49<Text textStyle={"h4"} as="span" >$</Text>
                      </Text>
                      <Text textStyle={"sm"} fontWeight={"bold"} >/month</Text>
                    </Flex>
                  </Flex>

                  <Box>
                    <List spacing={4}  mb={8}>
                      <ListItem>
                        <ListIcon as={HiCheckCircle} w={5} h={5}/>
                        unlimited gym access
                      </ListItem>
                      <ListItem>
                        <ListIcon as={HiCheckCircle} w={5} h={5}/>
                        all training programs
                      </ListItem>
                      <ListItem>
                        <ListIcon as={HiCheckCircle} w={5} h={5}/>
                        free fitness consultation
                      </ListItem>
                      <ListItem>
                        <ListIcon as={HiCheckCircle} w={5} h={5}/>
                        personal trainer
                      </ListItem>
                      <ListItem>
                        <ListIcon as={HiCheckCircle} w={5} h={5}/>
                        50% off drinks
                      </ListItem>
                    </List>

                    <Button variant={"outlined"}>JOIN NOW</Button>
                  </Box>
                </Stack>
              </Center>
            </Box>
          </GridItem>
        </Grid>



      </Stack>
    </Flex>

  );
}

export { Pricing };
