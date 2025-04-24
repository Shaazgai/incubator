// 'use client'

// import { useState, useMemo } from 'react'
// // import Link from 'next/link'
// import { investors } from '@/data/investors'
// import InvestorCard from '@/components/atom/InvestorCard'
// import SearchAndFilterBar from '@/components/atom/SearchAndFilterBar'
// import PageHeader from '@/components/atom/PageHeader'
// import { RequestIntroductionDialog } from '@/components/atom/RequestIntroductionDialog'
// import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
// import { Button } from '@/components/ui/button'
// import { UserRound, Users, Briefcase } from 'lucide-react'
// import ComingSoonContent from '@/components/comingSoon'

// // Define filter options
// const filterOptions = [
//   // Investment stage options
//   { label: 'Pre-seed', value: 'Pre-seed', group: 'Investment Stage' },
//   { label: 'Seed', value: 'Seed', group: 'Investment Stage' },
//   { label: 'Series A', value: 'Series A', group: 'Investment Stage' },
//   { label: 'Series B', value: 'Series B', group: 'Investment Stage' },
//   { label: 'Growth', value: 'Growth', group: 'Investment Stage' },
  
//   // Investment interests options
//   { label: 'Fintech', value: 'Fintech', group: 'Industry Focus' },
//   { label: 'SaaS', value: 'SaaS', group: 'Industry Focus' },
//   { label: 'Clean Energy', value: 'Clean Energy', group: 'Industry Focus' },
//   { label: 'AgTech', value: 'AgTech', group: 'Industry Focus' },
//   { label: 'E-commerce', value: 'E-commerce', group: 'Industry Focus' },
//   { label: 'Logistics', value: 'Logistics', group: 'Industry Focus' },
//   { label: 'EdTech', value: 'EdTech', group: 'Industry Focus' },
//   { label: 'Healthcare', value: 'Healthcare', group: 'Industry Focus' },
//   { label: 'Mobile Apps', value: 'Mobile Apps', group: 'Industry Focus' },
//   { label: 'Consumer Tech', value: 'Consumer Tech', group: 'Industry Focus' },
  
//   // Investment size options
//   { label: '$10k - $100k', value: 'small', group: 'Investment Size' },
//   { label: '$100k - $500k', value: 'medium', group: 'Investment Size' },
//   { label: '$500k - $2M', value: 'large', group: 'Investment Size' },
//   { label: '$2M+', value: 'xlarge', group: 'Investment Size' },
  
//   // Location options
//   { label: 'Ulaanbaatar', value: 'Ulaanbaatar', group: 'Location' },
//   { label: 'International', value: 'International', group: 'Location' }
// ]

// export default function InvestorsPage() {
//   const [searchTerm, setSearchTerm] = useState('')
//   const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({})
//   const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  
//   const handleSearch = (term: string) => {
//     setSearchTerm(term)
//   }
  
//   const handleFilterChange = (filters: Record<string, string[]>) => {
//     setActiveFilters(filters)
//   }
  
//   const filteredInvestors = useMemo(() => {
//     return investors.filter(investor => {
//       // Apply search
//       if (searchTerm && !investor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//           !investor.company.toLowerCase().includes(searchTerm.toLowerCase()) &&
//           !investor.bio.toLowerCase().includes(searchTerm.toLowerCase())) {
//         return false
//       }
      
//       // Apply active filters
//       for (const [group, values] of Object.entries(activeFilters)) {
//         if (values.length === 0) continue
        
//         if (group === 'Investment Stage') {
//           if (!values.some(value => investor.investmentStages.includes(value as any))) {
//             return false
//           }
//         }
        
//         if (group === 'Industry Focus') {
//           if (!values.some(value => investor.interests.includes(value))) {
//             return false
//           }
//         }
        
//         if (group === 'Investment Size') {
//           const matchesSize = values.some(value => {
//             if (value === 'small' && investor.maxInvestment <= 100000) return true
//             if (value === 'medium' && investor.minInvestment >= 100000 && investor.maxInvestment <= 500000) return true
//             if (value === 'large' && investor.minInvestment >= 500000 && investor.maxInvestment <= 2000000) return true
//             if (value === 'xlarge' && investor.minInvestment >= 2000000) return true
//             return false
//           })
          
//           if (!matchesSize) return false
//         }
        
//         if (group === 'Location') {
//           const isInternational = !investor.location.includes('Ulaanbaatar')
//           const matchesLocation = values.some(value => {
//             if (value === 'Ulaanbaatar' && investor.location.includes('Ulaanbaatar')) return true
//             if (value === 'International' && isInternational) return true
//             return false
//           })
          
//           if (!matchesLocation) return false
//         }
//       }
      
//       return true
//     })
//   }, [investors, searchTerm, activeFilters])
  
//   return (
   
//     <>
//      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <PageHeader
//         title="Investors"
//         description="Connect with investors interested in supporting Mongolian startups"
//         icon={<Briefcase className="h-6 w-6" />}
//         action={<RequestIntroductionDialog />}
//       />
      
//       <div className="mb-8">
//         <SearchAndFilterBar
//           placeholder="Search investors by name, company or area of interest..."
//           onSearch={handleSearch}
//           onFilterChange={handleFilterChange}
//           filterOptions={filterOptions}
//         />
//       </div>
      
//       <div className="mb-8 flex items-center justify-between">
//         <div className="text-sm text-muted-foreground">
//           Showing {filteredInvestors.length} investors
//         </div>
        
//         <div className="flex items-center gap-4">
//           <Tabs defaultValue="all">
//             <TabsList>
//               <TabsTrigger value="all">All</TabsTrigger>
//               <TabsTrigger value="angels">Angel Investors</TabsTrigger>
//               <TabsTrigger value="vc">VC Firms</TabsTrigger>
//             </TabsList>
//           </Tabs>
          
//           <div className="flex items-center border rounded-md p-1">
//             <Button
//               variant={viewMode === 'grid' ? 'default' : 'ghost'}
//               size="sm"
//               className="h-8 w-8 p-0"
//               onClick={() => setViewMode('grid')}
//             >
//               <Users className="h-4 w-4" />
//             </Button>
//             <Button
//               variant={viewMode === 'list' ? 'default' : 'ghost'}
//               size="sm"
//               className="h-8 w-8 p-0"
//               onClick={() => setViewMode('list')}
//             >
//               <UserRound className="h-4 w-4" />
//             </Button>
//           </div>
//         </div>
//       </div>
      
//       {filteredInvestors.length === 0 ? (
//         <div className="flex flex-col items-center justify-center p-12 text-center">
//           <Briefcase className="h-16 w-16 text-muted-foreground mb-4" />
//           <h3 className="text-xl font-medium mb-2">No investors found</h3>
//           <p className="text-muted-foreground max-w-md">
//             We couldn&apos;t find any investors matching your search criteria. Try adjusting your filters or search term.
//           </p>
//           <Button 
//             variant="outline" 
//             className="mt-4"
//             onClick={() => {
//               setSearchTerm('')
//               setActiveFilters({})
//             }}
//           >
//             Clear Filters
//           </Button>
//         </div>
//       ) : (
//         <div className={viewMode === 'grid' 
//           ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6" 
//           : "space-y-4"
//         }>
//           {filteredInvestors.map(investor => (
//             <div key={investor.id}>
//               {viewMode === 'grid' ? (
//                 <InvestorCard investor={investor} />
//               ) : (
//                 <InvestorCard investor={investor} compact />
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//     {/* <ComingSoonContent/> */}
//     </>
//   )
// }



'use client'

import { useState, useMemo } from 'react'
// import Link from 'next/link'
import { investors } from '@/data/investors'
import InvestorCard from '@/components/atom/InvestorCard'
import SearchAndFilterBar from '@/components/atom/SearchAndFilterBar'
import PageHeader from '@/components/atom/PageHeader'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { UserRound, Users, Briefcase } from 'lucide-react'
import ComingSoonContent from '@/components/comingSoon'
import { RequestIntroductionDialog } from '@/components/atom/RequestIntroductionDialog'

// Шүүлтүүрийн сонголтуудыг тодорхойлох
const filterOptions = [
  // Хөрөнгө оруулалтын үе шатны сонголтууд
  { label: 'Үр өмнөх', value: 'Үр өмнөх', group: 'Хөрөнгө оруулалтын үе шат' },
  { label: 'Үр', value: 'Үр', group: 'Хөрөнгө оруулалтын үе шат' },
  { label: 'А Цуврал', value: 'А Цуврал', group: 'Хөрөнгө оруулалтын үе шат' },
  { label: 'Б Цуврал', value: 'Б Цуврал', group: 'Хөрөнгө оруулалтын үе шат' },
  { label: 'Өсөлт', value: 'Өсөлт', group: 'Хөрөнгө оруулалтын үе шат' },
  
  // Хөрөнгө оруулалтын сонирхлын сонголтууд
  { label: 'Финтек', value: 'Финтек', group: 'Салбарын чиглэл' },
  { label: 'SaaS', value: 'SaaS', group: 'Салбарын чиглэл' },
  { label: 'Цэвэр эрчим хүч', value: 'Цэвэр эрчим хүч', group: 'Салбарын чиглэл' },
  { label: 'ХАА технологи', value: 'ХАА технологи', group: 'Салбарын чиглэл' },
  { label: 'Цахим худалдаа', value: 'Цахим худалдаа', group: 'Салбарын чиглэл' },
  { label: 'Логистик', value: 'Логистик', group: 'Салбарын чиглэл' },
  { label: 'БоловсролТех', value: 'БоловсролТех', group: 'Салбарын чиглэл' },
  { label: 'Эрүүл мэнд', value: 'Эрүүл мэнд', group: 'Салбарын чиглэл' },
  { label: 'Мобайл апп', value: 'Мобайл апп', group: 'Салбарын чиглэл' },
  { label: 'Хэрэглэгчийн технологи', value: 'Хэрэглэгчийн технологи', group: 'Салбарын чиглэл' },
  
  // Хөрөнгө оруулалтын хэмжээний сонголтууд
  { label: '$10 мянга - $100 мянга', value: 'small', group: 'Хөрөнгө оруулалтын хэмжээ' },
  { label: '$100 мянга - $500 мянга', value: 'medium', group: 'Хөрөнгө оруулалтын хэмжээ' },
  { label: '$500 мянга - $2 сая', value: 'large', group: 'Хөрөнгө оруулалтын хэмжээ' },
  { label: '$2 сая+', value: 'xlarge', group: 'Хөрөнгө оруулалтын хэмжээ' },
  
  // Байршлын сонголтууд
  { label: 'Улаанбаатар', value: 'Ulaanbaatar', group: 'Байршил' },
  { label: 'Олон улсын', value: 'International', group: 'Байршил' }
]

export default function InvestorsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({})
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  
  const handleSearch = (term: string) => {
    setSearchTerm(term)
  }
  
  const handleFilterChange = (filters: Record<string, string[]>) => {
    setActiveFilters(filters)
  }
  
  const filteredInvestors = useMemo(() => {
    return investors.filter(investor => {
      // Хайлтыг хэрэгжүүлэх
      if (searchTerm && !investor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !investor.company.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !investor.bio.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false
      }
      
      // Идэвхтэй шүүлтүүрүүдийг хэрэгжүүлэх
      for (const [group, values] of Object.entries(activeFilters)) {
        if (values.length === 0) continue
        
        if (group === 'Хөрөнгө оруулалтын үе шат') {
          if (!values.some(value => investor.investmentStages.includes(value as any))) {
            return false
          }
        }
        
        if (group === 'Салбарын чиглэл') {
          if (!values.some(value => investor.interests.includes(value))) {
            return false
          }
        }
        
        if (group === 'Хөрөнгө оруулалтын хэмжээ') {
          const matchesSize = values.some(value => {
            if (value === 'small' && investor.maxInvestment <= 100000) return true
            if (value === 'medium' && investor.minInvestment >= 100000 && investor.maxInvestment <= 500000) return true
            if (value === 'large' && investor.minInvestment >= 500000 && investor.maxInvestment <= 2000000) return true
            if (value === 'xlarge' && investor.minInvestment >= 2000000) return true
            return false
          })
          
          if (!matchesSize) return false
        }
        
        if (group === 'Байршил') {
          const isInternational = !investor.location.includes('Ulaanbaatar')
          const matchesLocation = values.some(value => {
            if (value === 'Ulaanbaatar' && investor.location.includes('Ulaanbaatar')) return true
            if (value === 'International' && isInternational) return true
            return false
          })
          
          if (!matchesLocation) return false
        }
      }
      
      return true
    })
  }, [investors, searchTerm, activeFilters])
  
  return (
   
    <>
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <PageHeader
        title="Хөрөнгө оруулагчид"
        description="Монголын гарааны бизнесийг дэмжихэд сонирхолтой хөрөнгө оруулагчидтай холбогдох"
        icon={<Briefcase className="h-6 w-6" />}
        action={<RequestIntroductionDialog />}
      />
      
      <div className="mb-8">
        <SearchAndFilterBar
          placeholder="Хөрөнгө оруулагчдыг нэр, компани эсвэл сонирхлын чиглэлээр хайх..."
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
          filterOptions={filterOptions}
        />
      </div>
      
      <div className="mb-8 flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          {filteredInvestors.length} хөрөнгө оруулагч харуулж байна
        </div>
        
        <div className="flex items-center gap-4">
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">Бүгд</TabsTrigger>
              <TabsTrigger value="angels">Анхны хөрөнгө оруулагчид</TabsTrigger>
              <TabsTrigger value="vc">ХО компаниуд</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="flex items-center border rounded-md p-1">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              className="h-8 w-8 p-0"
              onClick={() => setViewMode('grid')}
            >
              <Users className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              className="h-8 w-8 p-0"
              onClick={() => setViewMode('list')}
            >
              <UserRound className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      {filteredInvestors.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-12 text-center">
          <Briefcase className="h-16 w-16 text-muted-foreground mb-4" />
          <h3 className="text-xl font-medium mb-2">Хөрөнгө оруулагч олдсонгүй</h3>
          <p className="text-muted-foreground max-w-md">
            Таны хайлтын шалгуурт тохирох хөрөнгө оруулагч олдсонгүй. Шүүлтүүр эсвэл хайлтын үгээ тохируулна уу.
          </p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => {
              setSearchTerm('')
              setActiveFilters({})
            }}
          >
            Шүүлтүүр цэвэрлэх
          </Button>
        </div>
      ) : (
        <div className={viewMode === 'grid' 
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6" 
          : "space-y-4"
        }>
          {filteredInvestors.map(investor => (
            <div key={investor.id}>
              {viewMode === 'grid' ? (
                <InvestorCard investor={investor} />
              ) : (
                <InvestorCard investor={investor} compact />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
    {/* <ComingSoonContent/> */}
    </>
  )
}