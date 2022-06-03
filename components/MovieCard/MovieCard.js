import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import {
  Box,
  Flex,
  Center,
  Heading,
  Text,
  Stack,
  Tooltip,
} from '@chakra-ui/react';
import { FilmIcon } from 'chakra-ui-ionicons';

const MovieCard = ({ poster, title, plot, director }) => {
  const renderPoster = image => {
    if (image !== 'N/A')
      return (
        <Image
          data-testid='poster'
          src={image}
          alt='movie'
          w={6}
          h={6}
          layout='fill'
        />
      );

    return (
      <Flex
        data-testid='nofound-poster'
        alignItems='center'
        w='full'
        h='full'
        justify='center'
      >
        <FilmIcon w={20} h={20} color='gray.500' />
      </Flex>
    );
  };

  return (
    <Center py={16} mx={2}>
      <Box
        w={{ base: '230px', md: '360px' }}
        h={{ md: '430px' }}
        bg='white'
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}
        >
          {renderPoster(poster)}
        </Box>
        <Stack>
          <Heading
            color='gray.700'
            fontSize={{ base: 'md', md: '2xl' }}
            fontFamily={'body'}
          >
            {title}
          </Heading>
          <Tooltip label={plot} aria-label={title} hasArrow>
            <Text
              color={'gray.500'}
              noOfLines={2}
              display={{ base: 'none', md: '-webkit-box' }}
            >
              Plot: {plot}
            </Text>
          </Tooltip>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>{director}</Text>
            <Text color={'gray.500'}>2001</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  plot: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default MovieCard;
