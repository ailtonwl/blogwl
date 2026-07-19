'use client';

import clsx from 'clsx';

type ErrorMessageProps = {
  pageTitle?: string;
  contentTitle?: string;
  content?: React.ReactNode;
};

export default function ErrorMessage({
  pageTitle = '',
  contentTitle,
  content,
}: ErrorMessageProps) {
  return (
    <>
      {pageTitle && <title>{pageTitle}</title>}
      <div
        className={clsx(
          'min-h-[320px]',
          'flex',
          'flex-col',
          'items-center',
          'justify-center',
          'text-center',
          'bg-gray-800',
          'text-slate-100',
          'mb-16',
          'p-8',
          'rounded-xl',
        )}
      >
        <div className='p-4 rounded mb-6'>
          <h1 className='text-4xl font-bold mb-4'>{contentTitle}</h1>
          <div className='text-lg text-gray-300'>{content}</div>
        </div>
      </div>
    </>
  );
}
