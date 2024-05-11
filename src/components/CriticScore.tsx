import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  let color = score >= 75 ? "green" : score >= 50 ? "yellow" : "red";

  return (
    <Badge fontSize="13px" padding={1} colorScheme={color}>
      {score}
    </Badge>
  );
}

export default CriticScore;
