import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar/>
    <AllRoutes/>
    
    </ChakraProvider>
  );
}

export default App;
