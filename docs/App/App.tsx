import * as React from 'react';
import styled from '@emotion/styled';
import {canonicalEmojiName, emojiUrl} from 'docs/utilities';
import {
  FooterLink,
  Heading,
  InlineImage,
  NoResult,
  Success,
} from './components';

const Container = styled.div({
  padding: '30px 15px',
});

const Subtext = styled.p({
  margin: '30px 0',
});

const Label = styled.label({
  display: 'block',
  fontWeight: 600,
  marginBottom: 7,
});

const Input = styled.input({
  border: '1px solid #bbb',
  borderRadius: 6,
  padding: 8,
  textAlign: 'center',
  width: '100%',
});

const Footer = styled.div({
  color: '#ddd',
  padding: '20px 0 0',
});

export function App() {
  const [emojiInput, setEmojiInput] = React.useState<string>('sparkles');

  const canonicalName = canonicalEmojiName(emojiInput);

  return (
    <Container>
      <Heading />

      <Subtext>
        <InlineImage src={emojiUrl('truck')} />{' '}
        <strong>emoji.veryfunparty.com</strong> is a service that returns a
        high-res, predictable emoji image for a given URL. Try it out!
      </Subtext>

      <Label htmlFor="playground">Enter a keyword:</Label>
      <Input
        value={emojiInput}
        id="playground"
        onChange={event => {
          const {value} = event.currentTarget;
          setEmojiInput(value.toLowerCase());
        }}
      />

      {canonicalName == null ? (
        <NoResult currentInput={emojiInput} />
      ) : (
        <Success emoji={emojiInput} />
      )}

      <Footer>
        <FooterLink href="https://github.com/asmockler/emoji-as-a-service">
          GitHub
        </FooterLink>{' '}
        •{' '}
        <FooterLink href="https://emoji.muan.co">Browse emoji names</FooterLink>
      </Footer>
    </Container>
  );
}
