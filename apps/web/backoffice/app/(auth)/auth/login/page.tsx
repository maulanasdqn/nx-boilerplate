import type { NextPage } from 'next';
import type { ReactElement } from 'react';
import { Button } from '@psu/web-component-atoms';

const AuthLoginPage: NextPage = (): ReactElement => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-screen">
      <div className="flex gap-x-4">
        <Button variant={'primary'} variantType={'solid'} size={'sm'}>
          Login with Google
        </Button>
        <Button variant={'primary'} variantType={'solid'} size={'sm'}>
          Login with Github
        </Button>
      </div>
    </section>
  );
};

export default AuthLoginPage;
