import { Meta, Story } from '@storybook/react/types-6-0';

import LoginForm, { Props } from '.';

export default {
  title: 'Molecules/LoginForm',
  component: LoginForm,
} as Meta;

const Template: Story<Props> = props => <LoginForm {...props} />;

export const Default = Template.bind({});
Default.args = {};
