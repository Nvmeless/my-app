import React from 'react';

import { Card } from '../../components/atoms/Card/Card';

export default {
  title: 'Atoms/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  shadow: 1,

};

export const Rounded = Template.bind({});
Rounded.args = {
  shadow: 1,
  rounded: true,

};

export const Loading = Template.bind({});
Loading.args = {
  shadow: 1,
};