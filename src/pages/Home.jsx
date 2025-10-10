import React from 'react'
import { Link } from 'react-router-dom'
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
      description: 'AEF strictly adheres to the International Code for Ethical Recruitment. We provide free recruitment for all overseas professionals. Our priority is to help you find the job you love by providing all the support you need.'
    },
    {
      icon: Users,
      title: 'Our Employers',
      description: 'AEF only works with highly credible and reputed employers to ensure that professionals are well taken care of and have a healthy work environment.'
    },
    {
      icon: Globe,
      title: 'Access to qualified and skilled professionals',
      description: 'AEF provides employers access to highly talented individuals particularly in \'shortage occupation\' professions. We help you find talent for positions that are hard to fill locally by specialising in International recruitment.'
    },
    {
      icon: HeartHandshake,
      title: 'Our Support Team',
      description: 'AEF provides dedicated one-to-one support for all our clients throughout the entire overseas recruitment process. Our team is well trained and provides thorough assistance for various Registration, Immigration and Visa processes to ensure a smooth and hassle-free recruitment experience.'
    }
  ]

  const sectors = [
    {
      icon: Stethoscope,
      title: 'Healthcare',
      description: 'Connecting healthcare professionals with leading medical institutions worldwide'
    },
    {
      icon: Wrench,
      title: 'Engineering',
      description: 'Placing skilled engineers in infrastructure and technology projects globally'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Matching educators with prestigious schools and universities internationally'
    },
    {
      icon: HardHat,
      title: 'Specialty Trades',
      description: 'Skilled tradespeople for specialized construction and manufacturing roles'
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

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white overflow-hidden min-h-screen flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70 animate-fade-in-70"
          style={{
            backgroundImage: `url('/images/hero.png')`
          }}
        ></div>
        {/* Minimal overlay for text readability only */}
        
        <div className="relative container-max section-padding w-full">
          <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 animate-fade-in">
                Recruiting done <span className="bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent animate-fade-in">right</span>
              </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-slide-up">
            With a strong focus on International recruitment, AEF helps connect employers and professionals from around the world. We provide ethical recruitment services with comprehensive support throughout the entire process.
            </p>

          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-500/20 rounded-full blur-xl"></div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Why Choose AEF
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to ethical recruitment practices and providing exceptional service to both candidates and employers worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card hover:shadow-2xl transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
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
              <div key={index} className="card group hover:shadow-2xl transition-all duration-300 text-center hover:-translate-y-2">
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

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                What Sets Us Apart
              </h2>
              <p className="text-xl mb-8 text-primary-100">
                We go beyond traditional recruitment to provide comprehensive support throughout your international career journey.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent-300 flex-shrink-0" />
                    <span className="text-primary-100">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Rocket className="h-10 w-10 text-accent-300" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
                  <p className="text-primary-100 mb-6">
                    Join thousands of professionals who have successfully built their international careers with AEF.
                  </p>
                  <Link to="/contact" className="btn-secondary">
                    Start Your Journey
                  </Link>
                </div>
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
