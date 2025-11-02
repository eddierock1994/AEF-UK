import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { 
  Shield, 
  Users, 
  Globe, 
  HeartHandshake, 
  Stethoscope, 
  Wrench, 
  GraduationCap, 
  HardHat,
  CheckCircle,
  ArrowRight,
  Rocket,
  TrendingUp
} from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'Ethical Recruitment',
      description: `At ${import.meta.env.COMPANY_NAME}, we uphold the International Code of Ethical Recruitment and
proudly provide 100% free recruitment services for all overseas healthcare
professionals.
Our goal is simple — to help you build a fulfilling international career by offering
transparent guidance, complete support, and ethical practices at every step`
    },
    {
      icon: Users,
      title: 'Our Partnered Employers',
      description: `We collaborate exclusively with reputed, accredited, and trusted healthcare
institutions worldwide.
Each partner hospital and organization is carefully vetted to ensure fair
treatment, professional growth, and a safe, supportive work environment for
every candidate`
    },
    {
      icon: Globe,
      title: 'Access to Qualified Healthcare Talent',
      description: `For employers, Nexus connects you with pre-screened, highly skilled
healthcare professionals in globally recognized shortage occupations.
We help fill critical roles quickly and efficiently through our specialized
international recruitment network`
    },
    {
      icon: HeartHandshake,
      title: 'Personalized Support, Every Step of the Way',
      description: `Our dedicated support team provides one-to-one guidance for professionals,
students, and partners throughout the recruitment and migration process.
From licensing and registration to immigration and visa formalities, we
ensure a seamless and stress-free experience from start to finish`
    }
  ]

  const sectors = [
    {
      icon: Stethoscope,
      title: 'Healthcare',
      description: 'Empowering doctors, nurses, and allied professionals to build meaningful global careers in world-class healthcare systems.'
    },
    {
      icon: Wrench,
      title: 'Engineering',
      description: 'Connecting engineers and technical experts with innovative companies driving infrastructure and technology worldwide.'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Helping skilled educators and academic professionals find rewarding roles in international schools and universities.'
    },
    {
      icon: HardHat,
      title: 'Hospitality',
      description: 'Bringing talented chefs, hoteliers, and service professionals to leading hospitality destinations across the globe.'
    }
  ]

  const benefits = [
    'Free recruitment services for candidates',
    'Comprehensive visa and immigration support',
    'Pre-departure orientation and training',
    'Ongoing support after placement',
    'Ethical and transparent processes',
    'Industry-leading expertise'
  ]

  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nexus Recruitment Solutions",
    "url": "https://nexusrecruitmentsolutions.com",
    "logo": "https://nexusrecruitmentsolutions.com/images/nexus_logo.png",
    "description": "Leading international healthcare recruitment agency specializing in overseas nursing jobs, healthcare professional placement, and visa support services worldwide.",
    "serviceType": [
      "Healthcare Recruitment",
      "International Nursing Jobs", 
      "Overseas Healthcare Placement",
      "Visa Support Services",
      "Immigration Assistance",
      "Nursing Recruitment Agency",
      "Medical Staffing Solutions"
    ],
    "areaServed": ["United Kingdom", "India", "Global"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Healthcare Recruitment Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Overseas Nursing Jobs",
            "description": "International nursing opportunities with visa support"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Healthcare Professional Placement",
            "description": "Connecting healthcare professionals with global opportunities"
          }
        }
      ]
    }
  }

  return (
    <div className="pt-20">
      <SEO 
        title="International Healthcare & Nursing Jobs Overseas"
        description="Nexus Recruitment Solutions - Leading international healthcare recruitment agency specializing in overseas nursing jobs, healthcare professional placement, and visa support services worldwide."
        keywords="nexus recruitment solutions, healthcare recruitment, overseas nursing jobs, international nurse recruitment, healthcare jobs abroad, nursing recruitment agency, overseas healthcare jobs, international healthcare careers, nurse jobs UK, healthcare visa support, nursing jobs overseas, medical recruitment, healthcare staffing, international nursing opportunities, overseas nurse placement"
        canonical="/"
        structuredData={homeStructuredData}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white overflow-hidden min-h-screen flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-fade-in"
          style={{
            backgroundImage: `url('/images/hero.png')`
          }}
        ></div>
        {/* Minimal overlay for text readability only */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative container-max section-padding w-full">
          <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 animate-fade-in">
                Connecting Global Talent to a World of Opportunity
              </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-slide-up">
            At {import.meta.env.COMPANY_NAME} Recruitment, we specialize in connecting overseas professionals
with credible employers across shortage occupations worldwide. Our goal is to create
life-changing opportunities while ensuring ethical, transparent, and compliant
recruitment.
            </p>

          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary-500/20 rounded-full blur-xl"></div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Why Choose {import.meta.env.COMPANY_NAME}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to ethical recruitment practices and providing exceptional service to both candidates and employers worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-justify">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Sectors */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Recruitment Sectors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in placing professionals across multiple industries with a focus on shortage occupations and high-demand skills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector, index) => (
              <div key={index} className="card group hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <sector.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {sector.title}
                </h3>
                <p className="text-gray-600">
                  {sector.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/jobs" className="btn-primary whitespace-nowrap inline-flex items-center">
              View All Opportunities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Real stories from professionals who have successfully built their international careers with {import.meta.env.COMPANY_NAME}.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="mb-6">
                <div className="flex text-accent-300 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-accent-300">
                  "A truly hassle-free experience!"
                </h3>
                <p className="text-primary-100 leading-relaxed text-justify">
                  From the very beginning of my interview process until now, everything has been smooth and worry-free. The team at Nexus genuinely cares for their candidates and supports them every step of the way.
                </p>
              </div>
              <div className="border-t border-white/20 pt-4">
                <p className="font-semibold text-white">Balaji R.</p>
                <p className="text-primary-200 text-sm">Princess Alexandra Hospital NHS Trust</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="mb-6">
                <div className="flex text-accent-300 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-accent-300">
                  "A dream come true!"
                </h3>
                <p className="text-primary-100 leading-relaxed text-justify">
                  I'm truly grateful to Nexus for making my dream placement a reality. I wanted to continue in my specialty — Dialysis Nursing — and in the exact hospital I hoped for. Nexus went above and beyond to make it happen. The entire process was smooth, transparent, and stress-free — they truly deliver on their promises.
                </p>
              </div>
              <div className="border-t border-white/20 pt-4">
                <p className="font-semibold text-white">Shruthy E.</p>
                <p className="text-primary-200 text-sm">University Hospitals of Leicester NHS Trust</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="mb-6">
                <div className="flex text-accent-300 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-accent-300">
                  "Seamless international career move"
                </h3>
                <p className="text-primary-100 leading-relaxed text-justify">
                  Nexus made my international career move seamless. From interviews to visa processing, everything was handled with professionalism and genuine care. I'm now working as a Head Chef, exactly where I wanted to be. I'm deeply grateful for Nexus' dedication and support throughout the process.
                </p>
              </div>
              <div className="border-t border-white/20 pt-4">
                <p className="font-semibold text-white">Paul F.</p>
                <p className="text-primary-200 text-sm">Colwick Hall Hotel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're a professional seeking international opportunities or an employer looking for skilled talent, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/jobs" className="btn-primary">
              Browse Jobs
            </Link>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-gray-900">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
