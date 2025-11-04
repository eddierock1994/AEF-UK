import React from 'react'
import SEO from '../components/SEO'

const Privacy = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="Privacy Policy - Nexus Recruitment Solutions - International Healthcare & Nursing Jobs Overseas"
        description="Learn about how Nexus Recruitment Solutions collects, uses, and protects your personal information. Your privacy is important to us."
        canonical="/privacy"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-primary-100">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                Privacy Policy
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h3>
                  <p>
                    {import.meta.env.COMPANY_NAME} Recruitment Solutions ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our recruitment services.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Information We Collect</h3>
                  <p>We may collect information about you in a variety of ways, including:</p>
                  
                  <h4 className="text-lg font-medium text-gray-900 mt-4 mb-2">Personal Data</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Name, email address, and contact information</li>
                    <li>Professional qualifications and work experience</li>
                    <li>Resume/CV and supporting documents</li>
                    <li>Visa and immigration status information</li>
                    <li>References and background check information</li>
                  </ul>

                  <h4 className="text-lg font-medium text-gray-900 mt-4 mb-2">Usage Data</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>IP address and browser information</li>
                    <li>Pages visited and time spent on our website</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3. How We Use Your Information</h3>
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Provide recruitment and placement services</li>
                    <li>Match candidates with suitable job opportunities</li>
                    <li>Communicate with you about our services</li>
                    <li>Process visa and immigration applications</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal and regulatory requirements</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Information Sharing and Disclosure</h3>
                  <p>We may share your information with:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Potential employers and healthcare institutions</li>
                    <li>Immigration and visa processing agencies</li>
                    <li>Professional licensing and certification bodies</li>
                    <li>Third-party service providers who assist in our operations</li>
                    <li>Legal authorities when required by law</li>
                  </ul>
                  <p className="mt-3">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Data Security</h3>
                  <p>
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Data Retention</h3>
                  <p>
                    We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. We will securely delete or anonymize your information when it is no longer needed.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">7. Your Rights</h3>
                  <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Right to access your personal data</li>
                    <li>Right to rectify inaccurate information</li>
                    <li>Right to erase your personal data</li>
                    <li>Right to restrict processing</li>
                    <li>Right to data portability</li>
                    <li>Right to object to processing</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">8. Cookies and Tracking Technologies</h3>
                  <p>
                    We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences. For more information, please see our Cookie Policy.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">9. International Data Transfers</h3>
                  <p>
                    As an international recruitment agency, we may transfer your personal information to countries outside your residence. We ensure appropriate safeguards are in place to protect your information during such transfers.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">10. Contact Us</h3>
                  <p>
                    If you have any questions about this Privacy Policy or our data practices, please contact us at:
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

export default Privacy
