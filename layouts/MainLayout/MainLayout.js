import React from 'react';
import PropTypes from 'prop-types';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '@/layouts/components/Navbar';

import { Box } from '@chakra-ui/react';

const MainLayout = ({ children }) => {
  return (
    <ChakraProvider>
      <Navbar />
      <Box>{children}</Box>
    </ChakraProvider>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
