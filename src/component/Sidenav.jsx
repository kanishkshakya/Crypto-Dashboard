import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
const Sidenav = () => {
  const navLinks = [
    { icons: RxDashboard, text: "Dashbroard", link: "/" },
    { icons: BsArrowDownUp, text: "Transactions", link: "/Transaction" },
  ];
  return (
    <Stack
      justifyContent="space-between"
      bg="white"
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w={{
        base: "full",
        lg: "16rem",
      }}
      h={{
        md: "100%",
        xl: "100vh",
        lg: "100vh",
      }}
    >
      <Box>
        <Heading textAlign="center" as="h1" fontSize="20px" pt="3.5rem">
          @kanishkShakya
        </Heading>
        <Box mx="3" mt="6">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack
                color="#797e82"
                py="3"
                px="4"
                borderRadius="4"
                _hover={{
                  bg: "#f3f3f7",
                  color: "#171717",
                }}
              >
                <Icon as={nav.icons} />
                <Text fontSize="14px" fontWeight="medium">
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>
      <Box mx="3" mt="6" mb="6">
        <Link to="/support">
          <HStack
            py="3"
            px="4"
            color="#797e82"
            borderRadius="4"
            _hover={{
              bg: "#f3f3f7",
              color: "#171717",
            }}
          >
            <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="medium">
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav;
