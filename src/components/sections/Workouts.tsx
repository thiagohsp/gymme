import React from 'react';
import { Badge, Box, Center, Flex, Heading, Icon, Image, Text } from '@chakra-ui/react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"

// import Swiper core and required modules
import SwiperCore, {
  Pagination,
  Navigation
} from 'swiper';
import { FaCalendarCheck } from 'react-icons/fa';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

type SliderItem = {
  id: number;
  url: string;
  text: string;
}

const sliderItems: Array<SliderItem> = [
  { id: 1, text: 'Body Pump', url: '/assets/body_pump.png' },
  { id: 2, text: 'Boxing', url: '/assets/boxing.png' },
  { id: 3, text: 'Full Body', url: '/assets/full_body.png' },
  { id: 4, text: 'Yoga', url: '/assets/yoga.png' },
  { id: 5, text: 'Body Pump', url: '/assets/body_pump.png' },
  { id: 6, text: 'Boxing', url: '/assets/boxing.png' },
  { id: 7, text: 'Full Body', url: '/assets/full_body.png' },
  { id: 8, text: 'Yoga', url: '/assets/yoga.png' },
]

function Workout() {
  return (

    <Flex
      direction={"column"}
      w={"100%"}
      maxW="container.xl"
      justifyContent={"center"}
      alignItems={"center"}
      mt={32}
    >
      <Flex justifyContent={"center"} alignItems={"center"} p={2} >
        <Icon as={FaCalendarCheck} w={24} h={24} color="neutral.500" opacity={"0.05"}/>
        <Text ml="-8" textStyle={"h2"}>
          Programa de Treinamentos<Text as="span" color={"primary.300"}>.</Text>
        </Text>
      </Flex>

      <Box
        h="350px"
        w="100%"
        mt={16}
      >
        <Swiper
          centeredSlides={true}
          loop={true}
          loopFillGroupWithBlank={true}
          spaceBetween={30}
          slidesPerView={3}
          slidesPerGroup={1}
          className="mySwiper">

            { sliderItems.map(item =>
              (<SwiperSlide key={item.id}>
                  {({ isActive }) => (
                    <Center>
                      <Box
                        w={320}
                        h={isActive ? 350 : 320}
                        mt={isActive ? 0 : 15}
                        bgImage={ item.url }
                        bgSize={"cover"}
                        bgRepeat={"no-repeat"}
                      >
                        <Flex
                          direction={"column"}
                          justifyContent={"flex-end"}
                          alignItems={"start"}
                          h="100%"
                          p={4}
                          style={{
                            userSelect: "none",
                            msUserSelect: "none",
                            MozUserSelect: "none",
                            WebkitUserSelect: "none",
                          }}
                        >
                          {/* <Text
                            as="span"
                            bg="neutral.100"
                            padding={2}
                            textStyle={"sm"}
                            fontWeight={"bold"}
                          >
                            {item.text}
                          </Text> */}
                          <Badge
                            fontSize={"14px"}
                            textTransform={"capitalize"}
                            py={1}
                            px={4}
                          >
                            {item.text}
                          </Badge>
                        </Flex>
                      </Box>
                    </Center>
                  )}


              </SwiperSlide>)
            )}

        </Swiper>
      </Box>

    </Flex>

  );
}

export { Workout }


