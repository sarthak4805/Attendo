import "./globals.css";
import { Providers } from "./providers";
import { Cormorant_Garamond } from 'next/font/google';

export const metadata = {
  title: "Auth System",
  description: "Authentication system with role-based access",
};

const cormorant = Cormorant_Garamond({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cormorant.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

