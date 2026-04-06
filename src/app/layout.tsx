
import type { Metadata } from 'next';
import { Asap } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/layout/CookieConsent';
import Chatbot from '@/components/chat/Chatbot';
import { ReduxProvider } from '@/components/providers/ReduxProvider';

const asap = Asap({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-asap',
});

export const metadata: Metadata = {
  title: 'SBN Healthcare Solution | Medical Insurance Verification Service in New York',
  description: 'SBN offers professional medical insurance verification and billing services in New York. Reduce claim denials, improve cash flow, and ensure HIPAA-compliant accuracy.',
  icons: {
    icon: '/Logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={asap.variable}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
