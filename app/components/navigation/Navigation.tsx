'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, X, ChevronDown, Shield, Zap, Brain, 
  Lock, Activity, AlertTriangle 
} from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'SOVREN AI', href: '/sovren-ai', highlight: true },
    { 
      name: 'CAPABILITIES', 
      href: '#',
      dropdown: [
        { name: 'Full-Stack Development', href: '/capabilities/development' },
        { name: 'AI Consulting', href: '/capabilities/consulting' },
        { name: 'Sovereign Systems', href: '/capabilities/systems' },
        { name: 'Research Lab', href: '/capabilities/research' }
      ]
    },
    { name: 'PROOF', href: '/proof' },
    { name: 'MANIFESTO', href: '/manifesto' },
    { name: 'INITIATE', href: '/contact' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-black/90 backdrop-blur-lg border-b border-gray-800' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center"
              >
                <Shield className="w-6 h-6 text-black" />
              </motion.div>
              <div>
                <div className="text-white font-black text-xl">COVREN</div>
                <div className="text-green-500 text-xs font-mono">SOVEREIGN AI</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div
                      onMouseEnter={() => setShowProductsDropdown(true)}
                      onMouseLeave={() => setShowProductsDropdown(false)}
                    >
                      <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors font-semibold">
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      
                      <AnimatePresence>
                        {showProductsDropdown && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-lg border border-gray-800 rounded-lg shadow-2xl"
                          >
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-900/50 transition-all"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`${
                        item.highlight 
                          ? 'text-green-500 hover:text-green-400' 
                          : 'text-gray-300 hover:text-white'
                      } transition-colors font-semibold ${
                        pathname === item.href ? 'text-white' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* CTA Button */}
              <Link href="/sovereign-qualification">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-black font-bold rounded-lg shadow-lg shadow-green-500/25"
                >
                  <Lock className="w-4 h-4" />
                  <span>ACCESS SOVEREIGNTY</span>
                </motion.button>
              </Link>
            </div>

            {/* Live Indicators */}
            <div className="hidden lg:flex items-center space-x-4 ml-8">
              <div className="flex items-center space-x-2 px-3 py-1 bg-black/50 border border-green-500/30 rounded-full">
                <Activity className="w-3 h-3 text-green-500 animate-pulse" />
                <span className="text-green-500 font-mono text-xs">LIVE</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-1 bg-black/50 border border-red-500/30 rounded-full">
                <AlertTriangle className="w-3 h-3 text-red-500" />
                <span className="text-red-500 font-mono text-xs">3 LEFT</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div className="space-y-2">
                        <div className="text-gray-400 font-semibold">{item.name}</div>
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className="block pl-4 py-2 text-gray-300 hover:text-white"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block py-2 ${
                          item.highlight 
                            ? 'text-green-500' 
                            : 'text-gray-300 hover:text-white'
                        } font-semibold`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                <Link href="/sovereign-qualification" onClick={() => setIsOpen(false)}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-black font-bold rounded-lg"
                  >
                    ACCESS SOVEREIGNTY
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer for fixed navigation */}
      <div className="h-20" />
    </>
  );
}


