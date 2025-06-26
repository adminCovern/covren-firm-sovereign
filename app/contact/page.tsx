'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Shield, Phone, Mail, MapPin, Clock, 
  Zap, Send, CheckCircle, AlertTriangle,
  Globe, Calendar, Users, Rocket
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    budget: '',
    timeline: '',
    message: '',
    sovereignty: ''
  });
  
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setSubmitStatus('success');
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          budget: '',
          timeline: '',
          message: '',
          sovereignty: ''
        });
      }, 3000);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-950/20 via-black to-black" />
          <motion.div 
            className="absolute inset-0"
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: `linear-gradient(45deg, transparent 48%, #065f46 49%, #065f46 51%, transparent 52%)`,
              backgroundSize: '30px 30px',
              opacity: 0.1,
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-[50vh] px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-6 py-3 bg-green-900/20 border border-green-500/30 rounded-full mb-8"
          >
            <Shield className="w-5 h-5 text-green-500 mr-2" />
            <span className="text-green-500 font-mono text-sm uppercase tracking-wider">
              COMMAND CENTER
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black text-center mb-6"
          >
            <span className="text-white">INITIATE</span>
            <span className="block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              FIRST CONTACT
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-400 text-center max-w-2xl"
          >
            Direct line to sovereignty architects. 
            <span className="text-white font-semibold"> No sales teams. Just builders.</span>
          </motion.p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-white mb-8">
                SOVEREIGNTY QUALIFICATION
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-400 mb-2">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-green-500 transition-all"
                      placeholder="John Sovereign"
                    />
                    {focusedField === 'name' && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute -bottom-5 left-0 text-xs text-green-500"
                      >
                        Full name for sovereignty records
                      </motion.div>
                    )}
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-400 mb-2">
                      EMAIL COMMAND *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-green-500 transition-all"
                      placeholder="commander@empire.com"
                    />
                  </div>
                </div>

                {/* Company & Phone Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">
                      EMPIRE NAME
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-green-500 transition-all"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">
                      DIRECT LINE
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-green-500 transition-all"
                      placeholder="+1 (888) 326-4568"
                    />
                  </div>
                </div>

                {/* Budget & Timeline Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">
                      WAR CHEST
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-green-500 transition-all"
                    >
                      <option value="">Select Budget Range</option>
                      <option value="497">$497/mo (SOVREN Proof)</option>
                      <option value="797">$797/mo (SOVREN Proof+)</option>
                      <option value="custom">Custom Enterprise</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">
                      DEPLOYMENT TIMELINE
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-green-500 transition-all"
                    >
                      <option value="">Select Timeline</option>
                      <option value="immediate">IMMEDIATE (This Week)</option>
                      <option value="30days">30 Days</option>
                      <option value="60days">60 Days</option>
                      <option value="90days">90 Days</option>
                      <option value="planning">Strategic Planning</option>
                    </select>
                  </div>
                </div>

                {/* Sovereignty Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">
                    SOVEREIGNTY OBJECTIVE *
                  </label>
                  <select
                    name="sovereignty"
                    required
                    value={formData.sovereignty}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-green-500 transition-all"
                  >
                    <option value="">Select Primary Objective</option>
                    <option value="sovren">Deploy SOVREN AI Platform</option>
                    <option value="custom">Custom AI Development</option>
                    <option value="migration">Migrate from API Dependencies</option>
                    <option value="consulting">Strategic Consulting</option>
                    <option value="infrastructure">Sovereign Infrastructure</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">
                    MISSION BRIEFING
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-green-500 transition-all resize-none"
                    placeholder="Describe your sovereignty objectives and current AI dependencies..."
                  />
                </div>

                {/* Submit Button */}
                <AnimatePresence mode="wait">
                  {submitStatus === 'idle' && (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-black font-black rounded-lg shadow-2xl shadow-green-500/25 flex items-center justify-center"
                    >
                      INITIATE SOVEREIGNTY PROTOCOL
                      <Send className="ml-2 w-5 h-5" />
                    </motion.button>
                  )}

                  {submitStatus === 'submitting' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-full py-4 bg-gray-800 rounded-lg flex items-center justify-center"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Zap className="w-5 h-5 text-green-500" />
                      </motion.div>
                      <span className="ml-2 text-gray-300">ESTABLISHING SECURE CONNECTION...</span>
                    </motion.div>
                  )}

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-full py-4 bg-green-900/20 border border-green-500 rounded-lg flex items-center justify-center"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="ml-2 text-green-500 font-semibold">SOVEREIGNTY PROTOCOL INITIATED</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Security Notice */}
                <p className="text-xs text-gray-500 text-center">
                  🔒 Military-grade encryption protects your sovereignty data
                </p>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Direct Lines */}
              <div>
                <h3 className="text-2xl font-black text-white mb-6">DIRECT COMMAND LINES</h3>
                
                <div className="space-y-4">
                  <motion.a
                    href="mailto:info@covrenfirm.com"
                    whileHover={{ x: 5 }}
                    className="flex items-center p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-green-500/50 transition-all"
                  >
                    <div className="p-3 bg-green-500/20 rounded-lg mr-4">
                      <Mail className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Sovereignty Email</div>
                      <div className="text-lg text-white font-semibold">info@covrenfirm.com</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:+18883264568"
                    whileHover={{ x: 5 }}
                    className="flex items-center p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-green-500/50 transition-all"
                  >
                    <div className="p-3 bg-green-500/20 rounded-lg mr-4">
                      <Phone className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Direct Line</div>
                      <div className="text-lg text-white font-semibold">(888) 326-4568</div>
                    </div>
                  </motion.a>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center p-4 bg-gray-900/50 border border-gray-800 rounded-lg"
                  >
                    <div className="p-3 bg-green-500/20 rounded-lg mr-4">
                      <Globe className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Global Operations</div>
                      <div className="text-lg text-white font-semibold">Worldwide Deployment</div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Response Time */}
              <div className="p-6 bg-gradient-to-b from-gray-900/50 to-transparent border border-gray-800 rounded-xl">
                <h4 className="text-xl font-bold text-white mb-4">RESPONSE PROTOCOL</h4>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Emergency Deployment</span>
                    <span className="text-green-500 font-mono">&lt; 1 hour</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Strategic Consultation</span>
                    <span className="text-green-500 font-mono">&lt; 24 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">General Inquiry</span>
                    <span className="text-green-500 font-mono">&lt; 48 hours</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4">IMMEDIATE ACTIONS</h4>
                
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/sovren-ai">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-green-500/50 transition-all"
                    >
                      <Rocket className="w-6 h-6 text-green-500 mx-auto mb-2" />
                      <span className="text-sm text-gray-300">Explore SOVREN</span>
                    </motion.button>
                  </Link>

                  <Link href="/manifesto">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-green-500/50 transition-all"
                    >
                      <Shield className="w-6 h-6 text-green-500 mx-auto mb-2" />
                      <span className="text-sm text-gray-300">Read Manifesto</span>
                    </motion.button>
                  </Link>

                  <Link href="/proof">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-green-500/50 transition-all"
                    >
                      <Users className="w-6 h-6 text-green-500 mx-auto mb-2" />
                      <span className="text-sm text-gray-300">See Proof</span>
                    </motion.button>
                  </Link>

                  <a href="https://calendly.com/covren-sovereignty" target="_blank" rel="noopener noreferrer">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-green-500/50 transition-all"
                    >
                      <Calendar className="w-6 h-6 text-green-500 mx-auto mb-2" />
                      <span className="text-sm text-gray-300">Book Call</span>
                    </motion.button>
                  </a>
                </div>
              </div>

              {/* Security Badge */}
              <div className="p-6 bg-black/50 border border-green-500/30 rounded-xl text-center">
                <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">SECURE SOVEREIGNTY</h4>
                <p className="text-sm text-gray-400">
                  All communications encrypted with military-grade protocols. 
                  Your sovereignty plans remain classified.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Bar */}
      <section className="py-12 bg-gradient-to-b from-gray-950 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-red-900/20 border border-red-500/30 rounded-2xl text-center"
          >
            <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-black text-white mb-2">EMERGENCY DEPLOYMENT</h3>
            <p className="text-gray-300 mb-4">
              Under API attack? Bleeding cash to Big Tech? Need immediate sovereignty?
            </p>
            <a href="tel:+18883264568">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-red-600 text-white font-bold rounded-lg"
              >
                CALL EMERGENCY LINE: (888) 326-4568
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
