import { Spinner } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return <Spinner />;

  if (error || !data) return null;

  const first = data.results[0];
  if (!first) return null;

  return <video controls src={first.data[480]} poster={first.preview}></video>;
};

export default GameTrailer;
