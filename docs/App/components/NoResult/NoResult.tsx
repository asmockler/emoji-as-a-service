import * as React from 'react';
import styled from '@emotion/styled';

type Props = {
  currentInput: string;
};

const Text = styled.h3({
  fontSize: 24,
  margin: '20px auto',
  textAlign: 'center',
});

export function NoResult({currentInput}: Props) {
  if (currentInput === '') {
    return null;
  }

  return <Text>No result for {currentInput}</Text>;
}
