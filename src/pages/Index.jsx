import React, { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import Checkins from "./Checkins";

function Index() {
  const toast = useToast();
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {}, []);

  return <>{accessToken && <Checkins accessToken={accessToken} />}</>;
}

export default Index;
