import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { 
  Search, 
  MapPin, 
  Clock, 
  DollarSign, 
  Filter,
  Stethoscope,
  Wrench,
  GraduationCap,
  HardHat,
  ExternalLink,
  Star,
  Building,
  Calendar
} from 'lucide-react'
import { getRelativeTime } from '../utils/dateUtils'
import { useJobListings } from '../hooks/useJobListings'

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSector, setSelectedSector] = useState('all')
  const [selectedLocation, setSelectedLocation] = useState('all')
  
  // Use custom hook to fetch job listings
  const { jobListings: jobListingsData, isLoading, error, refetch } = useJobListings()

  // Icon mapping for sectors
  const sectorIcons = {
    'Healthcare': Stethoscope,
    'Engineering': Wrench,
    'Education': GraduationCap,
    'Specialty Trades': HardHat
  }

  // Add icons and calculated posted time to job data
  const jobListings = jobListingsData.map(job => ({
    ...job,
    icon: sectorIcons[job.sector] || Stethoscope,
    posted: getRelativeTime(job.postedDate)
  }))

  /* Commented out old job listings
    {
      id: 2,
      title: 'Registered Nurse - ICU',
      company: 'Royal Melbourne Hospital',
      location: 'Melbourne, Australia',
      sector: 'Healthcare',
      icon: Stethoscope,
      salary: 'AUD 70,000 - 85,000',
      type: 'Full-time',
      posted: '2 days ago',
      featured: true,
      description: 'Seeking experienced ICU nurses for a leading hospital in Melbourne. Visa sponsorship available.',
      requirements: ['Bachelor\'s degree in Nursing', '2+ years ICU experience', 'English proficiency']
    },
    {
      id: 3,
      title: 'Senior Software Engineer',
      company: 'Tech Innovation Ltd',
      location: 'Toronto, Canada',
      sector: 'Engineering',
      icon: Wrench,
      salary: 'CAD 90,000 - 120,000',
      type: 'Full-time',
      posted: '1 week ago',
      featured: false,
      description: 'Join our dynamic team developing cutting-edge software solutions. Work permit assistance provided.',
      requirements: ['5+ years software development', 'React/Node.js expertise', 'Team leadership experience']
    },
    {
      id: 3,
      title: 'Mathematics Teacher',
      company: 'International School Dubai',
      location: 'Dubai, UAE',
      sector: 'Education',
      icon: GraduationCap,
      salary: 'AED 12,000 - 18,000',
      type: 'Full-time',
      posted: '3 days ago',
      featured: true,
      description: 'Teach mathematics to international students in a prestigious school environment.',
      requirements: ['Teaching qualification', 'Math degree', 'International curriculum experience']
    },
    {
      id: 4,
      title: 'Welding Specialist',
      company: 'Marine Construction Inc',
      location: 'Aberdeen, Scotland',
      sector: 'Specialty Trades',
      icon: HardHat,
      salary: 'GBP 35,000 - 45,000',
      type: 'Contract',
      posted: '5 days ago',
      featured: false,
      description: 'Skilled welders needed for offshore marine construction projects. Training provided.',
      requirements: ['Certified welder', 'Offshore experience preferred', 'Safety certifications']
    },
    {
      id: 5,
      title: 'Pediatric Nurse',
      company: 'Children\'s Hospital Network',
      location: 'Vancouver, Canada',
      sector: 'Healthcare',
      icon: Stethoscope,
      salary: 'CAD 65,000 - 78,000',
      type: 'Full-time',
      posted: '1 day ago',
      featured: true,
      description: 'Compassionate pediatric nurses wanted for Canada\'s leading children\'s hospital.',
      requirements: ['Pediatric nursing certification', '3+ years experience', 'IELTS 7.0+']
    },
    {
      id: 6,
      title: 'Civil Engineer - Infrastructure',
      company: 'Urban Development Authority',
      location: 'Auckland, New Zealand',
      sector: 'Engineering',
      icon: Wrench,
      salary: 'NZD 75,000 - 95,000',
      type: 'Full-time',
      posted: '4 days ago',
      featured: false,
      description: 'Lead infrastructure projects in one of the world\'s most liveable cities.',
      requirements: ['Civil Engineering degree', 'Infrastructure experience', 'Project management skills']
    }
  */

  const sectors = [
    { value: 'all', label: 'All Sectors' },
    { value: 'Healthcare', label: 'Healthcare' },
    { value: 'Engineering', label: 'Engineering' },
    { value: 'Education', label: 'Education' },
    { value: 'Hospitality', label: 'Hospitality' }
  ]

  const locations = [
    { value: 'all', label: 'All Locations' },
    { value: 'UK', label: 'United Kingdom' },
    { value: 'UAE', label: 'UAE' },
    { value: 'Australia', label: 'Australia' },
  ]

  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSector = selectedSector === 'all' || job.sector === selectedSector
    const matchesLocation = selectedLocation === 'all' || job.location.includes(selectedLocation)
    
    return matchesSearch && matchesSector && matchesLocation
  })

  const featuredJobs = jobListings.filter(job => job.featured)

  const jobsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        "name": "Healthcare Jobs Overseas",
        "description": "International healthcare job opportunities"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://nexusrecruitmentsolutions.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Jobs",
            "item": "https://nexusrecruitmentsolutions.com/jobs"
          }
        ]
      }
    ]
  }

  return (
    <div className="pt-20">
      <SEO 
        title="Healthcare Jobs Abroad - Nexus Recruitment"
        description="Browse international nursing & healthcare jobs. UK, Canada, Australia opportunities. Nexus Recruitment offers free visa support & ethical placement."
        keywords="overseas nursing jobs, international healthcare jobs, nurse jobs abroad, healthcare careers overseas, nursing opportunities UK, international nurse recruitment, overseas medical jobs, healthcare jobs with visa support, nursing jobs Europe, international healthcare careers"
        canonical="/jobs"
        structuredData={jobsSchema}
      />
      
      {/* Loading State */}
      {isLoading && (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Loading job opportunities...</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {error && !isLoading && (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="text-red-600 mb-4">
              <svg className="h-16 w-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Unable to Load Jobs</h2>
            <p className="text-gray-600 mb-6">{error}</p>
            <button 
              onClick={refetch} 
              className="btn-primary"
            >
              Try Again
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      {!isLoading && !error && (
        <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Healthcare Jobs Abroad - Nexus Recruitment Solutions
          </h1>
          
          {/* Job Search Bar */}
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search jobs, companies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                  />
                </div>
              </div>
              <div>
                <select
                  value={selectedSector}
                  onChange={(e) => setSelectedSector(e.target.value)}
                  className="w-full py-3 px-4 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                >
                  {sectors.map(sector => (
                    <option key={sector.value} value={sector.value}>
                      {sector.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full py-3 px-4 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                >
                  {locations.map(location => (
                    <option key={location.value} value={location.value}>
                      {location.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      {featuredJobs.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <div className="flex items-center mb-8">
              <Star className="h-6 w-6 text-yellow-500 mr-2" />
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">
                Featured Opportunities
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredJobs.map(job => (
                <JobCard key={job.id} job={job} featured={true} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Jobs */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">
              All Opportunities ({filteredJobs.length})
            </h2>
          </div>
          
          {filteredJobs.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">We are currently in the process of updating our job list. Please check this space again soon!</h3>
              {/*
              <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
              */
              }
              <p className="text-gray-600"></p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredJobs.map(job => (
                <JobCard 
                  key={job.id} 
                  job={job} 
                  featured={false} 
                  layout="horizontal"
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      {/*
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Don't See the Right Opportunity?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-100">
            Register with us and we'll notify you when positions matching your skills become available.
          </p>
          <button className="btn-secondary">
            Register for Job Alerts
          </button>
        </div>
      </section>
      */}
        </>
      )}
    </div>
  )
}

const JobCard = ({ job, featured, layout = 'vertical' }) => {
  const IconComponent = job.icon

  if (layout === 'horizontal') {
    return (
      <div className={`card hover:shadow-xl transition-all duration-300 ${featured ? 'ring-2 ring-yellow-400' : ''}`}>
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="flex items-start space-x-4 flex-grow">
            <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <IconComponent className="h-6 w-6 text-white" />
            </div>
            <div className="flex-grow min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                <div className="min-w-0 flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1 break-words">
                    {job.title}
                    {featured && <Star className="inline h-4 w-4 text-yellow-500 ml-2" />}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Building className="h-4 w-4 mr-1 flex-shrink-0" />
                    <span className="font-medium break-words">{job.company}</span>
                  </div>
                </div>
                <span className="text-sm text-gray-500 whitespace-nowrap sm:mt-0.5 flex-shrink-0">{job.posted}</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3 text-sm">
                <div className="flex items-start text-gray-600">
                  <MapPin className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0" />
                  <span className="break-words">{job.location}</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <DollarSign className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0" />
                  <span className="break-words">{job.salary}</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <Clock className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0" />
                  <span className="break-words">{job.type}</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-3">{job.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {job.requirements && job.requirements.slice(0, 2).map((req, index) => (
                  <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    {req}
                  </span>
                ))}
                {job.requirements && job.requirements.length > 2 && (
                  <span className="text-xs text-gray-500">+{job.requirements.length - 2} more</span>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col space-y-2 md:w-auto w-full">
            <Link 
              to="/contact"
              className="btn-primary flex items-center justify-center"
            >
              Apply Now
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
            <Link 
              to={`/jobs/${job.slug}`}
              className="btn-outline text-sm text-center"
            >
              View Full Details
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Vertical layout for featured jobs
  return (
    <div className={`card hover:shadow-xl transition-all duration-300 ${featured ? 'ring-2 ring-yellow-400' : ''}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg flex items-center justify-center flex-shrink-0">
          <IconComponent className="h-6 w-6 text-white" />
        </div>
        {featured && <Star className="h-5 w-5 text-yellow-500 flex-shrink-0" />}
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-2 break-words">{job.title}</h3>
      <p className="text-gray-600 font-medium mb-3 break-words">{job.company}</p>
      
      <div className="space-y-2 mb-4 text-sm">
        <div className="flex items-start text-gray-600">
          <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
          <span className="break-words">{job.location}</span>
        </div>
        <div className="flex items-start text-gray-600">
          <DollarSign className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
          <span className="break-words">{job.salary}</span>
        </div>
        <div className="flex items-start text-gray-600">
          <Clock className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
          <span className="break-words">{job.type}</span>
        </div>
      </div>
      
      <div className="flex flex-col space-y-2">
        <Link 
          to="/contact"
          className="btn-primary w-full flex items-center justify-center"
        >
          Apply Now
          <ExternalLink className="ml-2 h-4 w-4" />
        </Link>
        <Link 
          to={`/jobs/${job.slug}`}
          className="btn-outline w-full text-sm text-center"
        >
          View Details
        </Link>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <span className="text-xs text-gray-500">Posted {job.posted}</span>
      </div>
    </div>
  )
}

export default Jobs
