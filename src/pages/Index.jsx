import { Container, Text, VStack, Link, IconButton, Box, keyframes } from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";

const scrollText = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="black" color="white">
      <VStack spacing={8}>
        <Text fontSize="4xl" fontWeight="bold">
          collective.vc
        </Text>
        <Box overflow="hidden" whiteSpace="nowrap" width="100%">
          <Text as="div" display="inline-block" animation={`${scrollText} 10s linear infinite`}>
            loading ... loading ... loading ... loading ... loading ... loading ... loading ... loading ... loading ... loading ... loading ... loading ...
          </Text>
        </Box>
        <Text fontSize="xl">... reinventing ourselves.</Text>
        <Link href="https://www.linkedin.com/company/collectivevc" isExternal>
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" variant="outline" colorScheme="whiteAlpha" />
        </Link>
      </VStack>
    </Container>
  );
};

export default Index;
