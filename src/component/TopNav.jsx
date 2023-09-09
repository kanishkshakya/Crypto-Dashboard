import {
  Box,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FaBars, FaUser } from "react-icons/fa";
const TopNav = ({ title, onOpen }) => {
  return (
    <Box px="4" bg="white">
      <HStack maxW="50rem" h="14" justifyContent="space-between" mx="auto">
        <Icon
          as={FaBars}
          onClick={onOpen}
          display={{
            base: "block",
            lg: "none",
          }}
        />
        <Heading fontSize="24px" fontWeight="medium">
          {title}
        </Heading>
        <Menu>
          <MenuButton>
            <Icon as={FaUser} fontSize="22px" />
          </MenuButton>
          <MenuList>
            <MenuItem>support</MenuItem>
            <MenuItem>logout</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
