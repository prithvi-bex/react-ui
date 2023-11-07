import { ComponentStory, ComponentMeta } from '@storybook/react';
import BlueRoundButton from './BlueRoundButton';

export default {
  title: 'Blue Round Button',
  component: BlueRoundButton,
} as ComponentMeta<typeof BlueRoundButton>;

const Template: ComponentStory<typeof BlueRoundButton> = (args) => (
  <BlueRoundButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  lable: 'Join Bex',
};
