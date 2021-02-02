import { ChangeEventHandler, memo, ReactElement, useCallback } from 'react';

export interface Props {
  readonly placeholder?: string;
  readonly value?: string;
  onChange?(value: Props['value']): void;
}

function Input({ placeholder, value, onChange }: Props): ReactElement {
  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    e => {
      onChange?.(e.currentTarget.value);
    },
    [onChange],
  );

  return (
    <input
      className={'w-full p-4 px-5 text-base placeholder-gray rounded border shadow border-gray bg-white'}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
}

export default memo(Input);
