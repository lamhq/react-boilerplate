import { ChangeEventHandler, KeyboardEventHandler, PropsWithRef, forwardRef } from 'react';

export type SearchBoxProps = PropsWithRef<{
  value: string;
  onChange: (value: string) => unknown;
}>;

const SearchBox = forwardRef<HTMLInputElement, SearchBoxProps>(({ value, onChange }, ref) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange(e.target.value);
  };
  const handleKeydown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    // stop event propagation if user is typing in the search box
    if (e.key.length === 1 || e.key === 'Backspace') {
      e.stopPropagation();
    }
  };
  return (
    <div className="flex items-center gap-1 rounded-xl border border-gray-300 bg-gray-100 px-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-4 w-4"
        aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      <input
        type="text"
        placeholder="Enter token name"
        className="bg-transparent text-base outline-none"
        aria-label="Search currency by name"
        value={value}
        ref={ref}
        onChange={handleChange}
        onKeyDown={handleKeydown}
      />
    </div>
  );
});

export default SearchBox;
