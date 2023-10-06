import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import TokenSelect from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Currency Conversion/Molecules/TokenSelect',
  component: TokenSelect,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  argTypes: { onValueChange: { action: 'value changed' } },
} satisfies Meta<typeof TokenSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

function TokenSelectDemo({ value: argValue, onValueChange }: Story['args']) {
  const [value, setValue] = useState(argValue);
  const handelValueChange = (newVal: string) => {
    if (onValueChange) {
      onValueChange(newVal);
    }
    setValue(newVal);
  };
  return <TokenSelect value={value} onValueChange={handelValueChange} />;
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  name: 'TokenSelect',
  render: TokenSelectDemo,
  args: {
    value: '',
  },
};
