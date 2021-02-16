import { FormEventHandler, memo, ReactElement, useCallback } from 'react';
import useInputs from '../../../hooks/useInputs';
import Input from '../../atoms/Input';
import SubmitButton from '../../atoms/SubmitButton';

interface Form {
  id: string;
  password: string;
}

const INITIAL_FORM_STATE: Form = {
  id: '',
  password: '',
};

export interface Props {
  readonly isPending?: boolean;
  onSubmit(): void;
}

function LoginForm({ isPending = false, onSubmit }: Props): ReactElement {
  const [form, onChange] = useInputs(INITIAL_FORM_STATE);

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    e => {
      e.preventDefault();

      onSubmit?.();
    },
    [onSubmit],
  );

  return (
    <form className='space-y-14' onSubmit={handleSubmit}>
      <div className='space-y-6'>
        <Input placeholder='아이디' name='id' value={form.id} onChange={onChange} />
        <Input type='password' placeholder='비밀번호' name='password' value={form.password} onChange={onChange} />
      </div>
      <SubmitButton text='로그인' isDisabled={isPending} />
    </form>
  );
}

export default memo(LoginForm);
