import './globals.css';

export const metadata = {
  title: 'Ewoud Van Vooren',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
