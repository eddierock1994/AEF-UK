import { useState, useEffect } from 'react'

// In-memory cache for job listings
let cachedData = null
let cachedError = null
let cachedTimestamp = null
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

/**
 * Custom hook to fetch and cache job listings
 * @returns {Object} { jobListings, isLoading, error, refetch }
 */
export const useJobListings = () => {
  const [jobListings, setJobListings] = useState(cachedData || [])
  const [isLoading, setIsLoading] = useState(!cachedData)
  const [error, setError] = useState(cachedError)

  const fetchJobListings = async () => {
    // Check if cache is still valid
    if (cachedData && cachedTimestamp && Date.now() - cachedTimestamp < CACHE_DURATION) {
      setJobListings(cachedData)
      setIsLoading(false)
      setError(cachedError)
      return
    }

    try {
      setIsLoading(true)
      const response = await fetch('https://eddierock1994.github.io/AEF-UK/public/data/jobListings.json')
      
      if (!response.ok) {
        throw new Error('Failed to fetch job listings')
      }
      
      const data = await response.json()
      
      // Update cache
      cachedData = data
      cachedError = null
      cachedTimestamp = Date.now()
      
      setJobListings(data)
      setError(null)
    } catch (err) {
      console.error('Error fetching job listings:', err)
      const errorMessage = err.message
      
      // Cache error as well
      cachedError = errorMessage
      
      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchJobListings()
  }, [])

  return {
    jobListings,
    isLoading,
    error,
    refetch: fetchJobListings
  }
}

