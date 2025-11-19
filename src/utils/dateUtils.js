/**
 * Calculate relative time from a date string
 * @param {string} dateString - ISO date string (e.g., "2025-11-12")
 * @returns {string} Human-readable relative time (e.g., "1 day ago", "2 weeks ago")
 */
export const getRelativeTime = (dateString) => {
  const postedDate = new Date(dateString)
  const now = new Date()
  const diffTime = Math.abs(now - postedDate)
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  
  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return '1 day ago'
  if (diffDays < 7) return `${diffDays} days ago`
  if (diffDays < 14) return '1 week ago'
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
  if (diffDays < 60) return '1 month ago'
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`
  return `${Math.floor(diffDays / 365)} year${Math.floor(diffDays / 365) > 1 ? 's' : ''} ago`
}

