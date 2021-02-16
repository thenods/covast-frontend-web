import { memo, ReactElement, useCallback } from 'react';
import Image from 'next/image';

import LoginForm, { Props as LoginFormProps } from '../../molecules/LoginForm';
import Link from '../../atoms/Link';

function Login(): ReactElement {
  const handleSubmit: LoginFormProps['onSubmit'] = useCallback(() => {
    return;
  }, []);

  return (
    <section className='h-screen flex flex-col justify-between items-center p-10'>
      <section className='flex flex-col items-center'>
        <header className='w-40 pt-12 pb-24'>
          <Image src='/assets/logo.svg' alt='logo' width='auto' height='auto' />
        </header>
        <LoginForm onSubmit={handleSubmit} />
      </section>
      <section className='mb-3'>
        <Link href='/signup' text='계정이 없으신가요?' prefetch={false} />
      </section>
    </section>
  );
}

export default memo(Login);
