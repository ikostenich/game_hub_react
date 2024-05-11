import { Button, Collapse, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  data: string;
}

function ExpandableText({ data }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const limit = 300;

  if (data.length <= limit) {
    return <Text>{data}</Text>;
  }

  const text = isExpanded ? data : `${data.slice(0, limit)}...`;
  return (
    <Text>
      {text}
      <Button
        size="xs"
        fontWeight={"bold"}
        marginLeft={3}
        colorScheme="blue"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show less" : "Show more"}
      </Button>{" "}
    </Text>
  );
}

export default ExpandableText;
