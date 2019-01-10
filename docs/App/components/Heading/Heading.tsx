import * as React from 'react';
import styled from '@emotion/styled';
import {emojiUrl} from 'docs/utilities';

const Container = styled.div({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
});

const Text = styled.h1({
  fontSize: 40,
});

const Image = styled.img({
  paddingRight: 15,
  width: 55,
});

export function Heading() {
  return (
    <Container>
      <Image src={emojiUrl('wave')} />
      <Text>Hey there!</Text>
    </Container>
  );
}
