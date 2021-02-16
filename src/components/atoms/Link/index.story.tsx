import { Meta, Story } from '@storybook/react/types-6-0';

import Link, { Props } from '.';

export default {
  title: 'Atoms/Link',
  component: Link,
} as Meta;

const Template: Story<Props> = props => <Link {...props} />;

export const Default = Template.bind({});
Default.args = {
  text: '계정이 없으신가요?',
  href: '/signup',
  prefetch: false,
};
