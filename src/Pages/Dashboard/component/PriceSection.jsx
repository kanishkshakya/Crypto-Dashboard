import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
const PriceSection = () => {
  const timestamps = [
    "6:15 PM",
    "7:15 PM",
    "8:15 PM",
    "9:15 PM",
    "10:15 PM",
    "11:15 PM",
  ];
  return (
    <CustomCard w="400px">
      <Flex justify="space-between" align="start">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balances</Text>
          </HStack>
          <HStack
            spacing={2}
            alignItems={{
              base: "flex-start",
              xl: "center",
            }}
            flexDir={{
              base: "column",
              md: "row",
            }}
          >
            <HStack>
              <Text textStyle="h5">22.39401000</Text>
            </HStack>
            <HStack color="green.400">
              <Icon as={BsArrowUpRight} fontWeight="medium" fontSize="sm" />
              <Text fontSize="sm">22%</Text>
            </HStack>
          </HStack>
        </Stack>
        <HStack fontWeight="medium" textStyle="20px">
          <Button leftIcon={<Icon as={AiOutlinePlusCircle} />}>Buy</Button>
          <Button leftIcon={<Icon as={AiOutlineMinusCircle} />}>Sell</Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded" colorScheme="green">
        <Flex justify="end">
          <TabList bg="black.5" p="2px">
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab
                _selected={{ bg: "white" }}
                key={tab}
                fontSize="sm"
                p="6px"
                borderRadius="4"
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel></TabPanel>
          <TabPanel>
            <Image src="/graph.svg" width="100%" mt="2" />
            <HStack justify="space-between">
              {timestamps.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="black.80">
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
