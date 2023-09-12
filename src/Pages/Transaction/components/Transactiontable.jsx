import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Tag,
  Stack,
  Text,
} from "@chakra-ui/react";
const Transactiontable = () => {
  const tableData = [
    {
      id: "HD82NA2H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "INR Deposit",
        tag: "E-Transfer",
      },
      amount: "+₹81,123",
      status: "pending",
    },
    {
      id: "HD82NA4H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "INR Widthdraw",
        tag: "Wire Transfer",
      },
      amount: "-₹55,123",
      status: "processing",
    },
    {
      id: "HD82NA5H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Buy",
        tag: "BTC",
      },
      amount: "12.0554484 BTC",
      status: "cancelled",
    },
    {
      id: "HD82NA6H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Sell",
        tag: "BTC",
      },
      amount: "-2.0554484 BTC",
      status: "completed",
    },
  ];

  const statusColor = {
    pending: "#797E82",
    processing: "#F5A50B",
    completed: "#059669",
    cancelled: "#DC2626",
  };
  return (
    <TableContainer>
      <Table variant="simple" colorScheme="gray" h="sm">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Date & Time</Th>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody color="p.black" pt="10">
          {tableData.map((data) => (
            <Tr key={data.id}>
              <Td fontSize="xs" fontWeight="medium">
                {data.id}
              </Td>
              <Td>
                <Stack spacing="0" fontSize="xs" fontWeight="medium">
                  <Text>{data.date}</Text>
                  <Text color="black.60">{data.time}</Text>
                </Stack>
              </Td>
              <Td>
                <Stack spacing="0" fontSize="xs" fontWeight="medium">
                  <Text>{data.type.name}</Text>
                  <Text color="black.60">{data.type?.tag}</Text>
                </Stack>
              </Td>
              <Td fontSize="xs" fontWeight="medium">
                {data.amount}
              </Td>
              <Td fontSize="xs" fontWeight="medium">
                <Tag
                  bg={statusColor[data.status]}
                  color="white"
                  borderRadius="full"
                >
                  {data.status}
                </Tag>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Transactiontable;
