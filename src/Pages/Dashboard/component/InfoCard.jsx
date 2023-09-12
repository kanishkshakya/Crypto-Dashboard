import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { Tag, Text } from "@chakra-ui/react";

const InfoCard = ({ imgUrl, tagText, text, inverted }) => {
  return (
    <CustomCard
      mt={{
        base: "2",
        lg: "0",
      }}
      bgImage={imgUrl}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgColor={inverted ? "p.purple" : "white"}
    >
      <Tag
        bg={inverted ? "white" : "p.purple"}
        color={inverted ? "p.purple" : "white"}
        borderRadius="full"
      >
        {tagText}
      </Tag>
      <Text
        fontWeight="medium"
        textStyle="h6"
        color={inverted ? "white" : "black.80"}
      >
        {text}
      </Text>
    </CustomCard>
  );
};

export default InfoCard;
