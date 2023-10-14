import Navbar from '@/components/Navbar/Navbar'
import './globals.css'

export const metadata = {
  title: 'Portfolio Serch',
  description: '¡Bienvenido a mi portafolio, un espacio digital donde puedes explorar mi trabajo, proyectos y habilidades! Como Full Stack Developer, he dedicado mi tiempo y pasión a crear soluciones innovadoras y experiencias de usuario excepcionales. Descubre cómo mis habilidades y creatividad se unen para transformar ideas en resultados tangibles. Explora mi portafolio para obtener una visión más profunda de mi viaje en el mundo del desarrollo.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        
        {children}
      </body>
    </html>
  )
}
