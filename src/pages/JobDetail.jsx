import React, { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { 
  MapPin, 
  Clock, 
  DollarSign,
  Stethoscope,
  ExternalLink,
  ArrowLeft,
  Building,
  Star
} from 'lucide-react'
import { getRelativeTime } from '../utils/dateUtils'
import { useJobListings } from '../hooks/useJobListings'

const JobDetail = () => {
  const { slug } = useParams()
  
  // Use custom hook to fetch job listings (cached from Jobs page if already loaded)
  const { jobListings, isLoading, error } = useJobListings()
  
  // Find the specific job by slug
  const job = useMemo(() => {
    return jobListings.find(j => j.slug === slug)
  }, [jobListings, slug])

  // Loading state
  if (isLoading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Loading job details...</p>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-red-600 mb-4">
            <svg className="h-16 w-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Unable to Load Job</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link to="/jobs" className="btn-primary">
            Back to All Jobs
          </Link>
        </div>
      </div>
    )
  }

  // Job not found
  if (!job) {
    return (
      <div className="pt-20">
        <div className="container-max section-padding">
          <div className="text-center py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Job Not Found</h1>
            <p className="text-gray-600 mb-8">The job listing you're looking for doesn't exist.</p>
            <Link to="/jobs" className="btn-primary">
              Back to All Jobs
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const IconComponent = Stethoscope

  return (
    <div className="pt-20 overflow-x-hidden">
      <SEO 
        title={`${job.title} - Nexus Recruitment`}
        description={job.description}
        keywords={`${job.title}, ${job.sector}, ${job.location}, nexus recruitment, healthcare jobs`}
        canonical={`/jobs/${job.slug}`}
      />

      {/* Back Button & Header */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white section-padding overflow-hidden">
        <div className="container-max">
          <Link to="/jobs" className="inline-flex items-center text-white hover:text-primary-100 mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to All Jobs
          </Link>
          
          <div className="flex items-start gap-4 md:gap-6">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <IconComponent className="h-6 w-6 md:h-8 md:w-8 text-white" />
            </div>
            <div className="flex-grow min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold break-words">
                  {job.title}
                </h1>
                {job.featured && <Star className="h-5 w-5 md:h-6 md:w-6 text-yellow-300 flex-shrink-0" />}
              </div>
              <div className="flex items-center text-primary-100 mb-4">
                <Building className="h-4 w-4 md:h-5 md:w-5 mr-2 flex-shrink-0" />
                <span className="text-base md:text-lg font-medium break-words">{job.company}</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 text-sm md:text-base">
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="break-words">{job.location}</span>
                </div>
                <div className="flex items-start">
                  <DollarSign className="h-4 w-4 md:h-5 md:w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="break-words">{job.salary}</span>
                </div>
                <div className="flex items-start">
                  <Clock className="h-4 w-4 md:h-5 md:w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="break-words">{job.type}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-5xl">
          <div className="space-y-8">
            {/* Full Description */}
            {job.fullDescription && (
              <div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">About This Opportunity</h2>
                <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">{job.fullDescription}</p>
              </div>
            )}

            {/* Package Details */}
            {job.packageDetails && (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
                  <DollarSign className="h-8 w-8 text-green-600 mr-3" />
                  Remuneration Package
                </h2>
                <p className="text-2xl font-semibold text-green-700 mb-8">{job.packageDetails.total}</p>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4 text-lg">Package Components:</h3>
                    <ul className="space-y-3">
                      {job.packageDetails.components.map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <span className="text-green-600 mr-2 font-bold">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4 text-lg">Leave & Benefits:</h3>
                    <ul className="space-y-3">
                      {job.packageDetails.leave.map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <span className="text-green-600 mr-2 font-bold">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4 text-lg">Additional Support:</h3>
                    <ul className="space-y-3">
                      {job.packageDetails.support.map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <span className="text-green-600 mr-2 font-bold">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Responsibilities */}
            {job.responsibilities && (
              <div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">Your Responsibilities</h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  {job.responsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 text-lg">
                      <span className="text-primary-600 mr-3 mt-1 text-xl">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Departments */}
            {job.departments && (
              <div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">The Departments</h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  {job.departments.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 text-lg">
                      <span className="text-primary-600 mr-3 mt-1 text-xl">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Requirements */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">Requirements</h2>
              <ul className="space-y-4">
                {job.requirements.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-700 text-lg">
                    <span className="text-red-600 mr-3 mt-1 font-bold text-xl">✓</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            {job.benefits && (
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Make the Move to Australia?</h2>
                
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4 text-xl">Professional Benefits:</h3>
                    <ul className="space-y-3">
                      {job.benefits.professional.map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <span className="text-blue-600 mr-3 mt-1 text-lg">★</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4 text-xl">Lifestyle Advantages:</h3>
                    <ul className="space-y-3">
                      {job.benefits.lifestyle.map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <span className="text-blue-600 mr-3 mt-1 text-lg">★</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Locations */}
            {job.locations && (
              <div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">Available Locations</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {job.locations.map((location, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-4 border-2 border-gray-200 hover:border-primary-500 transition-colors flex items-center">
                      <MapPin className="h-5 w-5 text-primary-600 mr-2" />
                      <span className="font-medium text-gray-700">{location}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Apply CTA */}
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl p-10 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Interested in this opportunity?</h2>
              <p className="text-xl mb-8">Contact us to get started with your application</p>
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-10 py-4 bg-white text-primary-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-colors"
              >
                Apply Now - Contact Us
                <ExternalLink className="ml-3 h-6 w-6" />
              </Link>
              <p className="text-sm text-primary-100 mt-4">Posted {getRelativeTime(job.postedDate)}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default JobDetail

