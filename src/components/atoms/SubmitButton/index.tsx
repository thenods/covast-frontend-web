import { memo, ReactElement } from 'react';

export interface Props {
  readonly text: string;
  readonly isDisabled?: boolean;
  onClick?(): void;
}

function SubmitButton({ text, isDisabled = false, onClick }: Props): ReactElement {
  return (
    <button className='w-full h-12 text-lg text-white bg-main rounded' disabled={isDisabled} onClick={onClick}>
      {text}
    </button>
  );
}

export default memo(SubmitButton);
