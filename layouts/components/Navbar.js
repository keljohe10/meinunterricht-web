import { Box, Flex } from '@chakra-ui/react';

export default function Nav() {
  return (
    <>
      <Box bg='gray.900' px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box color='white'>MeinUnterricht</Box>
        </Flex>
      </Box>
    </>
  );
}
