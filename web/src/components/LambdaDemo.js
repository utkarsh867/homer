import React, { useState } from "react";
import { Box, Button, useToast } from "@chakra-ui/core";

export const LambdaDemo = () => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch("/.netlify/functions/hello")
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        toast({
          title: "Received a response",
          description: json.msg,
          isClosable: true,
          duration: 3000,
          status: "success",
        });
      });
  };

  return (
    <Box p={5}>
      <Button onClick={handleClick} isLoading={loading}>
        Call Lambda
      </Button>
    </Box>
  );
};
