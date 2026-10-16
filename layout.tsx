import type { Metadata, Viewport } from 'next';
import './globals.css';
import './live.css';
import './devotion.css';
export const metadata: Metadata = { title: 'Maa Kamakhya Jewellery | Hojai, Assam', description: 'Discover timeless jewellery, festive favourites and personal service at Maa Kamakhya Jewellery, NSCB Road, Lalpatti, Hojai, Assam.', robots: { index: false, follow: false }, icons: { icon: '/favicon.svg' } };
export const viewport: Viewport = { themeColor: '#11100e' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
