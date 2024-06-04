export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>
        <p className="text-white-1">leftBar</p>
        {children}
        <p className="text-white-1">rightBar</p>
      </main>
    </div>
  );
}
