"use client"

import { useState } from 'react'
import Link from 'next/link'
import { InvestorType } from '@/types'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Building2, 
  MapPin, 
  DollarSign, 
  ExternalLink, 
  Mail, 
  Linkedin, 
  Twitter,
  Globe
} from 'lucide-react'

interface InvestorCardProps {
  investor: InvestorType
  compact?: boolean
}

export default function InvestorCard({ investor, compact = false }: InvestorCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  
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
  
  if (compact) {
    return (
      <div className="flex items-center p-4 bg-card rounded-lg border shadow-sm hover:shadow-md transition-all duration-200">
        <Avatar className="h-12 w-12">
          <AvatarImage src={investor.avatar} alt={investor.name} />
          <AvatarFallback>{getInitials(investor.name)}</AvatarFallback>
        </Avatar>
        <div className="ml-4">
          <h3 className="font-medium">{investor.name}</h3>
          <p className="text-sm text-muted-foreground">{investor.company}</p>
        </div>
        <Link href={`/investors/${investor.id}`} className="ml-auto">
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
              <AvatarImage src={investor.avatar} alt={investor.name} />
              <AvatarFallback>{getInitials(investor.name)}</AvatarFallback>
            </Avatar>
            <div className="ml-4">
              <h3 className="text-xl font-medium">{investor.name}</h3>
              <p className="text-muted-foreground flex items-center">
                <Building2 className="h-4 w-4 mr-1" />
                {investor.title} at {investor.company}
              </p>
              <p className="text-sm text-muted-foreground flex items-center mt-1">
                <MapPin className="h-4 w-4 mr-1" />
                {investor.location}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {investor.linkedin && (
              <a href={investor.linkedin} target="_blank" rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            )}
            {investor.twitter && (
              <a href={investor.twitter} target="_blank" rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            )}
            {investor.website && (
              <a href={investor.website} target="_blank" rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        
        <div className="mt-6">
          <div className="flex items-center my-3">
            <DollarSign className="h-5 w-5 text-muted-foreground mr-2" />
            <span className="text-sm font-medium">
              {formatMoney(investor.minInvestment)} - {formatMoney(investor.maxInvestment)}
            </span>
          </div>
          
          <div className="mt-4">
            <p className="font-medium mb-2">Investment Focus</p>
            <div className="flex flex-wrap gap-2">
              {investor.interests.map(interest => (
                <Badge 
                  key={interest} 
                  variant={getVariantForInterest(interest)}
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="mt-4">
            <p className="font-medium mb-2">Investment Stages</p>
            <div className="flex flex-wrap gap-2">
              {investor.investmentStages.map(stage => (
                <Badge key={stage} variant="secondary">{stage}</Badge>
              ))}
            </div>
          </div>
          
          <div className={`mt-4 ${isExpanded ? 'block' : 'line-clamp-2'}`}>
            <p className="text-sm">{investor.bio}</p>
          </div>
          
          {investor.bio.length > 150 && (
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
        <Link href={`/investors/${investor.id}`}>
          <Button variant="outline" className="flex items-center gap-2">
            View Full Profile
            <ExternalLink className="h-4 w-4" />
          </Button>
        </Link>
        
        <a href={`mailto:${investor.email}`}>
          <Button variant="default" className="flex items-center gap-2">
            Contact
            <Mail className="h-4 w-4" />
          </Button>
        </a>
      </div>
    </div>
  )
}

// "use client"

// import { useState } from 'react'
// import Link from 'next/link'
// import { InvestorType } from '@/types'
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
// import { Badge } from '@/components/ui/badge'
// import { Button } from '@/components/ui/button'
// import { 
//   Building2, 
//   MapPin, 
//   DollarSign, 
//   ExternalLink, 
//   Mail, 
//   Linkedin, 
//   Twitter,
//   Globe
// } from 'lucide-react'

// interface InvestorCardProps {
//   investor: InvestorType
//   compact?: boolean
// }

// export default function InvestorCard({ investor, compact = false }: InvestorCardProps) {
//   const [isExpanded, setIsExpanded] = useState(false)
//   const usdToMntRate = 3500; // 1 USD = 3500 MNT жишээ хөрвүүлгийн ханш
  
//   // Нэрийн эхний үсгүүдийг авах
//   const getInitials = (name: string) => {
//     return name
//       .split(' ')
//       .map(part => part[0])
//       .join('')
//       .toUpperCase()
//   }
  
//   // Мөнгийг төгрөгөөр харуулах
//   const formatMoney = (amount: number) => {
//     const amountMnt = amount * usdToMntRate;
    
//     if (amountMnt >= 1000000000) {
//       return `${(amountMnt / 1000000000).toFixed(1)} тэрбум ₮`
//     } else if (amountMnt >= 1000000) {
//       return `${(amountMnt / 1000000).toFixed(0)} сая ₮`
//     } else if (amountMnt >= 1000) {
//       return `${(amountMnt / 1000).toFixed(0)} мянган ₮`
//     }
//     return `${amountMnt} ₮`
//   }
  
//   // Сонирхлын чиглэлд тохирох хувилбар сонгох
//   const getVariantForInterest = (interest: string) => {
//     const map: Record<string, any> = {
//       'Fintech': 'finance',
//       'SaaS': 'tech',
//       'Clean Energy': 'success',
//       'AgTech': 'success',
//       'E-commerce': 'tech',
//       'Logistics': 'warning',
//       'EdTech': 'education',
//       'Healthcare': 'health',
//       'Mining Tech': 'warning',
//       'Consumer Apps': 'tech',
//       'Sustainability': 'success',
//       'Mobile Apps': 'tech',
//       'Consumer Tech': 'tech',
//       'Creative Economy': 'info',
//       'Smart City': 'tech',
//       'Tourism Tech': 'info'
//     }
    
//     return map[interest] || 'default'
//   }
  
//   if (compact) {
//     return (
//       <div className="flex items-center p-4 bg-card rounded-lg border shadow-sm hover:shadow-md transition-all duration-200">
//         <Avatar className="h-12 w-12">
//           <AvatarImage src={investor.avatar} alt={investor.name} />
//           <AvatarFallback>{getInitials(investor.name)}</AvatarFallback>
//         </Avatar>
//         <div className="ml-4">
//           <h3 className="font-medium">{investor.name}</h3>
//           <p className="text-sm text-muted-foreground">{investor.company}</p>
//         </div>
//         <Link href={`/investors/${investor.id}`} className="ml-auto">
//           <Button size="sm" variant="outline">Профайл харах</Button>
//         </Link>
//       </div>
//     )
//   }
  
//   return (
//     <div className="bg-card rounded-xl border shadow-sm hover:shadow-md transition-all duration-200">
//       <div className="p-6">
//         <div className="flex items-start justify-between mb-4">
//           <div className="flex items-center">
//             <Avatar className="h-16 w-16">
//               <AvatarImage src={investor.avatar} alt={investor.name} />
//               <AvatarFallback>{getInitials(investor.name)}</AvatarFallback>
//             </Avatar>
//             <div className="ml-4">
//               <h3 className="text-xl font-medium">{investor.name}</h3>
//               <p className="text-muted-foreground flex items-center">
//                 <Building2 className="h-4 w-4 mr-1" />
//                 {investor.title}, {investor.company}
//               </p>
//               <p className="text-sm text-muted-foreground flex items-center mt-1">
//                 <MapPin className="h-4 w-4 mr-1" />
//                 {investor.location}
//               </p>
//             </div>
//           </div>
//           <div className="flex items-center space-x-2">
//             {investor.linkedin && (
//               <a href={investor.linkedin} target="_blank" rel="noopener noreferrer" 
//                 className="text-muted-foreground hover:text-foreground transition-colors">
//                 <Linkedin className="h-5 w-5" />
//               </a>
//             )}
//             {investor.twitter && (
//               <a href={investor.twitter} target="_blank" rel="noopener noreferrer"
//                 className="text-muted-foreground hover:text-foreground transition-colors">
//                 <Twitter className="h-5 w-5" />
//               </a>
//             )}
//             {investor.website && (
//               <a href={investor.website} target="_blank" rel="noopener noreferrer"
//                 className="text-muted-foreground hover:text-foreground transition-colors">
//                 <Globe className="h-5 w-5" />
//               </a>
//             )}
//           </div>
//         </div>
        
//         <div className="mt-6">
//           <div className="flex items-center my-3">
//             <DollarSign className="h-5 w-5 text-muted-foreground mr-2" />
//             <span className="text-sm font-medium">
//               {formatMoney(investor.minInvestment)} - {formatMoney(investor.maxInvestment)}
//             </span>
//           </div>
          
//           <div className="mt-4">
//             <p className="font-medium mb-2">Хөрөнгө оруулалтын чиглэл</p>
//             <div className="flex flex-wrap gap-2">
//               {investor.interests.map(interest => (
//                 <Badge 
//                   key={interest} 
//                   variant={getVariantForInterest(interest)}
//                 >
//                   {interest}
//                 </Badge>
//               ))}
//             </div>
//           </div>
          
//           <div className="mt-4">
//             <p className="font-medium mb-2">Хөрөнгө оруулалтын үе шат</p>
//             <div className="flex flex-wrap gap-2">
//               {investor.investmentStages.map(stage => (
//                 <Badge key={stage} variant="secondary">{stage}</Badge>
//               ))}
//             </div>
//           </div>
          
//           <div className={`mt-4 ${isExpanded ? 'block' : 'line-clamp-2'}`}>
//             <p className="text-sm">{investor.bio}</p>
//           </div>
          
//           {investor.bio.length > 150 && (
//             <button 
//               onClick={() => setIsExpanded(!isExpanded)} 
//               className="text-sm text-primary mt-2 hover:underline"
//             >
//               {isExpanded ? 'Хураангуй унших' : 'Дэлгэрэнгүй унших'}
//             </button>
//           )}
//         </div>
//       </div>
      
//       <div className="border-t px-6 py-4 flex justify-between items-center bg-muted/50 rounded-b-xl">
//         <Link href={`/investors/${investor.id}`}>
//           <Button variant="outline" className="flex items-center gap-2">
//             Бүрэн профайл харах
//             <ExternalLink className="h-4 w-4" />
//           </Button>
//         </Link>
        
//         <a href={`mailto:${investor.email}`}>
//           <Button variant="default" className="flex items-center gap-2">
//             Холбогдох
//             <Mail className="h-4 w-4" />
//           </Button>
//         </a>
//       </div>
//     </div>
//   )
// }