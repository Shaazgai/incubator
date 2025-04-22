"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslations } from '@/lib/i18n';
import { Search, Filter, Building2, MapPin, Briefcase, ArrowUpRight, Plus } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import Image from 'next/image';

// Mock data for startups
const mockStartups = [
  {
    id: '1',
    name: 'EduMongolia',
    logo: 'https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: {
      en: 'Educational platform for Mongolian students with personalized learning paths',
      mn: 'Монгол сурагчдад зориулсан хувийн сургалтын замтай боловсролын платформ',
    },
    sector: ['Education', 'Technology'],
    fundingStage: 'Seed',
    location: 'Ulaanbaatar',
    foundedYear: 2021,
  },
  {
    id: '2',
    name: 'NomadRides',
    logo: 'https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: {
      en: 'Ride-sharing platform connecting drivers and passengers across Mongolia',
      mn: 'Монгол даяар жолооч, зорчигчдыг холбодог такси захиалгын платформ',
    },
    sector: ['Transportation', 'Technology'],
    fundingStage: 'Pre-seed',
    location: 'Ulaanbaatar',
    foundedYear: 2022,
  },
  {
    id: '3',
    name: 'GreenMongolia',
    logo: 'https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: {
      en: 'Sustainable agriculture solutions for the Mongolian steppe',
      mn: 'Монголын тал нутагт зориулсан тогтвортой хөдөө аж ахуйн шийдлүүд',
    },
    sector: ['Agriculture', 'Sustainability'],
    fundingStage: 'Series A',
    location: 'Darkhan',
    foundedYear: 2019,
  },
  {
    id: '4',
    name: 'PayMongolia',
    logo: 'https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: {
      en: 'Digital payment solution for small businesses and consumers',
      mn: 'Жижиг бизнес, хэрэглэгчдэд зориулсан дижитал төлбөрийн шийдэл',
    },
    sector: ['Fintech', 'Technology'],
    fundingStage: 'Seed',
    location: 'Ulaanbaatar',
    foundedYear: 2020,
  },
  {
    id: '5',
    name: 'TechNomads',
    logo: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: {
      en: 'Software development company specializing in AI and machine learning',
      mn: 'Хиймэл оюун ухаан, машин сургалтад төрөлжсөн програм хангамж хөгжүүлэх компани',
    },
    sector: ['Technology', 'Artificial Intelligence'],
    fundingStage: 'Series A',
    location: 'Ulaanbaatar',
    foundedYear: 2018,
  },
  {
    id: '6',
    name: 'MonTravel',
    logo: 'https://www.google.com/imgres?q=montravel&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe8%2FVignoble_de_l%2527AOC_Montravel_dans_le_Bergeracois.jpg%2F960px-Vignoble_de_l%2527AOC_Montravel_dans_le_Bergeracois.jpg&imgrefurl=https%3A%2F%2Ffr.wikipedia.org%2Fwiki%2FMontravel_(AOC)&docid=fKvpSC15hnk_4M&tbnid=kpqxgZ3mG92kIM&vet=12ahUKEwiCgb7dsOuMAxVRr1YBHfpTLnMQM3oECBcQAA..i&w=960&h=636&hcb=2&ved=2ahUKEwiCgb7dsOuMAxVRr1YBHfpTLnMQM3oECBcQAA',
    description: {
      en: 'Tourism platform connecting international travelers with local Mongolian experiences',
      mn: 'Олон улсын аялагчдыг Монголын орон нутгийн туршлагатай холбодог аялал жуулчлалын платформ',
    },
    sector: ['Tourism', 'Technology'],
    fundingStage: 'Seed',
    location: 'Ulaanbaatar',
    foundedYear: 2021,
  },
];

const sectors = [
  { value: 'all', labelEn: 'All Sectors', labelMn: 'Бүх салбар' },
  { value: 'Technology', labelEn: 'Technology', labelMn: 'Технологи' },
  { value: 'Fintech', labelEn: 'Fintech', labelMn: 'Финтек' },
  { value: 'Education', labelEn: 'Education', labelMn: 'Боловсрол' },
  { value: 'Agriculture', labelEn: 'Agriculture', labelMn: 'Хөдөө аж ахуй' },
  { value: 'Tourism', labelEn: 'Tourism', labelMn: 'Аялал жуулчлал' },
  { value: 'Sustainability', labelEn: 'Sustainability', labelMn: 'Тогтвортой байдал' },
  { value: 'Transportation', labelEn: 'Transportation', labelMn: 'Тээвэр' },
  { value: 'Artificial Intelligence', labelEn: 'Artificial Intelligence', labelMn: 'Хиймэл оюун ухаан' },
];

const fundingStages = [
  { value: 'all', labelEn: 'All Stages', labelMn: 'Бүх үе шат' },
  { value: 'Pre-seed', labelEn: 'Pre-seed', labelMn: 'Өмнөх үр' },
  { value: 'Seed', labelEn: 'Seed', labelMn: 'Үр' },
  { value: 'Series A', labelEn: 'Series A', labelMn: 'А цуврал' },
  { value: 'Series B', labelEn: 'Series B', labelMn: 'Б цуврал' },
  { value: 'Series C', labelEn: 'Series C', labelMn: 'В цуврал' },
];

const locations = [
  { value: 'all', labelEn: 'All Locations', labelMn: 'Бүх байршил' },
  { value: 'Ulaanbaatar', labelEn: 'Ulaanbaatar', labelMn: 'Улаанбаатар' },
  { value: 'Darkhan', labelEn: 'Darkhan', labelMn: 'Дархан' },
  { value: 'Erdenet', labelEn: 'Erdenet', labelMn: 'Эрдэнэт' },
  { value: 'Other', labelEn: 'Other', labelMn: 'Бусад' },
];

export default function StartupsPage() {
  const { locale } = useLanguage();
  const t = getTranslations(locale);
  const { user } = useAuth();
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('all');
  const [selectedFundingStage, setSelectedFundingStage] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [filteredStartups, setFilteredStartups] = useState(mockStartups);

  useEffect(() => {
    const filtered = mockStartups.filter(startup => {
      // Search term filter
      const nameMatch = startup.name.toLowerCase().includes(searchTerm.toLowerCase());
      const descMatch = startup.description[locale as 'en' | 'mn'].toLowerCase().includes(searchTerm.toLowerCase());
      const searchMatch = nameMatch || descMatch;
      
      // Sector filter
      const sectorMatch = selectedSector === 'all' || startup.sector.includes(selectedSector);
      
      // Funding stage filter
      const fundingMatch = selectedFundingStage === 'all' || startup.fundingStage === selectedFundingStage;
      
      // Location filter
      const locationMatch = selectedLocation === 'all' || startup.location === selectedLocation;
      
      return searchMatch && sectorMatch && fundingMatch && locationMatch;
    });
    
    setFilteredStartups(filtered);
  }, [searchTerm, selectedSector, selectedFundingStage, selectedLocation, locale]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-primary">
            {t.startup.listing}
          </h1>
          <p className="text-muted-foreground mt-1">
            {locale === 'en' 
              ? 'Discover innovative startups in Mongolia'
              : 'Монголын инновацлаг стартапуудыг нээж илрүүлэх'}
          </p>
        </div>
        {user && user.role === 'startup' && (
          <Button className="mt-4 md:mt-0" asChild>
            <Link href="/startups/create">
              <Plus className="mr-2 h-4 w-4" />
              {t.startup.create}
            </Link>
          </Button>
        )}
      </div>

      <div className="bg-card border rounded-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={t.startup.search}
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Select
              value={selectedSector}
              onValueChange={setSelectedSector}
            >
              <SelectTrigger className="w-full sm:w-[180px]">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder={t.startup.sector} />
              </SelectTrigger>
              <SelectContent>
                {sectors.map((sector) => (
                  <SelectItem key={sector.value} value={sector.value}>
                    {locale === 'en' ? sector.labelEn : sector.labelMn}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={selectedFundingStage}
              onValueChange={setSelectedFundingStage}
            >
              <SelectTrigger className="w-full sm:w-[180px]">
                <Briefcase className="mr-2 h-4 w-4" />
                <SelectValue placeholder={t.startup.fundingStage} />
              </SelectTrigger>
              <SelectContent>
                {fundingStages.map((stage) => (
                  <SelectItem key={stage.value} value={stage.value}>
                    {locale === 'en' ? stage.labelEn : stage.labelMn}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={selectedLocation}
              onValueChange={setSelectedLocation}
            >
              <SelectTrigger className="w-full sm:w-[180px]">
                <MapPin className="mr-2 h-4 w-4" />
                <SelectValue placeholder={t.startup.location} />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location.value} value={location.value}>
                    {locale === 'en' ? location.labelEn : location.labelMn}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {filteredStartups.length === 0 ? (
        <div className="text-center py-20">
          <Building2 className="h-12 w-12 mx-auto text-muted-foreground" />
          <h3 className="mt-4 text-lg font-medium">
            {locale === 'en' ? 'No startups found' : 'Стартап олдсонгүй'}
          </h3>
          <p className="mt-2 text-muted-foreground">
            {locale === 'en' 
              ? 'Try adjusting your search or filters to find what you are looking for.'
              : 'Хайлт эсвэл шүүлтүүрийг тохируулж, хайж буй зүйлээ олно уу.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStartups.map((startup) => (
            <Card key={startup.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <Image
                  src={startup.logo} 
                  alt={startup.name} 
                  width={100}
                  height={100}
                  className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{startup.name}</CardTitle>
                  <Badge variant="outline">{startup.fundingStage}</Badge>
                </div>
                <CardDescription className="flex items-center text-sm">
                  <MapPin className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                  {startup.location}, {locale === 'en' ? 'Mongolia' : 'Монгол'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {startup.description[locale as 'en' | 'mn']}
                </p>
                <div className="flex flex-wrap gap-2">
                  {startup.sector.map((sector) => (
                    <Badge key={sector} variant="secondary" className="text-xs">
                      {sector}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <Separator />
              <CardFooter className="flex justify-between py-4">
                <div className="text-sm text-muted-foreground">
                  {locale === 'en' ? 'Founded' : 'Үүсгэсэн'}: {startup.foundedYear}
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <Link href={`/startups/${startup.id}`}>
                    {locale === 'en' ? 'View details' : 'Дэлгэрэнгүй'}
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}