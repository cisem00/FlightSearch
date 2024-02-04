import {
  Box,
  Flex,
  Stack,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import { Link,} from 'react-router-dom';
import logo from '../images/uçak1.png';

export default function Navbar() {

  return (
    <Box position="sticky" top="0" zIndex={'5'} margin="0" padding="0" >
      <Flex
        bgGradient='linear(to-r, teal.300, teal.500)'
        //bg={useColorModeValue('teal.900', 'teal.900')}
        color={useColorModeValue('gray.700', 'white')}
        h={'64px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Link to="/">
            <Image
              ml={30}
              mt={20}
              borderRadius='full'
              boxSize='250px'
              src={logo}
            />
          </Link>
          <Flex
            display={{ base: 'none', md: 'flex' }}
            alignItems="center"
            ml={10}
          >
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          alignItems="center"
          direction={'row'}
          spacing={5}
        >
        </Stack>
      </Flex>
    </Box>
  );
}

