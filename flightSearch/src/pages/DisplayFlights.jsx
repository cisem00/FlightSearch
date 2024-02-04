// DisplayFlights.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, VStack, Text, Flex, Box} from '@chakra-ui/react';

function DisplayFlights({ searchCriteria }) {
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortCriteria, setSortCriteria] = useState('departure_time');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSortChange = (criteria) => {
    if (sortCriteria === criteria) {
      setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortCriteria(criteria);
      setSortOrder('asc');
    }
  };

  const filterFlights = () => {
    const filtered = flights.filter((flight) => {
      const departureMatch = flight.departure === searchCriteria.departure || flight.departure_airport === searchCriteria.departureAirport || searchCriteria.departure === '';
      const arrivalMatch = flight.arrival === searchCriteria.arrival || flight.arrival_airport === searchCriteria.arrivalAirport || searchCriteria.arrival === '';
      const dateMatch = searchCriteria.date ? new Date(flight.departure_time).toDateString() === new Date(searchCriteria.date).toDateString() : true;

      return departureMatch && arrivalMatch && dateMatch;
    });

    const sortedFlights = filtered.sort((a, b) => {
      const aValue = a[sortCriteria];
      const bValue = b[sortCriteria];

      if (sortOrder === 'asc') {
        return aValue < bValue ? -1 : 1;
      } else {
        return bValue < aValue ? -1 : 1;
      }
    });

    setFilteredFlights(sortedFlights);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`http://localhost:8000/flight/search`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 200) {
          setFlights(response.data);
          setIsLoading(false);
          filterFlights();
        } else {
          throw new Error('Request failed with status ' + response.status);
        }
      } catch (error) {
        console.error('Error fetching flights:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (flights.length) {
      filterFlights();
    }
  }, [flights, searchCriteria, sortCriteria, sortOrder]);

  const sortingOptions = [
    { criteria: 'departure_time', label: 'Departure Time' },
    { criteria: 'return_time', label: 'Return Time' },
    { criteria: 'flight_duration', label: 'Flight Duration' },
    { criteria: 'price', label: 'Price' },
  ];

  return (
  <Flex direction="row" justify="flex-end" align="flex-start" spacing={4} marginLeft="100px" mb="10">
    <VStack align="flex-start" spacing={4}>
      <Text fontSize="md" fontWeight="bold">Sort by:</Text>
      <VStack spacing={2} align="flex-start">
        {sortingOptions.map((option) => (
          <Button key={option.criteria} onClick={() => handleSortChange(option.criteria)} variant={sortCriteria === option.criteria ? 'solid' : 'outline'}>
            {option.label}
          </Button>
        ))}
      </VStack>
      {/* Display flights */}
      {/* ... (existing JSX to display flights) */}
    </VStack>
  </Flex> 
  );
}

export default DisplayFlights;

