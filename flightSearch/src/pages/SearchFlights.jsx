import React, { useState } from 'react';
import {
  Box,
  Input,
  InputGroup,
  InputLeftAddon,
  Checkbox,
  Button,
  Flex,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function SearchFlight() {
  // Form state'leri
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [oneWay, setOneWay] = useState(false);

  // Formu gönderme işlemi
  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada arama işlemini yapacak API çağrısını yerleştirebilirsiniz
  };

  return (
    <Box mt={20}>
      <form onSubmit={handleSubmit}>
        <Flex direction="row" justify="center" align="center" wrap="wrap">
          <FormControl mb={4} mr={4}>
            <FormLabel>Kalkış Havaalanı</FormLabel>
            <Input
              type="text"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              placeholder="Kalkış Havaalanı"
            />
          </FormControl>

          <FormControl mb={4} mr={4}>
            <FormLabel>Varış Havaalanı</FormLabel>
            <Input
              type="text"
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
              placeholder="Varış Havaalanı"
            />
          </FormControl>

          <FormControl mb={4} mr={4}>
            <FormLabel>Hareket Tarihi</FormLabel>
            <Input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
          </FormControl>

          {!oneWay && (
            <FormControl mb={4} mr={4}>
              <FormLabel>Dönüş Tarihi</FormLabel>
              <Input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
              />
            </FormControl>
          )}

          <FormControl mb={4} mr={4}>
            <Checkbox
              isChecked={oneWay}
              onChange={(e) => setOneWay(e.target.checked)}
            >
              Tek Yönlü Uçuş
            </Checkbox>
          </FormControl>
          
        <Link to={'/displayflights'}>
          <Button
            rounded={'full'} 
            px={6}
            colorScheme={'teal'}
            bgGradient="linear(to-r, teal.600, teal.300)"
            _hover={{ bgGradient: 'linear(to-r, teal.200, teal.500)' }}
          >
            Ara
          </Button>
        </Link>
        </Flex>
      </form>
    </Box>
  );
}

export default SearchFlight;