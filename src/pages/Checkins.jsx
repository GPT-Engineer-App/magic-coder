import { Box, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Checkins = ({ accessToken }) => {
  const [checkins, setCheckins] = useState([]);

  useEffect(() => {
    const fetchCheckins = async () => {
      try {
        const response = await fetch("https://backengine-v763.fly.dev/checkins", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setCheckins(data);
        } else {
          console.error("Failed to fetch checkins");
        }
      } catch (error) {
        console.error("An error occurred while fetching checkins", error);
      }
    };

    fetchCheckins();
  }, [accessToken]);

  return (
    <VStack spacing={4}>
      {checkins.map((checkin, index) => (
        <Box key={index} p={5} shadow="md" borderWidth="1px">
          <Text>Order ID: {checkin.order_id}</Text>
          <Text>Product ID: {checkin.product_id}</Text>
          <Text>Item ID: {checkin.item_id}</Text>
          <Text>Coupon Code: {checkin.coupone_code}</Text>
          <Text>Checkin Count: {checkin.checkin_count}</Text>
        </Box>
      ))}
    </VStack>
  );
};

export default Checkins;
