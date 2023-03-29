import './globals.css'

export const metadata = {
  title: 'skysail',
  description: 'beats in the sky 🌌',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
