import { addDecorator } from '@storybook/react';
import { withNextRouter } from 'storybook-addon-next-router';
import * as NextImage from 'next/image';
import useViewport from '../src/hooks/useViewport';

import '../public/css/main.css';

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: props => <img {...props} />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  Story => {
    useViewport();

    return <Story />;
  },
];

addDecorator(
  withNextRouter({
    path: '/', // defaults to `/`
    asPath: '/', // defaults to `/`
    query: {}, // defaults to `{}`
  }),
);
