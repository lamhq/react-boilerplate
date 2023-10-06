import { useRef, useState } from 'react';
import * as Select from '@radix-ui/react-select';
import SearchBox from '../../atoms/SearchBox';
import { tokens } from '../../data';

export type TokenSelectProps = {
  value: string;
  onValueChange: (value: string) => void;
};

export default function TokenSelect({ value, onValueChange }: TokenSelectProps) {
  const [searchText, setSearch] = useState('');
  const lowerSearch = searchText.toLowerCase();
  const inputRef = useRef<HTMLInputElement>(null);

  // filteredTokens: [ [token name, search text], ... ]
  const filteredTokens = Object.entries(tokens).filter(
    ([, search]) => !searchText || search.includes(lowerSearch),
  );
  const handleSearchChange = (text: string) => {
    setSearch(text);
  };
  const handleOpenChange = (open: boolean) => {
    // focus on search box when open dropdown
    if (open) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 10);
    }
  };

  return (
    <Select.Root value={value} onValueChange={onValueChange} onOpenChange={handleOpenChange}>
      <Select.Trigger className="flex items-center gap-2 rounded-2xl border bg-white p-1 text-lg font-bold shadow">
        {value && (
          <img
            src={`https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${value}.svg`}
            alt=""
            aria-hidden
            className="h-6 w-6"
          />
        )}
        <Select.Value aria-label={value} placeholder="Select token">
          {value}
        </Select.Value>
        <Select.Icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          className="rounded-2xl border bg-white p-1 shadow"
          position="popper"
          align="end">
          <SearchBox value={searchText} onChange={handleSearchChange} ref={inputRef} />

          <Select.ScrollUpButton className="text-violet11 flex h-[25px] cursor-default items-center justify-center bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </Select.ScrollUpButton>

          <Select.Viewport className="max-h-[400px]">
            {!filteredTokens.length && <span>No items found.</span>}
            {filteredTokens.map(([tokenName]) => (
              <Select.Item
                value={tokenName}
                key={tokenName}
                className="flex cursor-pointer gap-2
                px-1 py-2
                data-[highlighted]:bg-gray-100
                data-[state=checked]:opacity-50
                data-[highlighted]:outline-none
                ">
                <img
                  src={`https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${tokenName}.svg`}
                  alt=""
                  aria-hidden
                  className="h-6 w-6"
                />

                <Select.ItemText>{tokenName}</Select.ItemText>

                <Select.ItemIndicator className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>

          <Select.ScrollDownButton className="text-violet11 flex h-[25px] cursor-default items-center justify-center bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
