'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { 
  ChevronRight, ChevronLeft, Shield, Brain, 
  Zap, Target, Users, Clock, AlertTriangle,
  Check, Loader2
} from 'lucide-react';

interface FormData {
  // Step 1: Basic Info
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
  website: string;
  
  // Step 2: Company Profile
  companySize: string;
  industry: string;
  aiMaturity: string;
  currentSpend: string;
  
  // Step 3: Technical Assessment
  currentStack: string;
  dataSensitivity: string;
  scalingNeeds: string;
  timeline: string;
  
  // Step 4: Commitment
  whySovereignty: string;
  biggestChallenge: string;
  successMetrics: string;
  commitmentLevel: string;
}

export default function SovrenApplicationPage({ params }: { params: { tier: string } }) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    website: '',
    companySize: '',
    industry: '',
    aiMaturity: '',
    currentSpend: '',
    currentStack: '',
    dataSensitivity: '',
    scalingNeeds: '',
    timeline: '',
    whySovereignty: '',
    biggestChallenge: '',
    successMetrics: '',
    commitmentLevel: ''
  });

  const tierName = params.tier === 'sovren-proof-plus' ? 'SOVREN Proof+' : 'SOVREN Proof';

  const steps = [
    {
      title: "Let's Start With The Basics",
      subtitle: "Tell us who's ready to command sovereign AI"
    },
    {
      title: "Company Intelligence Profile",
      subtitle: "Help us understand your organization's AI readiness"
    },
    {
      title: "Technical Sovereignty Assessment",
      subtitle: "Let's understand your infrastructure needs"
    },
    {
      title: "The Sovereignty Commitment",
      subtitle: "Final questions to ensure mutual success"
    }
  ];

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return formData.firstName && formData.lastName && formData.email && formData.company && formData.role;
      case 1:
        return formData.companySize && formData.industry && formData.aiMaturity && formData.currentSpend;
      case 2:
        return formData.currentStack && formData.dataSensitivity && formData.scalingNeeds && formData.timeline;
      case 3:
        return formData.whySovereignty && formData.biggestChallenge && formData.successMetrics && formData.commitmentLevel;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Calculate match percentage based on responses
    let score = 35; // Base score
    
    // Scoring logic
    if (formData.currentSpend === '$5000+') score += 20;
    if (formData.timeline === 'Immediate') score += 20;
    if (formData.commitmentLevel === 'High Commitment') score += 25;
    if (formData.aiMaturity === 'Advanced') score += 15;
    
    // Store result and redirect
    sessionStorage.setItem('sovrenScore', score.toString());
    sessionStorage.setItem('sovrenTier', tierName);
    router.push('/apply/results');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm text-gray-400">{tierName} Application</h3>
            <span className="text-sm text-gray-400">Step {currentStep + 1} of {steps.length}</span>
          </div>
          <div className="w-full h-1 bg-gray-900 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-green-500"
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Form Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-950/50 border border-gray-900 rounded-2xl p-8"
          >
            {/* Step Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">{steps[currentStep].title}</h2>
              <p className="text-gray-400">{steps[currentStep].subtitle}</p>
            </div>

            {/* Step Content */}
            {currentStep === 0 && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => updateFormData('firstName', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-green-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => updateFormData('lastName', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-green-500"
                      placeholder="Sovereign"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-green-500"
                    placeholder="your@company.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => updateFormData('company', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-green-500"
                    placeholder="Acme Corp"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Your Role *
                  </label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => updateFormData('role', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-green-500"
                    placeholder="Founder / CTO / Head of AI"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Company Website
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => updateFormData('website', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-green-500"
                    placeholder="https://company.com"
                  />
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-3">
                    Company Size *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['1-10 employees', '11-50 employees', '51-200 employees', '201-1000 employees', '1000+ employees'].map(size => (
                      <button
                        key={size}
                        onClick={() => updateFormData('companySize', size)}
                        className={`p-3 rounded-lg border transition-all ${
                          formData.companySize === size
                            ? 'bg-green-500/20 border-green-500 text-white'
                            : 'bg-gray-900 border-gray-800 text-gray-400 hover:border-gray-700'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Industry *
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => updateFormData('industry', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-green-500"
                  >
                    <option value="">Select your industry</option>
                    <option value="Technology">Technology</option>
                    <option value="Finance">Finance</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Retail">Retail</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-3">
                    AI Maturity Level *
                  </label>
                  <div className="space-y-3">
                    {[
                      { value: 'Exploring', label: 'Exploring', desc: 'Just starting our AI journey' },
                      { value: 'Beginner', label: 'Beginner', desc: 'Using basic AI tools and APIs' },
                      { value: 'Intermediate', label: 'Intermediate', desc: 'Multiple AI implementations in production' },
                      { value: 'Advanced', label: 'Advanced', desc: 'AI is core to our operations' }
                    ].map(level => (
                      <button
                        key={level.value}
                        onClick={() => updateFormData('aiMaturity', level.value)}
                        className={`w-full p-4 rounded-lg border text-left transition-all ${
                          formData.aiMaturity === level.value
                            ? 'bg-green-500/20 border-green-500'
                            : 'bg-gray-900 border-gray-800 hover:border-gray-700'
                        }`}
                      >
                        <div className="font-semibold text-white">{level.label}</div>
                        <div className="text-sm text-gray-400">{level.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-3">
                    Current AI Spend (Monthly) *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['$0-500', '$500-2000', '$2000-5000', '$5000+'].map(spend => (
                      <button
                        key={spend}
                        onClick={() => updateFormData('currentSpend', spend)}
                        className={`p-3 rounded-lg border transition-all ${
                          formData.currentSpend === spend
                            ? 'bg-green-500/20 border-green-500 text-white'
                            : 'bg-gray-900 border-gray-800 text-gray-400 hover:border-gray-700'
                        }`}
                      >
                        {spend}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Current AI Stack *
                  </label>
                  <textarea
                    value={formData.currentStack}
                    onChange={(e) => updateFormData('currentStack', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-green-500 h-24 resize-none"
                    placeholder="OpenAI API, Claude, local LLMs, vector databases, etc."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-3">
                    Data Sensitivity Level *
                  </label>
                  <div className="grid md:grid-cols-3 gap-3">
                    {[
                      { value: 'Low', label: 'Low', desc: 'Public data only' },
                      { value: 'Medium', label: 'Medium', desc: 'Some proprietary data' },
                      { value: 'High', label: 'High', desc: 'Critical IP & customer data' }
                    ].map(level => (
                      <button
                        key={level.value}
                        onClick={() => updateFormData('dataSensitivity', level.value)}
                        className={`p-4 rounded-lg border text-center transition-all ${
                          formData.dataSensitivity === level.value
                            ? 'bg-green-500/20 border-green-500'
                            : 'bg-gray-900 border-gray-800 hover:border-gray-700'
                        }`}
                      >
                        <Shield className={`w-8 h-8 mx-auto mb-2 ${
                          formData.dataSensitivity === level.value ? 'text-green-500' : 'text-gray-600'
                        }`} />
                        <div className="font-semibold text-white">{level.label}</div>
                        <div className="text-xs text-gray-400 mt-1">{level.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Expected Scaling Needs *
                  </label>
                  <textarea
                    value={formData.scalingNeeds}
                    onChange={(e) => updateFormData('scalingNeeds', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-green-500 h-24 resize-none"
                    placeholder="Current usage patterns, expected growth, peak loads..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-3">
                    Implementation Timeline *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { value: 'Immediate', label: 'Immediate', icon: <Zap className="w-4 h-4" /> },
                      { value: 'Within 30 days', label: 'Within 30 days', icon: <Clock className="w-4 h-4" /> },
                      { value: 'Within 3 months', label: 'Within 3 months', icon: <Target className="w-4 h-4" /> },
                      { value: 'Just exploring', label: 'Just exploring', icon: <Brain className="w-4 h-4" /> }
                    ].map(timeline => (
                      <button
                        key={timeline.value}
                        onClick={() => updateFormData('timeline', timeline.value)}
                        className={`p-3 rounded-lg border transition-all ${
                          formData.timeline === timeline.value
                            ? 'bg-green-500/20 border-green-500 text-white'
                            : 'bg-gray-900 border-gray-800 text-gray-400 hover:border-gray-700'
                        }`}
                      >
                        <div className="flex flex-col items-center gap-2">
                          {timeline.icon}
                          <span className="text-sm">{timeline.label}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Why AI Sovereignty? Why Now? *
                  </label>
                  <textarea
                    value={formData.whySovereignty}
                    onChange={(e) => updateFormData('whySovereignty', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-green-500 h-24 resize-none"
                    placeholder="What's driving your need for sovereign AI? What triggered this search?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Biggest AI Challenge *
                  </label>
                  <textarea
                    value={formData.biggestChallenge}
                    onChange={(e) => updateFormData('biggestChallenge', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-green-500 h-24 resize-none"
                    placeholder="What's the #1 problem you need SOVREN to solve?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Success Metrics *
                  </label>
                  <textarea
                    value={formData.successMetrics}
                    onChange={(e) => updateFormData('successMetrics', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-green-500 h-24 resize-none"
                    placeholder="How will you measure success with SOVREN? What outcomes matter most?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-3">
                    Commitment Level *
                  </label>
                  <div className="space-y-3">
                    {[
                      { 
                        value: 'High Commitment', 
                        label: 'High Commitment',
                        desc: 'Ready to deploy sovereign AI as core infrastructure'
                      },
                      { 
                        value: 'Strategic Initiative', 
                        label: 'Strategic Initiative',
                        desc: 'Part of our AI transformation roadmap'
                      },
                      { 
                        value: 'Exploring Options', 
                        label: 'Exploring Options',
                        desc: 'Evaluating sovereign vs vendor solutions'
                      }
                    ].map(level => (
                      <button
                        key={level.value}
                        onClick={() => updateFormData('commitmentLevel', level.value)}
                        className={`w-full p-4 rounded-lg border text-left transition-all ${
                          formData.commitmentLevel === level.value
                            ? 'bg-green-500/20 border-green-500'
                            : 'bg-gray-900 border-gray-800 hover:border-gray-700'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`mt-1 ${
                            formData.commitmentLevel === level.value ? 'text-green-500' : 'text-gray-600'
                          }`}>
                            <Check className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="font-semibold text-white">{level.label}</div>
                            <div className="text-sm text-gray-400">{level.desc}</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  currentStep === 0
                    ? 'text-gray-600 cursor-not-allowed'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>

              {/* Progress Dots */}
              <div className="flex gap-2">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentStep ? 'bg-green-500 w-6' : 'bg-gray-700'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                onClick={handleNext}
                disabled={!canProceed() || isSubmitting}
                whileHover={canProceed() && !isSubmitting ? { scale: 1.05 } : {}}
                whileTap={canProceed() && !isSubmitting ? { scale: 0.95 } : {}}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  canProceed() && !isSubmitting
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-gray-800 text-gray-600 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : currentStep === steps.length - 1 ? (
                  <>
                    Submit Application
                    <ChevronRight className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Continue
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
