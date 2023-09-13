import {
  Box,
  Button,
  Card,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";

const SupportCard = () => {
  return (
    <Flex
      gap={4}
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      <Stack maxW="24rem">
        <Icon as={AiOutlineMail} boxSize={4} color="p.purple" />
        <Text as="h3" textStyle="h3" fontWeight="medium">
          Contact Us
        </Text>
        <Text fontSize="sm" color="black.60">
          Have a question or just want to know more? Feel free to reach out to
          us.
        </Text>
      </Stack>
      <Card p="3" borderRadius="0.5rem" flexGrow={1}>
        <Stack spacing={3}>
          <Text fontWeight="medium" fontSize="sm">
            You will receive response within 24 hours of Submit
          </Text>
          <HStack
            flexDir={{
              base: "column",
              md: "row",
            }}
          >
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Name" />
            </FormControl>
            <FormControl>
              <FormLabel>SureName</FormLabel>
              <Input placeholder="SureName" />
            </FormControl>
          </HStack>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input placeholder="Email" type="email" />
          </FormControl>
          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Message" />
          </FormControl>
          <Checkbox defaultChecked>
            <Text fontSize="xs">
              I agree with{" "}
              <Box as="span" color="p.purple">
                Terms and Conditions
              </Box>
            </Text>
          </Checkbox>
          <Stack>
            <Button fontSize="sm">Send a Message</Button>
            <Button colorScheme="gray" fontSize="sm">
              Book a Meeting
            </Button>
          </Stack>
        </Stack>
      </Card>
    </Flex>
  );
};

export default SupportCard;
