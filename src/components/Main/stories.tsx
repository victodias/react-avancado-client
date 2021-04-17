import { Story } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  argTypes: {
    color: { control: 'color' }
  }
  // args: {
  //   title: 'Title default',
  //   description: 'Description default'
  // }
}

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'React Avançadoo',
  description: 'Typescript, ReactJS, NextJS, e Styled Components',
  color: '#FFF'
}

export const Default: Story = (args) => <Main {...args} />
Default.args = {
  title: 'Default title',
  description: 'Default description',
  color: '#FFF'
}
