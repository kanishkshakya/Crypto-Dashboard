import {
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
} from "@chakra-ui/react";
import React from "react";
import DashboardLayout from "../../component/DashboardLayout";
import { AiOutlineDownload, AiOutlineSearch } from "react-icons/ai";
import Transactiontable from "./components/Transactiontable";

const TransactionPage = () => {
  const tabs = [
    { name: "All", count: "349" },
    { name: "Deposit", count: "114" },
    { name: "Withdraw", count: "55" },
    { name: "Trade", count: "50" },
  ];
  return (
    <DashboardLayout title="Transaction">
      <Flex justify="end" mt="3" mb="2">
        <Button leftIcon={<Icon as={AiOutlineDownload} />}>Export CSV</Button>
      </Flex>
      <Card borderRadius="1rem">
        <Tabs>
          <TabList display="flex" w="full" justifyContent="space-between">
            <HStack>
              {tabs.map((tab) => (
                <Tab key={tab.name} display="flex">
                  {tab.name}{" "}
                  <Tag colorScheme="gray" borderRadius="full">
                    {tab.count}
                  </Tag>
                </Tab>
              ))}
            </HStack>
            <InputGroup maxW="200px" pt="1.5" pr="4">
              <InputLeftElement pointerEvents="none" pt="4">
                <Icon as={AiOutlineSearch} />
              </InputLeftElement>
              <Input type="tel" placeholder="Search..." />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Transactiontable />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
            <TabPanel>
              <p>four</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default TransactionPage;
