import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import {
  Box,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Flex,
} from '@chakra-ui/react';
import { SearchIcon, CloseIcon } from '@chakra-ui/icons';

import { getMovies } from '@/stores/movies';

const Searchbar = ({ typetext }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const debouncedFetch = useMemo(
    () => debounce(text => dispatch(getMovies(text)), 400),
    [dispatch],
  );

  const handleOnEnterKeyPressed = e => {
    if (e.key === 'Enter' && inputValue.length) debouncedFetch(inputValue);
  };

  const handleOnChange = value => {
    setInputValue(value);
    if (!value?.length || value.length >= 3) {
      debouncedFetch(value);
      typetext(true);
    }
  };

  const onClear = () => {
    setInputValue('');
    debouncedFetch();
  };

  return (
    <Flex flexDirection='column' h='full' bg='gray.900'>
      <Box w='full' position='relative' zIndex={10}>
        <Box
          w='full'
          align='center'
          pt={4}
          pb={6}
          mx={{ md: 'auto' }}
          px={{ base: 6, md: 0, lg: 4 }}
        >
          <Box position='relative' w={{ base: '100%', md: '2xl' }}>
            <InputGroup borderColor='gray.200'>
              <InputLeftAddon bg='white' px={3}>
                <SearchIcon color='alpha.400' h={4} w={4} />
              </InputLeftAddon>
              <Input
                value={inputValue}
                onChange={e => handleOnChange(e.target.value)}
                onKeyDown={e => handleOnEnterKeyPressed(e)}
                color='gray.600'
                placeholder='Search...'
                bg='white'
                _focus={{ boxShadow: 'none' }}
                data-testid='search-input'
              />
              {inputValue?.length && (
                <InputRightAddon
                  data-testid='clear-icon'
                  onClick={onClear}
                  bg='white'
                  cursor='pointer'
                >
                  <CloseIcon color='gray.500' h={3} w={3} />
                </InputRightAddon>
              )}
            </InputGroup>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

Searchbar.propTypes = {
  typetext: PropTypes.func.isRequired,
};

export default Searchbar;
