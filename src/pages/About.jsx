import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
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
      icon: CheckCircle,
      title: 'Integrity',
      description: 'We uphold fairness, honesty, and transparency in everything we do.'
    },
    {
      icon: Shield,
      title: 'Accountability',
      description: 'We take ownership of every placement and every promise.'
    },
    {
      icon: Heart,
      title: 'Empathy',
      description: 'We understand the hopes, challenges, and aspirations behind every career move.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We continuously strive to exceed expectations for both professionals and employers.'
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
      <SEO 
        title="About Nexus Recruitment Solutions - International Healthcare Recruitment Agency"
        description="Learn about Nexus Recruitment Solutions, a leading international healthcare recruitment agency specializing in overseas nursing jobs and healthcare professional placement with ethical recruitment practices."
        keywords="about nexus recruitment solutions, international healthcare recruitment agency, ethical recruitment practices, overseas nursing recruitment, healthcare staffing company, international nurse placement, medical recruitment agency"
        canonical="/about"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Empowering Global Careers Through Ethical Recruitment
            </h1>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8 text-center">
              Who We Are
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Nexus Recruitment was founded in 2024 with a clear purpose — to provide ethical,
                transparent, and sustainable international recruitment solutions across the globe.
              </p>
              <p>
                We partner with countries and organizations facing workforce shortages, primarily in the
                Healthcare, Engineering, Education, and Hospitality sectors, helping them bridge these
                critical gaps by connecting them with qualified professionals from overseas.
              </p>
              <p>
                Our leadership and recruitment team bring a wealth of experience, having successfully placed
                over 2,000 professionals across Europe in various industries. We hold ourselves accountable
                to the highest standards of integrity and compliance, adhering strictly to the World Health
                Organization's International Code of Ethical Recruitment.
              </p>
              <p>
                We understand that relocating overseas can be a challenging journey — which is why our
                services are completely free for professionals. From the first consultation to final deployment,
                we provide comprehensive guidance and one-to-one support, ensuring a seamless and
                stress-free recruitment process.
              </p>
              <p>
                For employers, Nexus offers access to a diverse pool of pre-screened, highly skilled
                candidates ready to fill essential workforce shortages. We welcome collaboration with
                organizations seeking a reliable and ethical international recruitment partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="pb-16 pt-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8">
              <Heart className="h-12 w-12 text-primary-600 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed">
                To connect global talent with opportunity — ethically, transparently, and with
                genuine care for professionals and employers alike.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8">
              <Target className="h-12 w-12 text-primary-600 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To be a trusted global recruitment partner that builds sustainable, people-centric
                solutions for workforce challenges worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              Our Global Reach
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              With operations in the UK and India, and partnerships across Europe, Nexus is now
              expanding into Australia, Canada, and the Middle East — connecting professionals to
              trusted employers in regions that need their expertise most.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Values
            </h2>
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
            <Link to="/jobs" className="btn-secondary">
              Find Opportunities
            </Link>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-accent-600">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
