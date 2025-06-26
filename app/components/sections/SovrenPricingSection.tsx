'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Check, Brain, Zap, ChevronRight, 
  Users, Clock, Shield, AlertTriangle
} from 'lucide-react';

export default function SovrenPricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const calculatePrice = (monthlyPrice: number) => {
    if (billingPeriod === 'yearly') {
      // 10% discount for yearly billing
      return Math.floor(monthlyPrice * 12 * 0.9);
    }
    return monthlyPrice;
  };

  const pricingTiers = [
    {
      name: "SOVREN Proof",
      price: 497,
      yearlyPrice: 5368, // $497 * 12 * 0.9
      tagline: "Prove sovereignty works for your organization",
      description: "Dedicated GH200 compute allocation",
      features: [
        { text: "Full SOVREN AI platform access", included: true },
        { text: "Shared GH200 infrastructure (guaranteed resources)", included: true },
        { text: "Unlimited API calls, no rate limits", included: true },
        { text: "Community Discord support", included: true },
        { text: "Weekly group office hours", included: true },
        { text: "Full documentation & tutorials", included: true },
        { text: "React-based SDKs & examples", included: true },
        { text: "Direct founder access", included: false },
        { text: "Priority support access", included: false },
        { text: "Custom onboarding session", included: false },
        { text: "Monthly 1-on-1 strategy calls", included: false }
      ],
      cta: "APPLY FOR PROOF ACCESS",
      ctaLink: "/apply/sovren-proof",
      popular: false,
      availability: null
    },
    {
      name: "SOVREN Proof+",
      price: 797,
      yearlyPrice: 8607, // $797 * 12 * 0.9
      tagline: "Direct access to the sovereign architects",
      description: "Only 7 seats remaining",
      features: [
        { text: "Everything in SOVREN Proof", included: true },
        { text: "Priority support access", included: true },
        { text: "Direct founder access", included: true },
        { text: "Custom onboarding session", included: true },
        { text: "Monthly 1-on-1 strategy calls", included: true },
        { text: "Beta feature early access", included: true },
        { text: "Custom model training consultation", included: true },
        { text: "Architecture review & optimization", included: true }
      ],
      cta: "APPLY FOR PRIORITY ACCESS",
      ctaLink: "/apply/sovren-proof-plus",
      popular: true,
      availability: 7,
      badge: "FOUNDER'S CHOICE"
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            SOVREN AI Access Tiers
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Choose your sovereignty level. Scale as you dominate.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-lg ${billingPeriod === 'monthly' ? 'text-white' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-16 h-8 bg-gray-800 rounded-full p-1 transition-colors"
            >
              <motion.div
                className="w-6 h-6 bg-green-500 rounded-full"
                animate={{ x: billingPeriod === 'monthly' ? 0 : 32 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </button>
            <span className={`text-lg ${billingPeriod === 'yearly' ? 'text-white' : 'text-gray-500'}`}>
              Yearly
              <span className="text-green-500 text-sm ml-2">(Save 10%)</span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Popular Badge */}
              {tier.badge && (
                <div className="absolute -top-4 right-8 z-10">
                  <div className="flex items-center gap-2 px-4 py-2 bg-red-600 rounded-full">
                    <Zap className="w-4 h-4 text-white" />
                    <span className="text-white font-bold text-sm">{tier.badge}</span>
                  </div>
                </div>
              )}

              <div className={`h-full p-8 rounded-2xl ${
                tier.popular 
                  ? 'bg-gradient-to-b from-red-950/20 to-gray-950/50 border-2 border-red-600' 
                  : 'bg-gray-950/50 border border-gray-800'
              }`}>
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-400 mb-4">{tier.tagline}</p>
                  
                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-black text-white">
                      ${calculatePrice(tier.price)}
                    </span>
                    <span className="text-gray-400">
                      /{billingPeriod === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  
                  {billingPeriod === 'yearly' && (
                    <p className="text-sm text-gray-500">
                      ${tier.price}/month billed annually
                    </p>
                  )}

                  <p className="text-sm text-gray-500 mt-2">{tier.description}</p>
                  
                  {/* Availability Warning */}
                  {tier.availability && (
                    <div className="mt-4 p-3 bg-red-900/20 border border-red-600/30 rounded-lg">
                      <p className="text-red-500 font-mono text-sm flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" />
                        Only {tier.availability} seats remaining
                      </p>
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`mt-0.5 ${feature.included ? 'text-green-500' : 'text-gray-600'}`}>
                        <Check className="w-5 h-5" />
                      </div>
                      <span className={feature.included ? 'text-gray-300' : 'text-gray-600'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link href={tier.ctaLink}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 font-bold rounded-lg flex items-center justify-center gap-2 ${
                      tier.popular
                        ? 'bg-red-600 hover:bg-red-700 text-white'
                        : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'
                    }`}
                  >
                    {tier.cta}
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 p-6 bg-gray-950/50 border border-gray-800 rounded-2xl">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-500" />
              <span className="text-gray-400">Secure Infrastructure</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-green-500" />
              <span className="text-gray-400">24/7 Availability</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-green-500" />
              <span className="text-gray-400">Founder Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
