import { twMerge } from 'tailwind-merge';
import { ChangeEvent } from 'react';
import TokenSelect from '../../molecules/TokenSelect';
import stringToNumber from '../../utils/stringToNumber';

type InputFieldProps = {
  id?: string;
  label?: string;
  amount: number;
  currency: string;
  onAmountChange: (amount: number) => void;
  onCurrencyChange: (currency: string) => unknown;
  className?: string | false;
};

export default function InputField({
  label,
  amount,
  currency,
  id,
  onAmountChange,
  onCurrencyChange,
  className,
}: InputFieldProps) {
  const handleAmtChange = (e: ChangeEvent<HTMLInputElement>) => {
    onAmountChange(stringToNumber(e.target.value));
  };

  return (
    <div className={twMerge('rounded-xl bg-gray-100 p-4', className)}>
      <label htmlFor={id} className="mb-2 block text-sm text-gray-400">
        {label}
      </label>
      <div className="flex items-center gap-2">
        <input
          value={amount || ''}
          onChange={handleAmtChange}
          id={id}
          type="number"
          className="w-1 flex-auto bg-transparent text-4xl outline-none
            [appearance:textfield]
            [&::-webkit-inner-spin-button]:appearance-none
            [&::-webkit-outer-spin-button]:appearance-none"
          placeholder="0"
        />
        <TokenSelect value={currency} onValueChange={onCurrencyChange} />
      </div>
    </div>
  );
}
