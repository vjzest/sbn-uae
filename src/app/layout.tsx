
import type { Metadata } from 'next';
import Script from 'next/script';
import { Asap } from 'next/font/google';
import './globals.css';
import { ReduxProvider } from '@/components/providers/ReduxProvider';

const asap = Asap({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-asap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sbnhealthcaresolution.com'),
  title: 'SBN Healthcare Solution | Medical Insurance Verification Service in New York',
  description: 'SBN offers professional medical insurance verification and billing services in New York. Reduce claim denials, improve cash flow, and ensure HIPAA-compliant accuracy.',
  icons: {
    icon: '/Logo.webp',
  },
  verification: {
    google: 'koWn4TcdBUJq__U9GvO8JbLXvDDlBDBL2iF0ZJsTp58',
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RZPTMXGFDF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RZPTMXGFDF');
          `}
        </Script>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
