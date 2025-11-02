import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  const services = [
    'Healthcare Recruitment',
    'Engineering Recruitment', 
    'Education Recruitment',
    'Visa Support',
    'Immigration Assistance'
  ]

  const socialLinks = [
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div>
                <h3 className="text-xl font-heading font-bold">{import.meta.env.COMPANY_NAME} RECRUITMENT</h3>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-500 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">
                  Horsefair House 7-8 Sibford Road Hook Norton
                  Oxfordshire<br />
                  OX15 5LA<br />
                  United Kingdom
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-500" />
                <a href="mailto:info@nexusrecruitmentsolutions.com" className="text-gray-300 hover:text-white transition-colors">
                info@nexusrecruitmentsolutions.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-500" />
                <a href="tel:+919840067489" className="text-gray-300 hover:text-white transition-colors">
                  India: +91 98400 67489
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-500" />
                <a href="tel:+447480067489" className="text-gray-300 hover:text-white transition-colors">
                  UK: + 44 (0) 7771 646247
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link to="/terms" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms and Conditions
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/privacy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/cookies" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/modern-slavery" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">
              Modern Slavery Statement
            </Link>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
          </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {currentYear} {import.meta.env.COMPANY_NAME} Recruitment Solutions. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Committed to ethical recruitment practices
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
