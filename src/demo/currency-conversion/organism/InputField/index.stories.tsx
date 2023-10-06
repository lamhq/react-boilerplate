import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import InputField from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Currency Conversion/Organisms/InputField',
  component: InputField,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

function InputFieldDemo({
  amount: argAmt,
  currency: argCur,
  onAmountChange,
  onCurrencyChange,
  ...rest
}: Story['args']) {
  const [amount, setAmount] = useState(argAmt);
  const [currency, setCurrency] = useState(argCur);
  const handelAmountChange = (newAmt: number) => {
    if (onAmountChange) {
      onAmountChange(newAmt);
    }
    setAmount(newAmt);
  };
  const handelCurrencyChange = (newCur: string) => {
    if (onCurrencyChange) {
      onCurrencyChange(newCur);
    }
    setCurrency(newCur);
  };
  return (
    <InputField
      amount={amount}
      currency={currency}
      onAmountChange={handelAmountChange}
      onCurrencyChange={handelCurrencyChange}
      {...rest}
    />
  );
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  name: 'InputField',
  args: {
    label: 'Amount',
    id: 'amount',
    amount: 0,
    currency: '',
  },
  render: InputFieldDemo,
};
