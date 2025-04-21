import Link from 'next/link'
import { mentors } from '@/data/mentors'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { 
  Building2, 
  MapPin, 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Mail, 
  Phone,
  Linkedin, 
  Twitter,
  Globe,
  Languages,
  CheckCircle2,
  XCircle,
  Star,
  GraduationCap,
  CalendarRange
} from 'lucide-react'
// import MentorClientActions from './[id]/client-components'

// Generate static params for all mentor IDs
export function generateStaticParams() {
  return mentors.map((mentor) => ({
    id: mentor.id,
  }))
}

export default function MentorDetailPage({ params }: { params: { id: string } }) {
  const id = params.id
  
  const mentor = mentors.find(m => m.id === id)
  
  if (!mentor) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Mentor not found</h1>
        <p className="mb-8">We couldn&apos;t find the mentor you&apos;re looking for.</p>
        <Link href="/mentors">
          <Button>Back to Mentors</Button>
        </Link>
      </div>
    )
  }
  
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
  
  // Get availability grid
  const availabilityDays = [
    { day: 'Mon', available: mentor.availability.monday },
    { day: 'Tue', available: mentor.availability.tuesday },
    { day: 'Wed', available: mentor.availability.wednesday },
    { day: 'Thu', available: mentor.availability.thursday },
    { day: 'Fri', available: mentor.availability.friday },
    { day: 'Sat', available: mentor.availability.saturday },
    { day: 'Sun', available: mentor.availability.sunday },
  ]
  
  return (
    <div className="container py-8">
      <div className="mb-8">
        <Link href="/mentors" className="flex items-center text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Mentors
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2">
          <div className="bg-card rounded-xl border shadow-sm p-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center gap-6 pb-6 border-b">
              <Avatar className="h-24 w-24">
                <AvatarImage src={mentor.avatar} alt={mentor.name} />
                <AvatarFallback>{getInitials(mentor.name)}</AvatarFallback>
              </Avatar>
              
              <div>
                <h1 className="text-3xl font-bold">{mentor.name}</h1>
                <p className="text-xl text-muted-foreground flex items-center mt-1">
                  <Building2 className="h-5 w-5 mr-2" />
                  {mentor.title} at {mentor.company}
                </p>
                <p className="text-muted-foreground flex items-center mt-2">
                  <MapPin className="h-5 w-5 mr-2" />
                  {mentor.location}
                </p>
                
                <div className="flex gap-3 mt-4">
                  {mentor.linkedin && (
                    <a 
                      href={mentor.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {mentor.twitter && (
                    <a 
                      href={mentor.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                  {mentor.website && (
                    <a 
                      href={mentor.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Globe className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            {/* Bio Section */}
            <div className="py-6 border-b">
              <h2 className="text-xl font-semibold mb-4">About</h2>
              <p className="text-foreground/90 leading-relaxed whitespace-pre-line">
                {mentor.bio}
              </p>
            </div>
            
            {/* Areas of Expertise */}
            <div className="py-6 border-b">
              <h2 className="text-xl font-semibold mb-4">Areas of Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {mentor.expertise.map(expertise => (
                  <Badge 
                    key={expertise} 
                    variant={getVariantForExpertise(expertise)}
                    className="px-3 py-1 text-sm"
                  >
                    {expertise}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Languages and Experience */}
            <div className="py-6 border-b grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Languages</h2>
                <div className="flex flex-wrap gap-2">
                  {mentor.languages.map(language => (
                    <div 
                      key={language} 
                      className="flex items-center bg-muted px-3 py-1 rounded-full"
                    >
                      <Languages className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{language}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">Experience</h2>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 rounded-full p-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-lg font-medium">{mentor.experience} years</span>
                </div>
              </div>
            </div>
            
            {/* Availability */}
            <div className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Availability</h2>
              <div className="grid grid-cols-7 gap-2">
                {availabilityDays.map(({ day, available }) => (
                  <div 
                    key={day} 
                    className={`border rounded-md p-3 text-center ${
                      available 
                        ? 'bg-green-500/10 border-green-500/30' 
                        : 'bg-muted border-muted-foreground/20'
                    }`}
                  >
                    <p className="text-sm font-medium mb-2">{day}</p>
                    {available ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <XCircle className="h-5 w-5 text-muted-foreground mx-auto" />
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-4 p-4 bg-muted/40 rounded-lg border border-border/50">
                <p className="text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 inline-block mr-2" />
                  Sessions typically last 60 minutes. Mentors may have specific time slots available within their available days.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="space-y-6">
          {/* Booking Card */}
          <div className="bg-card rounded-xl border shadow-sm p-6 sticky top-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Book a Session</h2>
              <div className="flex items-center bg-muted px-3 py-1 rounded-full">
                <span className="font-bold text-primary">${mentor.hourlyRate}</span>
                <span className="text-sm text-muted-foreground ml-1">/hour</span>
              </div>
            </div>
            
            <div className="flex items-center mb-4">
              <Star className="h-5 w-5 text-yellow-500 mr-1" />
              <span className="font-medium">{mentor.rating}</span>
              <span className="text-muted-foreground ml-1">({mentor.reviewCount} reviews)</span>
            </div>
            
            <div className="space-y-4 mb-6">
              <Button className="w-full flex items-center gap-2 h-11">
                <Calendar className="h-5 w-5" />
                Book a Session
              </Button>
              
              <Button variant="outline" className="w-full flex items-center gap-2 h-11">
                <Mail className="h-5 w-5" />
                Contact {mentor.name.split(' ')[0]}
              </Button>
            </div>
            
            <div className="bg-muted/60 rounded-lg p-4 mt-4 space-y-3">
              <div className="flex items-center gap-2">
                <CalendarRange className="h-5 w-5 text-muted-foreground" />
                <p className="text-sm">Future sessions can be rescheduled up to 24 hours before.</p>
              </div>
              
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <p className="text-sm">100% satisfaction guarantee</p>
              </div>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="bg-card rounded-xl border shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-muted-foreground mr-3" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a 
                    href={`mailto:${mentor.email}`} 
                    className="text-primary hover:underline"
                  >
                    {mentor.email}
                  </a>
                </div>
              </div>
              
              {mentor.phone && (
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-muted-foreground mr-3" />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a 
                      href={`tel:${mentor.phone}`} 
                      className="text-primary hover:underline"
                    >
                      {mentor.phone}
                    </a>
                  </div>
                </div>
              )}
              
              {mentor.website && (
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-muted-foreground mr-3" />
                  <div>
                    <p className="text-sm text-muted-foreground">Website</p>
                    <a 
                      href={mentor.website}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-primary hover:underline"
                    >
                      {mentor.website.replace(/(^\w+:|^)\/\//, '')}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}