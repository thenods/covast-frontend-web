import { Meta, Story } from '@storybook/react/types-6-0';

import Login from '.';

export default {
  title: 'Organisms/Login',
  component: Login,
} as Meta;

const Template: Story = () => <Login />;

export const Default = Template.bind({});
Default.args = {};
