import React from "react";
import Game from "../entities/Game";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Link to={`/games/${game.slug}`}>
      <Card>
        <Image
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
        />
        <CardBody>
          <HStack justifyContent={"space-between"} marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
          <Heading fontSize="2xl"> {game.name}</Heading>
        </CardBody>
      </Card>
    </Link>
  );
}

export default GameCard;
