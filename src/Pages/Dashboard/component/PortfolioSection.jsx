import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { BiInfoCircle } from "react-icons/bi";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
const PortfolioSection = () => {
  return (
    <HStack
      h="full"
      justifyContent="space-between"
      borderRadius="lg"
      p="3"
      alignItems={{
        base: "flex-start",
        xl: "center",
      }}
      flexDir={{
        base: "column",
        xl: "row",
      }}
      spacing={{
        base: "4",
        xl: "0",
      }}
    >
      <HStack>
        <Stack
          spacing={{
            base: "4",
            xl: "0",
          }}
        >
          <HStack color="black.80">
            <Text fontSize="sm">Total Portfolio Value</Text>
            <Icon as={BiInfoCircle} />
          </HStack>
          <Text textStyle="h6">$ 112, 312.24</Text>
        </Stack>
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balances</Text>
          </HStack>
          <HStack
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
              <Text textStyle="h6">22.39401000</Text>
              <Tag colorScheme="gray">BTC</Tag>
            </HStack>
            <HStack>
              <Text textStyle="h6">1, 300.00</Text>
              <Tag colorScheme="gray">INR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>
      <HStack>
        <Button leftIcon={<Icon as={AiOutlineArrowDown} />}>Deposit</Button>
        <Button leftIcon={<Icon as={AiOutlineArrowUp} />}>Withdraws</Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
