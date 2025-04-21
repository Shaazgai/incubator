"use client"

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { investors } from '@/data/investors'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { 
  Building2, 
  MapPin, 
  Briefcase, 
  DollarSign, 
  ArrowLeft, 
  Mail, 
  Phone,
  Linkedin, 
  Twitter,
  Globe,
  User
} from 'lucide-react'

export default function InvestorDetailPage() {
  const params = useParams()
  const id = params.id as string
  
  const investor = investors.find(i => i.id === id)
  
  if (!investor) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Investor not found</h1>
        <p className="mb-8">We couldn&apos;t find the investor you&apos;re looking for.</p>
        <Link href="/investors">
          <Button>Back to Investors</Button>
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
  
  // Format money in USD
  const formatMoney = (amount: number) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`
    }
    return `$${amount}`
  }
  
  // Determine variant based on interest
  const getVariantForInterest = (interest: string) => {
    const map: Record<string, any> = {
      'Fintech': 'finance',
      'SaaS': 'tech',
      'Clean Energy': 'success',
      'AgTech': 'success',
      'E-commerce': 'tech',
      'Logistics': 'warning',
      'EdTech': 'education',
      'Healthcare': 'health',
      'Mining Tech': 'warning',
      'Consumer Apps': 'tech',
      'Sustainability': 'success',
      'Mobile Apps': 'tech',
      'Consumer Tech': 'tech',
      'Creative Economy': 'info',
      'Smart City': 'tech',
      'Tourism Tech': 'info'
    }
    
    return map[interest] || 'default'
  }
  
  return (
    <div className="container py-8">
      <div className="mb-8">
        <Link href="/investors" className="flex items-center text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Investors
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2">
          <div className="bg-card rounded-xl border shadow-sm p-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center gap-6 pb-6 border-b">
              <Avatar className="h-24 w-24">
                <AvatarImage src={investor.avatar} alt={investor.name} />
                <AvatarFallback>{getInitials(investor.name)}</AvatarFallback>
              </Avatar>
              
              <div>
                <h1 className="text-3xl font-bold">{investor.name}</h1>
                <p className="text-xl text-muted-foreground flex items-center mt-1">
                  <Building2 className="h-5 w-5 mr-2" />
                  {investor.title} at {investor.company}
                </p>
                <p className="text-muted-foreground flex items-center mt-2">
                  <MapPin className="h-5 w-5 mr-2" />
                  {investor.location}
                </p>
                
                <div className="flex gap-3 mt-4">
                  {investor.linkedin && (
                    <a 
                      href={investor.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {investor.twitter && (
                    <a 
                      href={investor.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                  {investor.website && (
                    <a 
                      href={investor.website} 
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
                {investor.bio}
              </p>
            </div>
            
            {/* Investment Focus */}
            <div className="py-6 border-b grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Investment Focus</h2>
                <div className="flex flex-wrap gap-2">
                  {investor.interests.map(interest => (
                    <Badge 
                      key={interest} 
                      variant={getVariantForInterest(interest)}
                      className="px-3 py-1 text-sm"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">Investment Stages</h2>
                <div className="flex flex-wrap gap-2">
                  {investor.investmentStages.map(stage => (
                    <Badge key={stage} variant="secondary" className="px-3 py-1 text-sm">
                      {stage}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Portfolio Companies */}
            <div className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Portfolio Companies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {investor.portfolioCompanies.map((company, index) => (
                  <div 
                    key={index} 
                    className="bg-muted/40 rounded-lg p-4 border border-border/50"
                  >
                    <div className="flex items-center">
                      <div className="bg-primary/10 rounded-full p-2 mr-3 flex-shrink-0">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">{company.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {company.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="space-y-6">
          {/* Contact Card */}
          <div className="bg-card rounded-xl border shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-muted-foreground mr-3" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a 
                    href={`mailto:${investor.email}`} 
                    className="text-primary hover:underline"
                  >
                    {investor.email}
                  </a>
                </div>
              </div>
              
              {investor.phone && (
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-muted-foreground mr-3" />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a 
                      href={`tel:${investor.phone}`} 
                      className="text-primary hover:underline"
                    >
                      {investor.phone}
                    </a>
                  </div>
                </div>
              )}
              
              {investor.website && (
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-muted-foreground mr-3" />
                  <div>
                    <p className="text-sm text-muted-foreground">Website</p>
                    <a 
                      href={investor.website}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-primary hover:underline"
                    >
                      {investor.website.replace(/(^\w+:|^)\/\//, '')}
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-6 space-y-3">
              <Button className="w-full">Contact Investor</Button>
              <Button variant="outline" className="w-full">Request Introduction</Button>
            </div>
          </div>
          
          {/* Investment Information */}
          <div className="bg-card rounded-xl border shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Investment Details</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <p className="text-muted-foreground">Investment Range</p>
                <p className="font-medium">
                  {formatMoney(investor.minInvestment)} - {formatMoney(investor.maxInvestment)}
                </p>
              </div>
              
              <div className="flex justify-between">
                <p className="text-muted-foreground">Preferred Stages</p>
                <p className="font-medium">{investor.investmentStages.join(', ')}</p>
              </div>
              
              <div className="pt-4 border-t">
                <div className="flex items-center gap-3 text-primary mb-3">
                  <DollarSign className="h-5 w-5" />
                  <h3 className="font-semibold">Ready to pitch?</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Prepare your documents and request a meeting with {investor.name}.
                </p>
                <Button className="w-full">Prepare Pitch</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}