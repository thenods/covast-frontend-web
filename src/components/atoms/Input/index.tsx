import { ChangeEventHandler, memo, ReactElement } from 'react';

export interface Props {
  readonly type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
  readonly placeholder?: string;
  readonly value?: string;
  readonly name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

function Input({ type, placeholder, value, name, onChange }: Props): ReactElement {
  return (
    <input
      className={'w-full p-4 px-5 text-black text-base placeholder-gray rounded border shadow border-gray bg-white'}
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
    />
  );
}

export default memo(Input);
