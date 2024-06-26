import { Container, VStack, Heading, Text, Button, Box, HStack, Input } from "@chakra-ui/react";
import ProgressChart from "../components/ProgressChart";
import { useState } from "react";
import { FaRunning, FaDumbbell, FaBiking } from "react-icons/fa";

const Index = () => {
  const [activity, setActivity] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");
  const [activities, setActivities] = useState([]);

  const handleAddActivity = () => {
    if (activity && duration && date) {
      setActivities([...activities, { activity, duration, date }]);
      setActivity("");
      setDuration("");
      setDate("");
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="2xl">Fitness Tracker</Heading>
        <Text fontSize="lg">Track your daily fitness activities</Text>
        <HStack spacing={4} width="100%">
          <Input 
            placeholder="Activity (e.g., Running)" 
            value={activity} 
            onChange={(e) => setActivity(e.target.value)} 
          />
          <Input 
            placeholder="Duration (e.g., 30 mins)" 
            value={duration} 
            onChange={(e) => setDuration(e.target.value)} 
          />
          <Input 
            placeholder="Date (e.g., 2023-10-01)" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
          />
          <Button colorScheme="teal" onClick={handleAddActivity}>Add</Button>
        </HStack>
        <Box width="100%" mt={4}>
          {activities.map((act, index) => (
            <HStack key={index} justifyContent="space-between" p={2} borderWidth="1px" borderRadius="md">
              <Text>{act.activity}</Text>
              <Text>{act.duration}</Text>
              <Text>{act.date}</Text>
            </HStack>
          ))}
        </Box>
        <ProgressChart data={activities} />
      </VStack>
    </Container>
  );
};

export default Index;