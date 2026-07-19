'use client';

import ErrorMessage from '@/components/ErrorMessage';
import { useEffect } from 'react';

export default function RootErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <ErrorMessage
      pageTitle='Erro Interno'
      contentTitle='501 - Erro Interno no servidor 😕'
      content={
        <button
          onClick={() => reset()}
          className='mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'
        >
          Tentar novamente
        </button>
      }
    />
  );
}
