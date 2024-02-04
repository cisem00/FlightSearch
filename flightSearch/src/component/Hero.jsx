import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
  } from '@chakra-ui/react';
  
  import { Link } from 'react-router-dom';
  
  export default function Hero({ scrollToLearn }) {  
    return (
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          pt={{ base: 20, md: 28 }}
          // pb={{ base: 10, md: 14 }}
        >
          <Heading
            fontWeight={750}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
            as={'span'}
            bgGradient={'linear(to-r, teal.300, teal.600)'}
            bgClip="text"
          >
            SearchFlight
          </Heading>
          <Text fontSize="large" color={'blue.50'} maxW={'3xl'}>
          Kullanıcıların kolayca uçuşları arayıp bulmalarını sağlamak adına tasarlanmış bir arama motoru sunuyoruz. 
          Hızlı, basit ve etkili!
          </Text>
          <Stack spacing={6} direction={'row'} mb="10px">
            <Button 
            onClick={scrollToLearn} 
            rounded={'full'} 
            px={6}
            colorScheme={'teal'}
            bgGradient="linear(to-r, teal.600, teal.300)"
            _hover={{ bgGradient: 'linear(to-r, teal.200, teal.500)' }}
            >
               Keşfet
            </Button>
          <Link to={'/searchflights'}>
            <Button 
            rounded={'full'} 
            px={6}
            colorScheme={'teal'}
            bgGradient="linear(to-r, teal.600, teal.300)"
            _hover={{ bgGradient: 'linear(to-r, teal.200, teal.500)' }}
            >
               Uçuş Ara
            </Button>
          </Link>  
          </Stack>
        </Stack>
      </Container>
    );
  }