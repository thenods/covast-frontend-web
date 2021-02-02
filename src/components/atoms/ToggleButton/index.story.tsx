import { Meta, Story } from '@storybook/react/types-6-0';

import ToggleButton, { Props } from '.';

export default {
  title: 'Atoms/ToggleButton',
  component: ToggleButton,
} as Meta;

const Template: Story<Props> = props => <ToggleButton {...props} />;

export const Default = Template.bind({});
Default.args = {
  text: 'text',
  isToggled: true,
};
