import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <Box padding="100px">
        <Heading>Oops...</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "The page does not exist"
            : "Unexpected error"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
