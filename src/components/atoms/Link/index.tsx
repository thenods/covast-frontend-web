import { memo, ReactElement } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

export interface Props extends NextLinkProps {
  readonly text: string;
  readonly prefetch: NonNullable<NextLinkProps['prefetch']>; // not optional, type error
}

function Link({ text, ...otherProps }: Props): ReactElement {
  return (
    <NextLink {...otherProps} passHref>
      <a className='text-xs text-main'>{text}</a>
    </NextLink>
  );
}

export default memo(Link);
