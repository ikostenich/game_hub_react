import Genre from "./Genre";
import Platform from "./Platform";
import Publisher from "./Publisher";

export default interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
  background_image: string;
  description_raw: string;
  rating: number;
  parent_platforms: {
    platform: Platform;
  }[];
  platforms: {
    platform: Platform;
  }[];
  metacritic: number;
}
