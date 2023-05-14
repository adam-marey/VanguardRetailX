'use client';
import { Session } from 'next-auth';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

const Nav = ({ user }: Session) => {
  return (
    <nav className='flex justify-between items-center py-8'>
      <h1>Ecommerce</h1>
      <ul className='flex items-center'>
        {/* is the user is not signed in */}
        {!user &&
          <li className='bg-teal-600 text-white py-2 px-4 rounded-md'>
            <button onClick={() => signIn()}>Sign In</button>
          </li>}
        {/* if the user is signed in */}
        {user &&
          <li>
            <Image
              src={user?.image as string}
              alt={user.name as string}
              width={50}
              height={50}
              className='rounded-full'
            />
          </li>
          }
      </ul>
    </nav>
  );
};

export default Nav;
