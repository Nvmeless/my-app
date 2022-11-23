import React from 'react';

import Container  from '../../components/atoms/Container/Container'

export default {
  title: 'Atoms/Container',
  component: Container,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Container {...args} />;

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