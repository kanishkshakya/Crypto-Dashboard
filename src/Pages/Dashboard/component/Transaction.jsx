import React, { Fragment } from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  HStack,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiFillDollarCircle } from "react-icons/ai";
import { PiCurrencyBtcFill } from "react-icons/pi";
const Transaction = () => {
  const transactions = [
    {
      id: "1",
      icon: AiFillDollarCircle,
      text: "INR Deposit",
      amount: "+ 81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "2",
      icon: PiCurrencyBtcFill,
      text: "BTC Sell",
      amount: "- 12.48914891 BTC",
      timestamp: "2022-02-22 12:12 PM",
    },
    {
      id: "3",
      icon: AiFillDollarCircle,
      text: "INR Deposit",
      amount: "+ 81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
  ];
  return (
    <CustomCard fontSize="sm" color="black.80" h="100%">
      <Text>Recent Transaction</Text>
      <Stack spacing={4}>
        {transactions.map((transaction, i) => (
          <Fragment key={transaction.id}>
            {i !== 0 && <Divider />}
            <Flex gap={2}>
              <Grid
                placeItems="center"
                bg="black.5"
                boxSize={8}
                borderRadius="full"
              >
                <Icon fontSize="20px" as={transaction.icon} />
              </Grid>
              <Flex justify="space-between" w="full">
                <Stack spacing={0}>
                  <Text textStyle="h6">{transaction.text}</Text>
                  <Text fontSize="sm" color="black.40">
                    {transaction.timestamp}
                  </Text>
                </Stack>
                <Text textStyle="h6">{transaction.amount}</Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button colorScheme="gray" mt={2} w="full">
        View all
      </Button>
    </CustomCard>
  );
};

export default Transaction;
