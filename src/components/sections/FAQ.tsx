import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Center, Flex, Icon, Text } from "@chakra-ui/react"
import { FaChevronCircleDown } from "react-icons/fa"

function FAQ() {
  return (
    <Box
      maxW="container.md"
      my="24"
      p={8}
      h={"700px"}
      bgImage={"/assets/faq.svg"}
      bgSize={"contain"}
      bgRepeat={"no-repeat"}
      bgPos={"center"}
    >
      <Flex h="100%" alignItems={"center"} justifyContent={"center"} direction={"column"}>

        <Flex
          alignItems={"center"}
          p={2}
          justifyContent={"center"}
          mb={8}
        >
          <Text textStyle={"h2"}>
            FAQ<Text as="span" color={"primary.300"}>.</Text>
          </Text>
        </Flex>
        <Accordion
          allowToggle
          w={"container.sm"}
        >
          <AccordionItem
            mb={4}
            border={"1px solid rgba(13,13,19,0.1)"}
          >

            <AccordionButton borderBottom={"1px solid rgba(13,13,19,0.1)"}>
              <Box flex='1' textAlign='left' textStyle={"h6"}>
                How can I book a workout class?
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel py={8}>
              Booking a workout classe is simple for our members.
              Simply log into your Gymme account on our website and
              click &quot;book class&quot; button . You can book 3 days in advance at 9pm.
              <br /><br />
              You can cancel your class online by logging back in and click &quot;cancel booking&quot;.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem
            mb={4}
            border={"1px solid rgba(13,13,19,0.1)"}
          >

            <AccordionButton borderBottom={"1px solid rgba(13,13,19,0.1)"}>
              <Box flex='1' textAlign='left' textStyle={"h6"}>
                Can I pay by cash for my membership?
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel py={8}>
              Booking a workout classe is simple for our members.
              Simply log into your Gymme account on our website and
              click &quot;book class&quot; button . You can book 3 days in advance at 9pm.
              <br /><br />
              You can cancel your class online by logging back in and click &quot;cancel booking&quot;.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem
            mb={4}
            border={"1px solid rgba(13,13,19,0.1)"}
          >

            <AccordionButton borderBottom={"1px solid rgba(13,13,19,0.1)"}>
              <Box flex='1' textAlign='left' textStyle={"h6"}>
                What age do I need to be to join?
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel py={8}>
              Booking a workout classe is simple for our members.
              Simply log into your Gymme account on our website and
              click &quot;book class&quot; button . You can book 3 days in advance at 9pm.
              <br /><br />
              You can cancel your class online by logging back in and click &quot;cancel booking&quot;.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem
            mb={4}
            border={"1px solid rgba(13,13,19,0.1)"}
          >

            <AccordionButton borderBottom={"1px solid rgba(13,13,19,0.1)"}>
              <Box flex='1' textAlign='left' textStyle={"h6"}>
                Are there any lockers?
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel py={8}>
              Booking a workout classe is simple for our members.
              Simply log into your Gymme account on our website and
              click &quot;book class&quot; button . You can book 3 days in advance at 9pm.
              <br /><br />
              You can cancel your class online by logging back in and click &quot;cancel booking&quot;.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem
            mb={4}
            border={"1px solid rgba(13,13,19,0.1)"}
          >

            <AccordionButton borderBottom={"1px solid rgba(13,13,19,0.1)"}>
              <Box flex='1' textAlign='left' textStyle={"h6"}>
                How do I cancel my membership?
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel py={8}>
              Booking a workout classe is simple for our members.
              Simply log into your Gymme account on our website and
              click &quot;book class&quot; button . You can book 3 days in advance at 9pm.
              <br /><br />
              You can cancel your class online by logging back in and click &quot;cancel booking&quot;.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem
            mb={4}
            border={"1px solid rgba(13,13,19,0.1)"}
          >

            <AccordionButton borderBottom={"1px solid rgba(13,13,19,0.1)"}>
              <Box flex='1' textAlign='left' textStyle={"h6"}>
                Is there water available at the gym?
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel py={8}>
              Booking a workout classe is simple for our members.
              Simply log into your Gymme account on our website and
              click &quot;book class&quot; button . You can book 3 days in advance at 9pm.
              <br /><br />
              You can cancel your class online by logging back in and click &quot;cancel booking&quot;.
            </AccordionPanel>
          </AccordionItem>


        </Accordion>
      </Flex>
    </Box>
  )

}

export { FAQ }