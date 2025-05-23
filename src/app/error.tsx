'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='p-10 text-red-600'>
      <h2 className='text-xl font-bold'>Something went wrong!</h2>
      <p>{error.message}</p>
      <button
        onClick={reset}
        className='mt-4 px-4 py-2 bg-red-100 border border-red-300 rounded hover:bg-red-200'
      >
        Try again
      </button>
    </div>
  );
}
