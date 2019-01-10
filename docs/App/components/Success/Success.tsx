import * as React from 'react';
import styled from '@emotion/styled';
import Clipboard from 'clipboard';
import {emojiUrl} from 'docs/utilities';

type Props = {
  emoji: string;
};

enum ButtonState {
  Copy,
  Copied,
}

const Container = styled.div({
  display: 'grid',
  gridTemplateRows: '1fr',
  gridRowGap: 20,
  justifyItems: 'center',
  marginTop: 10,
});

const CodeContainer = styled.div({
  background: '#eaeaea',
  borderRadius: 8,
  maxWidth: '100%',
  overflow: 'scroll',
  padding: '8px 12px',
});

const Code = styled.code({
  whiteSpace: 'nowrap',
});

const PreviewImage = styled.img({
  width: 50,
});

const Button = styled.button({
  color: 'dodgerblue',

  ':hover': {
    textDecoration: 'underline',
  },
});

export function Success({emoji}: Props) {
  const [buttonState, setButtonState] = React.useState<ButtonState>(
    ButtonState.Copy,
  );
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(
    () => {
      if (buttonRef.current == null) {
        return;
      }

      const clipboard = new Clipboard(buttonRef.current, {
        text: () => emojiUrl(emoji),
      });

      return () => {
        clipboard.destroy();
      };
    },
    [emoji, buttonRef],
  );

  function handleButtonClick() {
    setButtonState(ButtonState.Copied);

    setTimeout(() => {
      setButtonState(ButtonState.Copy);
    }, 2000);
  }

  return (
    <Container>
      <PreviewImage src={emojiUrl(emoji)} />
      <h2>Nice!</h2>
      <CodeContainer>
        <Code>{emojiUrl(emoji)}</Code>
      </CodeContainer>
      <Button type="button" ref={buttonRef} onClick={handleButtonClick}>
        {buttonState === ButtonState.Copy
          ? 'Copy URL'
          : buttonState === ButtonState.Copied
          ? 'Copied!'
          : null}
      </Button>
    </Container>
  );
}
