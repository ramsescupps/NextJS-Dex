import Head from 'next/head';
import '@/styles/global.css';

import { ConnectProvider } from '@/contexts/ConnectContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Header from "@/components/layout/header";
import { DefaultCSS } from '@/utils/defaultCSS';
import { NotificationProvider } from '@/contexts/NotificationContext';

export const metadata = {
  title: 'DEX',
  description: '...',
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <ConnectProvider>
          <ThemeProvider>
            <NotificationProvider>
              <div className={DefaultCSS.body}>
                <Header />
                {children}
              </div>
            </NotificationProvider>
          </ThemeProvider>
        </ConnectProvider>
      </body>
    </html>
  );
}