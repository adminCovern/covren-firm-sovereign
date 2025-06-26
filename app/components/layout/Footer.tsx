'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Shield, Twitter, Linkedin, Github, Mail,
  Phone, MapPin, ArrowUpRight, Activity
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    sovereignty: [
      { name: 'SOVREN AI Platform', href: '/sovren-ai' },
      { name: 'Sovereignty Manifesto', href: '/manifesto' },
      { name: 'Success Stories', href: '/success-stories' },
      { name: 'Begin Your Journey', href: '/sovereign-qualification' }
    ],
    capabilities: [
      { name: 'Autonomous AI Systems', href: '/capabilities/ai-systems' },
      { name: 'Strategic Consulting', href: '/capabilities/consulting' },
      { name: 'Custom Solutions', href: '/capabilities/custom' },
      { name: 'Innovation Lab', href: '/capabilities/innovation' }
    ],
    intelligence: [
      { name: 'Documentation', href: '/docs' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Research Papers', href: '/research' },
      { name: 'Developer Portal', href: '/developers' }
    ],
    company: [
      { name: 'About Covren', href: '/about' },
      { name: 'Leadership', href: '/leadership' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact Command', href: '/contact' }
    ]
  };

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/covrenfirm', name: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/company/covrenfirm', name: 'LinkedIn' },
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/covrenfirm', name: 'GitHub' }
  ];

  return (
    <footer className="relative bg-black border-t border-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 48%, #065f46 49%, #065f46 51%, transparent 52%)`,
            backgroundSize: '30px 30px',
            opacity: 0.02,
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-3 mb-6">
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
              
              <p className="text-gray-400 text-sm mb-6">
                Transform your business with AI that learns, adapts, and acts autonomously. 
                Own your intelligence. Command your future.
              </p>

              {/* Live Status */}
              <div className="flex items-center space-x-2 mb-6">
                <Activity className="w-4 h-4 text-green-500 animate-pulse" />
                <span className="text-green-500 font-mono text-xs">AI SYSTEMS ACTIVE</span>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-900 rounded-lg text-gray-400 hover:text-green-500 hover:bg-gray-800 transition-all"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Sovereignty Column */}
              <div>
                <h3 className="text-green-500 font-bold text-sm uppercase tracking-wider mb-4">
                  SOVEREIGNTY
                </h3>
                <ul className="space-y-3">
                  {footerLinks.sovereignty.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                      >
                        {link.name}
                        <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Capabilities Column */}
              <div>
                <h3 className="text-green-500 font-bold text-sm uppercase tracking-wider mb-4">
                  CAPABILITIES
                </h3>
                <ul className="space-y-3">
                  {footerLinks.capabilities.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                      >
                        {link.name}
                        <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Intelligence Column */}
              <div>
                <h3 className="text-green-500 font-bold text-sm uppercase tracking-wider mb-4">
                  INTELLIGENCE
                </h3>
                <ul className="space-y-3">
                  {footerLinks.intelligence.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                      >
                        {link.name}
                        <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Column */}
              <div>
                <h3 className="text-green-500 font-bold text-sm uppercase tracking-wider mb-4">
                  COMMAND
                </h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                      >
                        {link.name}
                        <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="border-t border-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <a
                  href="mailto:info@covrenfirm.com"
                  className="flex items-center space-x-2 text-gray-400 hover:text-green-500 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>info@covrenfirm.com</span>
                </a>
                <a
                  href="tel:+18883264568"
                  className="flex items-center space-x-2 text-gray-400 hover:text-green-500 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>(888) 326-4568</span>
                </a>
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>Global Operations</span>
                </div>
              </div>
              
              <Link href="/sovereign-qualification">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-black font-bold rounded-full text-sm uppercase tracking-wider shadow-lg shadow-green-500/25"
                >
                  START YOUR JOURNEY
                </motion.button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
              <div className="flex flex-wrap items-center gap-4">
                <span>© {currentYear} Covren Firm. All Rights Reserved.</span>
                <span className="hidden md:inline">•</span>
                <Link href="/privacy" className="hover:text-gray-300 transition-colors">
                  Privacy Policy
                </Link>
                <span className="hidden md:inline">•</span>
                <Link href="/terms" className="hover:text-gray-300 transition-colors">
                  Terms of Service
                </Link>
              </div>
              
              <div className="font-mono text-xs">
                <span className="text-gray-600">Powered by</span> <span className="text-green-500">SOVREN AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


