import { ChangeEventHandler, useCallback, useState } from 'react';

type InputChangeHandler = ChangeEventHandler<HTMLInputElement>;
type ResetHandler = () => void;
export type UseInputs = <Form extends {}>(form: Form) => [Form, InputChangeHandler, ResetHandler];

const useInputs: UseInputs = initialForm => {
  const [form, setForm] = useState(initialForm);

  const handleChange: InputChangeHandler = useCallback(e => {
    const { name, value } = e.target;
    setForm(form => ({ ...form, [name]: value }));
  }, []);

  const handleReset: ResetHandler = useCallback(() => setForm(initialForm), [initialForm]);

  return [form, handleChange, handleReset];
};

export default useInputs;
