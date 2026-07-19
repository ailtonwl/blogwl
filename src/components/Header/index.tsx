import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header>
      <div
        className={clsx(
          'flex items-center justify-between',
          'py-6',
          'bg-white',
          'border-b border-gray-200',
          'shadow-sm',
          'fixed top-0 left-0 right-0 z-50',
          'h-16',
        )}
      >
        <div className='flex max-w-screen-lg mx-auto px-8 w-full items-center justify-between'>
          <Link href='/'>
            <Image
              src='/logowl.png'
              width={200}
              height={41}
              alt='Logomarca'
              loading='eager'
            />
          </Link>
          <Link
            href='https://www.atsinformatica.com.br/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src='/logo-ats-vermelha.png'
              width={107}
              height={41}
              alt='/logo-ats-vermelha.png'
              loading='eager'
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
