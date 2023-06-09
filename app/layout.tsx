import './globals.css';
export const metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        <main className="h-screen grid grid-cols-1 place-items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
