import React from 'react'

const Cookies = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-primary-100">
              Learn about how we use cookies and similar technologies on our website
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                Cookie Policy
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1. What Are Cookies?</h3>
                  <p>
                    Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners about how users interact with their sites.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2. How We Use Cookies</h3>
                  <p>
                    {import.meta.env.COMPANY_NAME} Recruitment Solutions uses cookies to enhance your browsing experience and improve our services. We use cookies for the following purposes:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>To remember your preferences and settings</li>
                    <li>To analyze website traffic and usage patterns</li>
                    <li>To improve website functionality and user experience</li>
                    <li>To provide personalized content and recommendations</li>
                    <li>To ensure website security and prevent fraud</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Types of Cookies We Use</h3>
                  
                  <h4 className="text-lg font-medium text-gray-900 mt-4 mb-2">Essential Cookies</h4>
                  <p>
                    These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and form submissions. The website cannot function properly without these cookies.
                  </p>

                  <h4 className="text-lg font-medium text-gray-900 mt-4 mb-2">Performance Cookies</h4>
                  <p>
                    These cookies collect information about how visitors use our website, such as which pages are visited most often and if users receive error messages. This information helps us improve how our website works.
                  </p>

                  <h4 className="text-lg font-medium text-gray-900 mt-4 mb-2">Functionality Cookies</h4>
                  <p>
                    These cookies allow the website to remember choices you make (such as your username, language, or region) and provide enhanced, more personalized features.
                  </p>

                  <h4 className="text-lg font-medium text-gray-900 mt-4 mb-2">Analytics Cookies</h4>
                  <p>
                    We use analytics cookies to understand how visitors interact with our website. This helps us analyze data about web page traffic and improve our website to tailor it to customer needs.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Third-Party Cookies</h3>
                  <p>
                    We may also use third-party services that set cookies on your device. These may include:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Google Analytics for website analytics</li>
                    <li>Social media platforms for content sharing</li>
                    <li>Customer support and chat services</li>
                    <li>Email marketing and communication tools</li>
                  </ul>
                  <p className="mt-3">
                    These third parties have their own privacy policies and cookie policies, which we encourage you to review.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Managing Your Cookie Preferences</h3>
                  <p>
                    You have several options for managing cookies:
                  </p>
                  
                  <h4 className="text-lg font-medium text-gray-900 mt-4 mb-2">Browser Settings</h4>
                  <p>
                    Most web browsers allow you to control cookies through their settings. You can:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Block all cookies</li>
                    <li>Block third-party cookies</li>
                    <li>Delete cookies when you close your browser</li>
                    <li>Set up notifications when cookies are being sent</li>
                  </ul>

                  <h4 className="text-lg font-medium text-gray-900 mt-4 mb-2">Opt-Out Tools</h4>
                  <p>
                    You can opt out of certain analytics and advertising cookies by visiting:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Google Analytics Opt-out Browser Add-on</li>
                    <li>Network Advertising Initiative opt-out page</li>
                    <li>Digital Advertising Alliance opt-out page</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Impact of Disabling Cookies</h3>
                  <p>
                    Please note that if you disable or refuse cookies, some parts of our website may become inaccessible or not function properly. Essential cookies are necessary for basic website functionality and cannot be disabled.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">7. Updates to This Policy</h3>
                  <p>
                    We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">8. Contact Us</h3>
                  <p>
                    If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
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

export default Cookies
