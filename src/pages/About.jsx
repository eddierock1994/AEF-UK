import React from 'react'
import { 
  Shield, 
  Globe, 
  Users, 
  Award, 
  Heart,
  Target,
  CheckCircle,
  TrendingUp,
  Clock,
  Star,
  UserCheck,
  Briefcase
} from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Ethical Practices',
      description: 'We strictly adhere to international recruitment standards and provide transparent, ethical services to all our clients.'
    },
    {
      icon: Heart,
      title: 'People First',
      description: 'We believe in putting people at the center of everything we do, ensuring their well-being and career growth.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Our international network connects opportunities across continents, opening doors worldwide.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in recruitment, ensuring quality matches for both candidates and employers.'
    }
  ]

  const milestones = [
    { year: '2018', title: 'Company Founded', description: `${import.meta.env.COMPANY_NAME} Recruitment established with a vision to connect global talent` },
    { year: '2019', title: 'First 1000 Placements', description: 'Reached our first major milestone in successful international placements' },
    { year: '2021', title: 'Multi-Sector Expansion', description: 'Extended services across healthcare, engineering, education, and trades' },
    { year: '2023', title: 'Digital Innovation', description: 'Launched advanced digital platform for seamless recruitment experience' },
    { year: '2024', title: '5000+ Success Stories', description: 'Celebrating over 5000 successful international career transitions' }
  ]

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Director of Operations',
      specialization: 'Healthcare Recruitment',
      experience: '12+ years',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1cf?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      role: 'Senior Consultant',
      specialization: 'Engineering & Tech',
      experience: '8+ years',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Immigration Specialist',
      specialization: 'Visa & Documentation',
      experience: '10+ years',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'David Thompson',
      role: 'Client Relations Manager',
      specialization: 'Employer Services',
      experience: '15+ years',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face'
    }
  ]

  const achievements = [
    { icon: Users, number: '5,000+', label: 'Successful Placements' },
    { icon: Globe, number: '15+', label: 'Countries Served' },
    { icon: Briefcase, number: '250+', label: 'Partner Employers' },
    { icon: Star, number: '98%', label: 'Client Satisfaction' }
  ]

  const certifications = [
    'International Code for Ethical Recruitment Member',
    'ISO 9001:2015 Quality Management Certified',
    'Immigration Consultants of Canada Regulatory Council',
    'Australian Department of Home Affairs Licensed',
    'UK Tier 2 Sponsor License Holder'
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              About {import.meta.env.COMPANY_NAME} Recruitment
            </h1>
            <p className="text-xl mb-8 text-primary-100">
              We are dedicated to connecting global talent with exceptional opportunities, 
              building careers that span continents and transform lives.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To bridge the gap between talented professionals seeking international opportunities 
                and employers worldwide who need skilled workers. We believe in ethical recruitment 
                practices that benefit all parties involved.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Ethical Recruitment</h4>
                    <p className="text-gray-600">Following international standards and best practices</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Comprehensive Support</h4>
                    <p className="text-gray-600">End-to-end assistance from application to settlement</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Global Network</h4>
                    <p className="text-gray-600">Connections across multiple countries and industries</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8">
                <Target className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To become the world's most trusted international recruitment agency, 
                  known for our integrity, expertise, and commitment to transforming careers 
                  and businesses across borders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide every decision we make and every relationship we build.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Achievements */}
      {/* <section className="section-padding bg-primary-600 text-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-primary-100">
              Numbers that reflect our commitment to excellence and client success.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-8 w-8 text-accent-300" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {achievement.number}
                </div>
                <div className="text-primary-100 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}



      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-accent-600 to-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-accent-100">
            Join thousands of professionals who have trusted {import.meta.env.COMPANY_NAME} Recruitment to transform their careers internationally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-secondary">
              Find Opportunities
            </button>
            <button className="btn-outline border-white text-white hover:bg-white hover:text-accent-600">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
