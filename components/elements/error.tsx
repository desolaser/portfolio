import React from 'react';
import { Text } from '@chakra-ui/react';

interface ErrorProps {
  children: React.ReactNode;
}

const Error: React.FC<ErrorProps> = ({ children }) => (
  <Text color="red">{children}</Text>
);

export default Error;