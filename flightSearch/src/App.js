import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import theme from './theme';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import DisplayFlights from './pages/DisplayFlights';
import SearchFlights from './pages/SearchFlights';


function App() {
  return (
    <ChakraProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/searchflights" element={<SearchFlights />} />
          <Route path="/displayflights" element={<DisplayFlights/>} />
        </Routes>
    </ChakraProvider>
  );
}

export default App;
