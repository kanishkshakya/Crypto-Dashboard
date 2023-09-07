import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import Sidenav from "./Sidenav";
import TopNav from "./TopNav";
import SideDrawer from "./SideDrawer";

const DashboardLayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Flex>
      <Box
        display={{
          base: "none",
          lg: "block",
        }}
      >
        <Sidenav />
      </Box>
      <SideDrawer isOpen={isOpen} onClose={onClose} />
      <Box flexGrow="1">
        <TopNav title={title} onOpen={onOpen} />
        <Container mt="6" maxW="60rem" px="4">
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
