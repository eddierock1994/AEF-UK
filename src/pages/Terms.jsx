import React from 'react'
import SEO from '../components/SEO'

const Terms = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="Terms and Conditions - Nexus Recruitment Solutions - International Healthcare & Nursing Jobs Overseas"
        description="Read the terms and conditions for using Nexus Recruitment Solutions services. Understand our policies and guidelines for international healthcare recruitment."
        canonical="/terms"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Terms and Conditions
            </h1>
            <p className="text-xl text-primary-100">
              Please read these terms and conditions carefully before using our services
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                Terms and Conditions of Service
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h3>
                  <p>
                    Welcome to {import.meta.env.COMPANY_NAME} Recruitment Solutions. These terms and conditions outline the rules and regulations for the use of our website and services. By accessing this website and using our services, you accept these terms and conditions in full.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Services</h3>
                  <p>
                    {import.meta.env.COMPANY_NAME} Recruitment Solutions provides international recruitment services, specializing in connecting qualified healthcare professionals with rewarding career opportunities. Our services include but are not limited to:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Healthcare recruitment and placement services</li>
                    <li>Visa and immigration support</li>
                    <li>Career guidance and consultation</li>
                    <li>Application processing and documentation assistance</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3. User Responsibilities</h3>
                  <p>
                    By using our services, you agree to:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the confidentiality of your account credentials</li>
                    <li>Comply with all applicable laws and regulations</li>
                    <li>Not misuse our services or website</li>
                    <li>Respect the intellectual property rights of others</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Privacy and Data Protection</h3>
                  <p>
                    We are committed to protecting your privacy and personal data. Our collection, use, and protection of your personal information is governed by our Privacy Policy, which forms an integral part of these terms and conditions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Limitation of Liability</h3>
                  <p>
                    While we strive to provide accurate information and quality services, {import.meta.env.COMPANY_NAME} Recruitment Solutions shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of our services or website.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Intellectual Property</h3>
                  <p>
                    All content on this website, including text, graphics, logos, and images, is the property of {import.meta.env.COMPANY_NAME} Recruitment Solutions and is protected by copyright and other intellectual property laws.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">7. Modifications</h3>
                  <p>
                    We reserve the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of the modified terms.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">8. Contact Information</h3>
                  <p>
                    If you have any questions about these terms and conditions, please contact us at:
                  </p>
                  <div className="mt-2">
                    <p><strong>Email:</strong> info@nexusrecruitmentsolutions.com</p>
                    <p><strong>Phone:</strong> UK: +44 (0) 7771 646247 | India: +91 9600138613</p>
                    <p><strong>Address:</strong> Horsefair House 7-8 Sibford Road Hook Norton, Oxfordshire OX15 5LA, United Kingdom</p>
                  </div>
                </div>

                <div className="border-t pt-6 mt-8">
                  <p className="text-sm text-gray-600">
                    <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Terms
