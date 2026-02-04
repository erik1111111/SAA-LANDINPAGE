'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"
import { LayoutDashboard, Users, CreditCard, Calendar, Key, ShoppingCart, BarChart, Bell } from 'lucide-react'
import { Button } from "./ui/button"

export function MainNav() {
  const pathname = usePathname()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const navItems = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: LayoutDashboard,
      description: 'Métricas de ventas, membresías activas, asistencia diaria, ingresos/pérdidas'
    },
    {
      title: 'Clientes',
      href: '/clientes',
      icon: Users,
      description: 'Registro, historial, renovaciones, salud, objetivos fitness'
    },
    {
      title: 'Pagos',
      href: '/pagos',
      icon: CreditCard,
      description: 'Integración con tarjetas, transferencias, QR, wallets, renovaciones automáticas'
    },
    {
      title: 'Clases',
      href: '/clases',
      icon: Calendar,
      description: 'Calendario, límite de cupos, lista de espera, cancelaciones'
    },
    {
      title: 'Acceso',
      href: '/acceso',
      icon: Key,
      description: 'Control de acceso con códigos QR o huella'
    },
    {
      title: 'Tienda',
      href: '/tienda',
      icon: ShoppingCart,
      description: 'Manejo de inventario de suplementos, ropa, accesorios'
    },
    {
      title: 'Marketing',
      href: '/marketing',
      icon: Bell,
      description: 'Notificaciones push, email, WhatsApp automatizados'
    },
    {
      title: 'Reportes',
      href: '/reportes',
      icon: BarChart,
      description: 'Ingresos por mes, retención de clientes, clases más rentables'
    }
  ]

  return (
    <div className="w-full">
      <div className="flex items-center justify-between h-full">
        {/* Logo on the left */}
        <div className="flex-shrink-0">
          <Link href="/dashboard" className="flex items-center space-x-3">
            <div className="h-12 w-12 rounded-lg bg-white border border-gray-100 shadow-sm flex items-center justify-center overflow-hidden">
              <img 
                src="/images/trainer7.jpg" 
                alt="Trainer7 Gym Logo" 
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-xl font-bold text-gray-900 hidden md:block">Trainer7</span>
          </Link>
        </div>
        
        {/* Navigation links on the right */}
        <nav className="hidden md:flex items-center space-x-1 bg-white px-4 py-2 rounded-lg border border-gray-100 shadow-sm">
          {navItems.map((item) => {
            const isActive = pathname?.startsWith(item.href)
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative flex items-center px-4 py-2.5 text-sm font-medium transition-all rounded-md",
                  isClient && isActive 
                    ? "bg-blue-50 text-blue-600" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
                title={item.description}
              >
                <Icon className={cn("h-5 w-5 mr-2 flex-shrink-0", isClient && isActive ? "text-blue-500" : "text-gray-400 group-hover:text-gray-600")} />
                <span className="whitespace-nowrap">{item.title}</span>
                {isClient && isActive && (
                  <span className="absolute -bottom-2 left-1/2 w-1/2 h-0.5 bg-blue-500 -translate-x-1/2 rounded-full" />
                )}
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
