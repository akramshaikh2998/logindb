'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';
import Table from '../login/Table';
import Link from 'next/link';

const Loginpage = () => {
  const session = useSession();

  console.log(session);
  if (session.status === 'loading') {
    return <p> Loading...</p>;
  }

  if (session.status === 'authenticated') {
    return (
      <>
        <button
          className="h-12 px-6 w-48 my-[2%] mx-[2%] bg-indigo-600 text-white float-right font-bold border border-black inline-block rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-white"
          onClick={() => signOut('google')}
        >
          Logout
        </button>
        <Table />
      </>
    );
  }
  return (
    <Link href="/loginpage">
      <button onClick={Googlelogin}> Login with Google</button>
    </Link>
  );
};
export default Loginpage;
