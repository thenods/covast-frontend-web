import { Meta, Story } from '@storybook/react/types-6-0';

import Input, { Props } from '.';

export default {
  title: 'Atoms/Input',
  component: Input,
} as Meta;

const Template: Story<Props> = props => <Input {...props} />;

export const Default = Template.bind({});
Default.args = {
  value: 'value',
  placeholder: 'placeholder',
};
