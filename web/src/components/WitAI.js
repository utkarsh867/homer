import React, { useState } from "react";
import { Box, Button, useToast, Input } from "@chakra-ui/core";

export const WitAI = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const toast = useToast();
  const onSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/.netlify/functions/temperature", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });
      const json = await response.json();

      setIsLoading(false);
      toast({
        title: "Sent Wit.ai request",
        description: json.msg,
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  return (
    <Box>
      <Button isLoading={isLoading} onClick={onSubmit} m={5}>
        Submit
      </Button>
      <Input
        placeholder="Provide search query"
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            onSubmit(query);
          }
        }}
        m={5}
      />
    </Box>
  );
};
