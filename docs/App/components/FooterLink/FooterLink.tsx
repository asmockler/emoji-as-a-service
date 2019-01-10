import * as React from 'react';
import styled from '@emotion/styled';

type Props = {
  children: React.ReactChild;
  href: string;
};

const Link = styled.a({
  fontSize: 12,
});

export function FooterLink({children, href}: Props) {
  return (
    <Link href={href} target="_blank">
      {children}
    </Link>
  );
}
