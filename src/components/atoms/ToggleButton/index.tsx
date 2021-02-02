import { memo, MouseEventHandler, ReactElement, useCallback } from 'react';

export interface Props {
  readonly text: string;
  readonly isToggled: boolean;
  onToggle?(isToggled: boolean): void;
}

function ToggleButton({ text, isToggled, onToggle }: Props): ReactElement {
  const handleToggle: MouseEventHandler<HTMLButtonElement> = useCallback(
    e => {
      e.preventDefault();

      onToggle?.(!isToggled);
    },
    [onToggle, isToggled],
  );

  return (
    <button className={`rounded border w-16 h-7 text-xs ${isToggled ? 'text-white bg-main' : 'text-main bg-white'}`} onClick={handleToggle}>
      {text}
    </button>
  );
}

export default memo(ToggleButton);
