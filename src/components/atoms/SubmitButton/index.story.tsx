import { Meta, Story } from '@storybook/react/types-6-0';

import SubmitButton, { Props } from '.';

export default {
  title: 'Atoms/SubmitButton',
  component: SubmitButton,
} as Meta;

const Template: Story<Props> = props => <SubmitButton {...props} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Text',
};
