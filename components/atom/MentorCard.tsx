"use client"

import { useState } from 'react'
import Link from 'next/link'
import { MentorType } from '@/types'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Building2, 
  MapPin, 
  Star, 
  Clock, 
  ExternalLink, 
  Calendar, 
  Mail, 
  Linkedin, 
  Twitter,
  Globe,
  Languages
} from 'lucide-react'

interface MentorCardProps {
  mentor: MentorType
  compact?: boolean
}

export default function MentorCard({ mentor, compact = false }: MentorCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
  }
  
  // Format expertise badges
  const getVariantForExpertise = (expertise: string) => {
    const map: Record<string, any> = {
      'Product Strategy': 'tech',
      'Go-to-Market': 'info',
      'Fundraising': 'finance',
      'Team Building': 'default',
      'Digital Marketing': 'info',
      'Social Media': 'info',
      'SEO': 'tech',
      'Growth Hacking': 'success',
      'Technical Architecture': 'tech',
      'Cloud Services': 'tech',
      'Full-Stack Development': 'tech',
      'Tech Team Building': 'tech',
      'Financial Modeling': 'finance',
      'Pitch Deck Creation': 'warning',
      'Valuation': 'finance',
      'Investor Relations': 'info',
      'Business Law': 'secondary',
      'IP Protection': 'warning',
      'Compliance': 'destructive',
      'International Business': 'info'
    }
    
    return map[expertise] || 'default'
  }
  
  // Get available days as string
  const getAvailableDays = () => {
    const days = []
    if (mentor.availability.monday) days.push('Mon')
    if (mentor.availability.tuesday) days.push('Tue')
    if (mentor.availability.wednesday) days.push('Wed')
    if (mentor.availability.thursday) days.push('Thu')
    if (mentor.availability.friday) days.push('Fri')
    if (mentor.availability.saturday) days.push('Sat')
    if (mentor.availability.sunday) days.push('Sun')
    
    return days.join(', ')
  }
  
  if (compact) {
    return (
      <div className="flex items-center p-4 bg-card rounded-lg border shadow-sm hover:shadow-md transition-all duration-200">
        <Avatar className="h-12 w-12">
          <AvatarImage src={mentor.avatar} alt={mentor.name} />
          <AvatarFallback>{getInitials(mentor.name)}</AvatarFallback>
        </Avatar>
        <div className="ml-4">
          <h3 className="font-medium">{mentor.name}</h3>
          <p className="text-sm text-muted-foreground">{mentor.title}</p>
        </div>
        <Link href={`/mentors/${mentor.id}`} className="ml-auto">
          <Button size="sm" variant="outline">View Profile</Button>
        </Link>
      </div>
    )
  }
  
  return (
    <div className="bg-card rounded-xl border shadow-sm hover:shadow-md transition-all duration-200">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <Avatar className="h-16 w-16">
              <AvatarImage src={mentor.avatar} alt={mentor.name} />
              <AvatarFallback>{getInitials(mentor.name)}</AvatarFallback>
            </Avatar>
            <div className="ml-4">
              <h3 className="text-xl font-medium">{mentor.name}</h3>
              <p className="text-muted-foreground flex items-center">
                <Building2 className="h-4 w-4 mr-1" />
                {mentor.title} at {mentor.company}
              </p>
              <p className="text-sm text-muted-foreground flex items-center mt-1">
                <MapPin className="h-4 w-4 mr-1" />
                {mentor.location}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {mentor.linkedin && (
              <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            )}
            {mentor.twitter && (
              <a href={mentor.twitter} target="_blank" rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            )}
            {mentor.website && (
              <a href={mentor.website} target="_blank" rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-500 mr-1" />
              <span className="font-medium">{mentor.rating}</span>
              <span className="text-muted-foreground ml-1">({mentor.reviewCount} reviews)</span>
            </div>
            <div className="flex items-center bg-muted px-3 py-1 rounded-full">
              <span className="font-bold text-primary">${mentor.hourlyRate}</span>
              <span className="text-sm text-muted-foreground ml-1">/hour</span>
            </div>
          </div>
          
          <div className="flex items-center mt-3">
            <Clock className="h-5 w-5 text-muted-foreground mr-2" />
            <span className="text-sm">Available: {getAvailableDays()}</span>
          </div>
          
          <div className="flex items-center mt-3">
            <Languages className="h-5 w-5 text-muted-foreground mr-2" />
            <span className="text-sm">{mentor.languages.join(', ')}</span>
          </div>
          
          <div className="mt-4">
            <p className="font-medium mb-2">Areas of Expertise</p>
            <div className="flex flex-wrap gap-2">
              {mentor.expertise.map(skill => (
                <Badge 
                  key={skill} 
                  variant={getVariantForExpertise(skill)}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className={`mt-4 ${isExpanded ? 'block' : 'line-clamp-2'}`}>
            <p className="text-sm">{mentor.bio}</p>
          </div>
          
          {mentor.bio.length > 150 && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)} 
              className="text-sm text-primary mt-2 hover:underline"
            >
              {isExpanded ? 'Read less' : 'Read more'}
            </button>
          )}
        </div>
      </div>
      
      <div className="border-t px-6 py-4 flex justify-between items-center bg-muted/50 rounded-b-xl">
        <Link href={`/mentors/${mentor.id}`}>
          <Button variant="outline" className="flex items-center gap-2">
            View Full Profile
            <ExternalLink className="h-4 w-4" />
          </Button>
        </Link>
        
        <Button variant="default" className="flex items-center gap-2">
          Book Session
          <Calendar className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}