import Link from 'next/link';

export function Footer() {
  return (
    <footer className='w-full border-t border-gray-200 py-4 text-center text-sm text-gray-500'>
      {/* &copy; {new Date().getFullYear()} <Link href='/'>Workline</Link>. Todos os */}
      &copy; 2026 <Link href='/'>Workline</Link>. Todos os direitos reservados.
    </footer>
  );
}
