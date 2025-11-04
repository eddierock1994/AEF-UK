import React, { useState } from 'react'
import SEO from '../components/SEO'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Users,
  Briefcase,
  CheckCircle
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    inquiryType: '',
    message: '',
    resume: null
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      const file = e.target.files[0]
      if (file) {
        // Check file size (2MB = 2 * 1024 * 1024 bytes)
        const maxSize = 2 * 1024 * 1024
        if (file.size > maxSize) {
          alert('File size must be less than 2MB. Please choose a smaller file.')
          e.target.value = '' // Clear the file input
          return
        }
      }
      setFormData({
        ...formData,
        [e.target.name]: file
      })
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create FormData for Netlify submission
    const form = e.target
    const netlifyFormData = new FormData(form)
    
    // Submit to Netlify
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(netlifyFormData).toString()
    })
    .then((response) => {
      if (response.ok) {
        console.log('Form submitted successfully')
        setIsSubmitted(true)
        
        // Reset form after submission
        setTimeout(() => {
          setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          inquiryType: '',
          message: '',
          resume: null
        })
        }, 3000)
      } else {
        throw new Error('Form submission failed')
      }
    })
    .catch((error) => {
      console.error('Form submission error:', error)
      alert('There was an error submitting the form. Please try again.')
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'UK Office',
      details: [
        'Horsefair House 7-8 Sibford Road',
        'Hook Norton, Oxfordshire',
        'OX15 5LA, United Kingdom'
      ]
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      type: 'phones',
      phones: {
        uk: {
          title: 'UK',
          details: ['+44 (0) 7771 646247']
        },
        india: {
          title: 'India',
          details: ['+91 96771 01515']
        }
      }
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@aefrecruitment.com']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 2:00 PM',
        'Sunday: Closed'
      ]
    }
  ]

  const inquiryTypes = [
    { value: '', label: 'Select inquiry type' },
    { value: 'job-seeker', label: 'I\'m looking for a job' },
    { value: 'employer', label: 'I\'m an employer looking for talent' },
    { value: 'visa-support', label: 'I need visa/immigration support' },
    { value: 'partnership', label: 'Business partnership inquiry' },
    { value: 'general', label: 'General inquiry' },
    { value: 'other', label: 'Other' }
  ]

  return (
    <div className="pt-20">
      <SEO 
        title="Contact Us - Nexus Recruitment Solutions - International Healthcare & Nursing Jobs Overseas"
        description="Contact Nexus Recruitment Solutions for international healthcare and nursing job opportunities. Get expert guidance on overseas careers, visa support, and professional placement services."
        keywords="contact nexus recruitment solutions, healthcare recruitment contact, overseas nursing jobs contact, international healthcare careers, visa support contact, nursing recruitment agency contact"
        canonical="/contact"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Get In Touch
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-100">
            Ready to take the next step in your career or find the perfect talent? 
            We're here to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="card bg-green-50 border border-green-200">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                    <div>
                      <h3 className="text-xl font-semibold text-green-800">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-green-700">
                        Thank you for contacting us. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <form 
                  name="contact-form" 
                  method="POST" 
                  encType="multipart/form-data"
                  data-netlify="true" 
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  {/* Hidden fields for Netlify */}
                  <input type="hidden" name="form-name" value="contact-form" />
                  <div style={{ display: 'none' }}>
                    <label>
                      Don't fill this out if you're human: <input name="bot-field" />
                    </label>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                        Inquiry Type *
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        {inquiryTypes.map(type => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Brief description of your inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>

                  <div>
                    <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                      Resume/CV (Optional)
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        onChange={handleChange}
                        accept=".pdf,.doc,.docx"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
                      />
                      <p className="mt-2 text-sm text-gray-500">
                        Upload your resume or CV (PDF, DOC, or DOCX format, max 2MB)
                      </p>
                      {formData.resume && (
                        <p className="mt-1 text-sm text-green-600">
                          Selected: {formData.resume.name}
                        </p>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8">
                Reach out to us through any of the following channels.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="card hover:shadow-lg transition-all duration-300">
                    {info.type === 'phones' ? (
                      // Special layout for phone numbers
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">
                            {info.title}
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-2">
                                {info.phones.uk.title}
                              </h4>
                              <div className="space-y-1">
                                {info.phones.uk.details.map((detail, idx) => (
                                  <p key={idx} className="text-gray-600 text-sm">
                                    {detail}
                                  </p>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-2">
                                {info.phones.india.title}
                              </h4>
                              <div className="space-y-1">
                                {info.phones.india.details.map((detail, idx) => (
                                  <p key={idx} className="text-gray-600 text-sm">
                                    {detail}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Regular layout for other info
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {info.title}
                          </h3>
                          <div className="space-y-1">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-gray-600 text-sm">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
