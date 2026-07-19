import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ToastifyContainer } from '@/components/ToastifyContainer';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Workline - v1.0.0',
    template: '%s | Workline',
  },
  description:
    'Sistema para apresentação de produtos e serviços oferecido pela empresa',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang='pt-BR'>
      <body>
        <Container>
          <Header />

          {children}

          <Footer />
        </Container>
        <ToastifyContainer />
      </body>
    </html>
  );
}
