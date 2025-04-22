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
} from 'lucide-react'

export default function InvestorDetailPage() {
  const params = useParams()
  const id = params.id as string
  
  const investor = investors.find(i => i.id === id)
  
  if (!investor) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Хөрөнгө оруулагч олдсонгүй</h1>
        <p className="mb-8">Таны хайж байгаа хөрөнгө оруулагчийг олж чадсангүй.</p>
        <Link href="/investors">
          <Button>Хөрөнгө оруулагчид руу буцах</Button>
        </Link>
      </div>
    )
  }
  
  // Аватарын нэрийн үсгийн товчлол авах
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
  }
  
  // Мөнгөн дүнг төгрөгөөр форматлах
  const formatMoney = (amount: number) => {
    // USD-аас MNT руу хөрвүүлэх (ойролцоогоор 1 USD = 3500 MNT гэж тооцъё)
    const mntAmount = amount * 3500
    
    if (mntAmount >= 1000000000) {
      return `${(mntAmount / 1000000000).toFixed(1)} тэрбум ₮`
    } else if (mntAmount >= 1000000) {
      return `${(mntAmount / 1000000).toFixed(0)} сая ₮`
    } else if (mntAmount >= 1000) {
      return `${(mntAmount / 1000).toFixed(0)} мянга ₮`
    }
    return `${mntAmount} ₮`
  }
  
  // Сонирхлын төрлөөр харагдах байдлыг тодорхойлох
  const getVariantForInterest = (interest: string) => {
    const map: Record<string, any> = {
      'Финтек': 'finance',
      'SaaS': 'tech',
      'Цэвэр эрчим хүч': 'success',
      'Хөдөө аж ахуйн технологи': 'success',
      'Цахим худалдаа': 'tech',
      'Логистик': 'warning',
      'Боловсролын технологи': 'education',
      'Эрүүл мэнд': 'health',
      'Уул уурхайн технологи': 'warning',
      'Хэрэглэгчийн аппликейшн': 'tech',
      'Тогтвортой хөгжил': 'success',
      'Мобайл аппликейшн': 'tech',
      'Хэрэглэгчийн технологи': 'tech',
      'Бүтээлч эдийн засаг': 'info',
      'Ухаалаг хот': 'tech',
      'Аялал жуулчлалын технологи': 'info'
    }
    
    return map[interest] || 'default'
  }
  
  return (
    <div className="container py-8">
      <div className="mb-8">
        <Link href="/investors" className="flex items-center text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Хөрөнгө оруулагчид руу буцах
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Зүүн Талын Хэсэг */}
        <div className="lg:col-span-2">
          <div className="bg-card rounded-xl border shadow-sm p-8">
            {/* Толгой хэсэг */}
            <div className="flex flex-col md:flex-row md:items-center gap-6 pb-6 border-b">
              <Avatar className="h-24 w-24">
                <AvatarImage src={investor.avatar} alt={investor.name} />
                <AvatarFallback>{getInitials(investor.name)}</AvatarFallback>
              </Avatar>
              
              <div>
                <h1 className="text-3xl font-bold">{investor.name}</h1>
                <p className="text-xl text-muted-foreground flex items-center mt-1">
                  <Building2 className="h-5 w-5 mr-2" />
                  {investor.title} - {investor.company}
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
            
            {/* Намтар хэсэг */}
            <div className="py-6 border-b">
              <h2 className="text-xl font-semibold mb-4">Тухай</h2>
              <p className="text-foreground/90 leading-relaxed whitespace-pre-line">
                {investor.bio}
              </p>
            </div>
            
            {/* Хөрөнгө оруулалтын чиглэл */}
            <div className="py-6 border-b grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Хөрөнгө оруулалтын чиглэл</h2>
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
                <h2 className="text-xl font-semibold mb-4">Хөрөнгө оруулалтын үе шатууд</h2>
                <div className="flex flex-wrap gap-2">
                  {investor.investmentStages.map(stage => (
                    <Badge key={stage} variant="secondary" className="px-3 py-1 text-sm">
                      {stage}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Багцын компаниуд */}
            <div className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Багцын компаниуд</h2>
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
        
        {/* Баруун Талын Хэсэг */}
        <div className="space-y-6">
          {/* Холбоо барих хэсэг */}
          <div className="bg-card rounded-xl border shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Холбоо барих мэдээлэл</h2>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-muted-foreground mr-3" />
                <div>
                  <p className="text-sm text-muted-foreground">Имэйл</p>
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
                    <p className="text-sm text-muted-foreground">Утас</p>
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
                    <p className="text-sm text-muted-foreground">Вэбсайт</p>
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
              <Button className="w-full">Хөрөнгө оруулагчтай холбогдох</Button>
              <Button variant="outline" className="w-full">Танилцуулга хүсэх</Button>
            </div>
          </div>
          
          {/* Хөрөнгө оруулалтын мэдээлэл */}
          <div className="bg-card rounded-xl border shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Хөрөнгө оруулалтын дэлгэрэнгүй</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <p className="text-muted-foreground">Хөрөнгө оруулалтын хэмжээ</p>
                <p className="font-medium">
                  {formatMoney(investor.minInvestment)} - {formatMoney(investor.maxInvestment)}
                </p>
              </div>
              
              <div className="flex justify-between">
                <p className="text-muted-foreground">Дуртай үе шатууд</p>
                <p className="font-medium">{investor.investmentStages.join(', ')}</p>
              </div>
              
              <div className="pt-4 border-t">
                <div className="flex items-center gap-3 text-primary mb-3">
                  <DollarSign className="h-5 w-5" />
                  <h3 className="font-semibold">Танилцуулах бэлэн үү?</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Баримт бичгээ бэлтгээд {investor.name}-тай уулзалт товлоорой.
                </p>
                <Button className="w-full">Танилцуулга бэлтгэх</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}