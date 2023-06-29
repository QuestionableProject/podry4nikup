import './globals.css'

export const metadata = {
  title: 'Podry4nik',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
