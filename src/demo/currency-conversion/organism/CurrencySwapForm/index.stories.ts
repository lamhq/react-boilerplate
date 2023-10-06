import type { Meta, StoryObj } from '@storybook/react';
import CurrencySwapForm from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Currency Conversion/Organisms/CurrencySwapForm',
  component: CurrencySwapForm,
} satisfies Meta<typeof CurrencySwapForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  name: 'CurrencySwapForm',
};
