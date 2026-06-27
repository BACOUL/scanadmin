import './globals.css';

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
