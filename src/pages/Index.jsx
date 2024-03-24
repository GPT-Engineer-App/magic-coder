import React, { useState, useEffect } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Stack, Text, useToast, VStack, List, ListItem } from "@chakra-ui/react";
import { FaSignInAlt, FaUserPlus, FaPlusCircle } from "react-icons/fa";

const CheckinItem = ({ checkin }) => (
  <ListItem>
    Order ID: {checkin.order_id}, Product ID: {checkin.product_id}, Item ID: {checkin.item_id}, Coupon: {checkin.coupone_code}, Count: {checkin.checkin_count}
  </ListItem>
);

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [checkins, setCheckins] = useState([]);
  const toast = useToast();

  const handleLogin = async () => {
    const response = await fetch("https://backengine-v763.fly.dev/checkins", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await response.json();
    setCheckins(data);
  };

  const handleSignup = async () => {
    // Implement signup logic here
    // Call the /signup endpoint with email and password
    // Show appropriate toast messages upon success or error
  };

  const handleCheckin = async () => {
    // Implement checkin logic here
    // Call the /checkins endpoint with required fields
    // Show appropriate toast messages upon success or error
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        {!isLoggedIn ? (
          <>
            <Heading as="h1" size="xl" textAlign="center">
              Welcome to the Interactive API Platform
            </Heading>
            <Stack spacing={4} width="100%">
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </FormControl>
              <Button leftIcon={<FaSignInAlt />} colorScheme="blue" onClick={handleLogin}>
                Login
              </Button>
              <Button leftIcon={<FaUserPlus />} colorScheme="green" onClick={handleSignup}>
                Signup
              </Button>
            </Stack>
          </>
        ) : (
          <>
            <Heading as="h2" size="lg" textAlign="center">
              Check-In System
            </Heading>
            <Button leftIcon={<FaPlusCircle />} colorScheme="purple" onClick={handleCheckin}>
              Check-In
            </Button>
            <Heading as="h3" size="md">
              Checkins
            </Heading>
            <List spacing={3}>
              {checkins.map((checkin) => (
                <CheckinItem key={checkin.id} checkin={checkin} />
              ))}
            </List>
          </>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
