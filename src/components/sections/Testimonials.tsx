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
  author: string;
}

const sliderItems: Array<SliderItem> = [
  {
    id: 1,
    text: '“Great location, great price and great, helpful people. What to want more?”',
    author: "Mark A.",
    url: '/assets/testimonials_001.png'
  },
  {
    id: 2,
    text: '“Gymme changed my life. Not only physically but mentally as well. I’m a better mother, and all around better human being because of this gym.”',
    author: "Lauren K.",
    url: '/assets/testimonials_002.png'
  },
  {
    id: 3,
    text: '“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”',
    author: "John D.",
    url: '/assets/testimonials_003.png'
  },
]

function Testimonials() {
  return (

    <Flex
      direction={["column", "row"]}
      w={"100%"}
      justifyContent={"center"}
      alignItems={"flex-start"}
      mt={16}
      mb={64}
    >
      <Flex alignItems={"center"} p={2} mr={8} mt={16}>
        <Icon as={FaCalendarCheck} w={24} h={24} color="neutral.500" opacity={"0.05"}/>
        <Text ml="-8" textStyle={"h2"}>
          Depoimentos<Text as="span" color={"primary.300"}>.</Text>
        </Text>
      </Flex>

      <Box
        h="350px"
        w="100%"
        mt={8}
        color={"neutral.100"}
      >
        <Swiper
          centeredSlides={true}
          loop={true}
          loopFillGroupWithBlank={true}
          spaceBetween={4}
          slidesPerView={3}
          slidesPerGroup={1}
          className="mySwiper">

            { sliderItems.map(item =>
              (<SwiperSlide key={item.id}>

                    <Center>
                      <Box
                        w={360}
                        h={480}
                        my={16}
                        bgImage={ item.url }
                        bgSize={"cover"}
                        bgRepeat={"no-repeat"}
                        boxShadow={"dark-lg"}
                      >
                        <Flex
                          direction={"column"}
                          justifyContent={"flex-end"}
                          alignItems={"center"}
                          textAlign={"center"}
                          h="100%"
                          p={4}
                        >
                          <Text mb={4} fontSize={"18px"}><i>{ item.text }</i></Text>
                          <Text
                            fontWeight={"bold"}>
                              <Text
                                as="span"
                                color={"primary.300"}
                                fontWeight={"extrabold"}
                                fontSize={20}
                                pr={3}
                              >~</Text>
                              { item.author }
                          </Text>
                        </Flex>
                      </Box>
                    </Center>


              </SwiperSlide>)
            )}

        </Swiper>
      </Box>

    </Flex>

  );
}

export { Testimonials }


