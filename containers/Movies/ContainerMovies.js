import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies, getMoviesEntities } from '@/stores/movies';

import MovieCard from '@/components/MovieCard/MovieCard';
import Searchbar from '@/components/Searchbar/Searchbar';

import { List, Flex, ListItem, Box, Alert, AlertIcon } from '@chakra-ui/react';

const ContainerMovies = () => {
  const dispatch = useDispatch();

  const movies = useSelector(state => getMoviesEntities(state));
  const [isSearching, setSearching] = useState(false);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const typetext = typetext => {
    setSearching(typetext);
  };

  return (
    <>
      <Searchbar typetext={typetext} />
      {movies.length > 0 && (
        <List mx={{ md: 16 }} data-testid='input-list'>
          <Flex flexWrap='wrap' justify={{ base: 'space-evenly' }}>
            {movies.map(movie => (
              <ListItem key={movie.imbdID} my={4} data-testid='input-list-item'>
                <MovieCard {...movie} />
              </ListItem>
            ))}
          </Flex>
        </List>
      )}
      {isSearching && !movies.length && (
        <Flex flexDirection='column' mt={20} mx={8}>
          <Box alignSelf='center'>
            <Alert status='info'>
              <AlertIcon />
              Your search did not have any matches
            </Alert>
          </Box>
        </Flex>
      )}
    </>
  );
};

export default ContainerMovies;
