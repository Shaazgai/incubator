import { InvestorType } from "@/types";


export const investors: InvestorType[] = [
  {
    id: '1',
    name: 'Baatar Tserenpil',
    title: 'Managing Partner',
    company: 'UB Ventures',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600',
    email: 'baatar@ubventures.com',
    phone: '+976 9911 2233',
    bio: 'Experienced investor with 10+ years in the Mongolian tech ecosystem. Passionate about fostering innovation in fintech and sustainable technologies.',
    interests: ['Fintech', 'SaaS', 'Clean Energy', 'AgTech'],
    investmentStages: ['Seed', 'Series A'],
    portfolioCompanies: [
      {
        name: 'MonPay',
        logo: '',
        description: 'Digital payment solution for Mongolian businesses'
      },
      {
        name: 'GreenSteppe',
        logo: '',
        description: 'Renewable energy solutions for nomadic communities'
      }
    ],
    minInvestment: 50000,
    maxInvestment: 500000,
    location: 'Ulaanbaatar, Mongolia',
    linkedin: 'https://linkedin.com/in/baatar-tserenpil',
    website: 'https://ubventures.mn'
  },
  {
    id: '2',
    name: 'Sarah Chen',
    title: 'Founder & CEO',
    company: 'Asia Growth Fund',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600',
    email: 'sarah@asiagrowthfund.com',
    bio: 'Investing in visionary founders across Asia with a focus on Mongolia, Kazakhstan, and Vietnam. Looking for scalable tech solutions with regional potential.',
    interests: ['E-commerce', 'Logistics', 'EdTech', 'Healthcare'],
    investmentStages: ['Pre-seed', 'Seed', 'Series A'],
    portfolioCompanies: [
      {
        name: 'Express Mongolia',
        logo: '',
        description: 'Last-mile delivery platform for urban areas'
      },
      {
        name: 'EduNomad',
        logo: '',
        description: 'Mobile education platform for rural communities'
      }
    ],
    minInvestment: 100000,
    maxInvestment: 1000000,
    location: 'Hong Kong / Ulaanbaatar',
    linkedin: 'https://linkedin.com/in/sarah-chen',
    twitter: 'https://twitter.com/sarahchenglobal',
    website: 'https://asiagrowthfund.com'
  },
  {
    id: '3',
    name: 'Jack Dorman',
    title: 'Investment Director',
    company: 'Central Asia Catalyst',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
    email: 'jack@catalyst.vc',
    bio: 'Focused on early-stage investments in Central Asia with particular interest in Mongolia\'s growing tech ecosystem. Seeking resilient founders with strong market understanding.',
    interests: ['Fintech', 'Mining Tech', 'Consumer Apps', 'Sustainability'],
    investmentStages: ['Seed', 'Series A', 'Series B'],
    portfolioCompanies: [
      {
        name: 'MineInsight',
        logo: '',
        description: 'AI-powered analytics for mining operations'
      },
      {
        name: 'NomadPay',
        logo: '',
        description: 'Financial services for underbanked populations'
      }
    ],
    minInvestment: 250000,
    maxInvestment: 2000000,
    location: 'Singapore / Ulaanbaatar',
    linkedin: 'https://linkedin.com/in/jackdorman',
    website: 'https://catalyst.vc'
  },
  {
    id: '4',
    name: 'Tungalag Batsaikhan',
    title: 'Angel Investor',
    company: 'Independent',
    avatar: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600',
    email: 'tungalag@investors.mn',
    phone: '+976 9900 3344',
    bio: 'Serial entrepreneur turned investor. Built and sold two successful tech companies in Mongolia. Now supporting the next generation of Mongolian entrepreneurs.',
    interests: ['Mobile Apps', 'SaaS', 'Consumer Tech', 'Creative Economy'],
    investmentStages: ['Pre-seed', 'Seed'],
    portfolioCompanies: [
      {
        name: 'Nomad Studios',
        logo: '',
        description: 'Game development studio focused on Mongolian culture'
      },
      {
        name: 'AirQuality UB',
        logo: '',
        description: 'Air quality monitoring and filtration solutions'
      }
    ],
    minInvestment: 10000,
    maxInvestment: 100000,
    location: 'Ulaanbaatar, Mongolia',
    linkedin: 'https://linkedin.com/in/tungalag',
    twitter: 'https://twitter.com/tungalagbat'
  },
  {
    id: '5',
    name: 'Elena Kim',
    title: 'Partner',
    company: 'Steppe Capital',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
    email: 'elena@steppecapital.com',
    bio: 'Investment professional with deep expertise in cross-border ventures between Mongolia, Korea, and Japan. Looking for innovative solutions to regional challenges.',
    interests: ['Clean Energy', 'Smart City', 'Tourism Tech', 'AgTech'],
    investmentStages: ['Series A', 'Series B', 'Growth'],
    portfolioCompanies: [
      {
        name: 'Smart UB',
        logo: '',
        description: 'Smart city solutions for Ulaanbaatar'
      },
      {
        name: 'TourMongolia',
        logo: '',
        description: 'Digital platform connecting tourists with local experiences'
      }
    ],
    minInvestment: 500000,
    maxInvestment: 5000000,
    location: 'Seoul / Ulaanbaatar',
    linkedin: 'https://linkedin.com/in/elenakim',
    website: 'https://steppecapital.com'
  }
];



// import { InvestorType } from "@/types";


// export const investors: InvestorType[] = [
//   {
//     id: '1',
//     name: 'Баатар Цэрэнпил',
//     title: 'Гүйцэтгэх Түнш',
//     company: 'УБ Венчурс',
//     avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600',
//     email: 'baatar@ubventures.com',
//     phone: '+976 9911 2233',
//     bio: 'Монголын технологийн экосистемд 10+ жилийн туршлагатай хөрөнгө оруулагч. Финтек болон тогтвортой технологид инновацийг дэмжихэд хүсэл эрмэлзэлтэй.',
//     interests: ['Финтек', 'SaaS', 'Цэвэр эрчим хүч', 'ХАА технологи'],
//     investmentStages: ['Үр', 'А Цуврал'],
//     portfolioCompanies: [
//       {
//         name: 'МонПэй',
//         logo: '',
//         description: 'Монголын бизнесүүдэд зориулсан дижитал төлбөрийн шийдэл'
//       },
//       {
//         name: 'ГринСтэпп',
//         logo: '',
//         description: 'Нүүдэлчин иргэдэд зориулсан сэргээгдэх эрчим хүчний шийдлүүд'
//       }
//     ],
//     minInvestment: 50000,
//     maxInvestment: 500000,
//     location: 'Улаанбаатар, Монгол',
//     linkedin: 'https://linkedin.com/in/baatar-tserenpil',
//     website: 'https://ubventures.mn'
//   },
//   {
//     id: '2',
//     name: 'Сара Чэн',
//     title: 'Үүсгэн байгуулагч & Гүйцэтгэх захирал',
//     company: 'Ази Өсөлтийн Сан',
//     avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600',
//     email: 'sarah@asiagrowthfund.com',
//     bio: 'Монгол, Казахстан, Вьетнам зэрэг Азийн орнуудад алсын хараатай үүсгэн байгуулагчдад хөрөнгө оруулдаг. Бүс нутгийн хэмжээнд өргөжих боломжтой технологийн шийдлүүдийг хайж байна.',
//     interests: ['Цахим худалдаа', 'Логистик', 'БоловсролТех', 'Эрүүл мэнд'],
//     investmentStages: ['Үр өмнөх', 'Үр', 'А Цуврал'],
//     portfolioCompanies: [
//       {
//         name: 'Экспресс Монгол',
//         logo: '',
//         description: 'Хот суурин газрын сүүлийн бээрийн хүргэлтийн платформ'
//       },
//       {
//         name: 'ЭдуНомад',
//         logo: '',
//         description: 'Хөдөө орон нутгийн иргэдэд зориулсан гар утасны боловсролын платформ'
//       }
//     ],
//     minInvestment: 100000,
//     maxInvestment: 1000000,
//     location: 'Хонг Конг / Улаанбаатар',
//     linkedin: 'https://linkedin.com/in/sarah-chen',
//     twitter: 'https://twitter.com/sarahchenglobal',
//     website: 'https://asiagrowthfund.com'
//   },
//   {
//     id: '3',
//     name: 'Жэк Дорман',
//     title: 'Хөрөнгө оруулалтын захирал',
//     company: 'Төв Азийн Катализатор',
//     avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
//     email: 'jack@catalyst.vc',
//     bio: 'Төв Азид эрт шатны хөрөнгө оруулалтад анхаарч, ялангуяа Монголын өсөж буй технологийн экосистемд сонирхолтой. Зах зээлийг сайн ойлгодог, тэсвэртэй үүсгэн байгуулагчдыг хайж байна.',
//     interests: ['Финтек', 'Уул уурхайн технологи', 'Хэрэглэгчийн апп', 'Тогтвортой байдал'],
//     investmentStages: ['Үр', 'А Цуврал', 'Б Цуврал'],
//     portfolioCompanies: [
//       {
//         name: 'МайнИнсайт',
//         logo: '',
//         description: 'Уул уурхайн үйл ажиллагаанд зориулсан хиймэл оюун ухаанд суурилсан аналитик'
//       },
//       {
//         name: 'НомадПэй',
//         logo: '',
//         description: 'Банкны үйлчилгээ авч чадахгүй хүн амд зориулсан санхүүгийн үйлчилгээ'
//       }
//     ],
//     minInvestment: 250000,
//     maxInvestment: 2000000,
//     location: 'Сингапур / Улаанбаатар',
//     linkedin: 'https://linkedin.com/in/jackdorman',
//     website: 'https://catalyst.vc'
//   },
//   {
//     id: '4',
//     name: 'Тунгалаг Батсайхан',
//     title: 'Анхны хөрөнгө оруулагч',
//     company: 'Бие даасан',
//     avatar: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600',
//     email: 'tungalag@investors.mn',
//     phone: '+976 9900 3344',
//     bio: 'Олон удаагийн бизнес эрхлэгчээс хөрөнгө оруулагч болсон. Монголд хоёр амжилттай технологийн компанийг байгуулж, борлуулсан. Одоо Монголын залуу үеийн бизнес эрхлэгчдийг дэмжиж байна.',
//     interests: ['Мобайл апп', 'SaaS', 'Хэрэглэгчийн технологи', 'Бүтээлч эдийн засаг'],
//     investmentStages: ['Үр өмнөх', 'Үр'],
//     portfolioCompanies: [
//       {
//         name: 'Номад Студиос',
//         logo: '',
//         description: 'Монголын соёлд төвлөрсөн тоглоом хөгжүүлэх студи'
//       },
//       {
//         name: 'АгаарынЧанар УБ',
//         logo: '',
//         description: 'Агаарын чанарын хяналт болон шүүлтүүрийн шийдлүүд'
//       }
//     ],
//     minInvestment: 10000,
//     maxInvestment: 100000,
//     location: 'Улаанбаатар, Монгол',
//     linkedin: 'https://linkedin.com/in/tungalag',
//     twitter: 'https://twitter.com/tungalagbat'
//   },
//   {
//     id: '5',
//     name: 'Елена Ким',
//     title: 'Түнш',
//     company: 'Тал Капитал',
//     avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
//     email: 'elena@steppecapital.com',
//     bio: 'Монгол, Солонгос, Япон хоорондын хил дамнасан венчурт гүнзгий мэргэжлийн туршлагатай хөрөнгө оруулагч. Бүс нутгийн сорилтуудын шинэлэг шийдлүүдийг хайж байна.',
//     interests: ['Цэвэр эрчим хүч', 'Ухаалаг хот', 'Аялал жуулчлалын технологи', 'ХАА технологи'],
//     investmentStages: ['А Цуврал', 'Б Цуврал', 'Өсөлт'],
//     portfolioCompanies: [
//       {
//         name: 'Смарт УБ',
//         logo: '',
//         description: 'Улаанбаатарт зориулсан ухаалаг хотын шийдлүүд'
//       },
//       {
//         name: 'ТурМонголиа',
//         logo: '',
//         description: 'Жуулчдыг орон нутгийн туршлагатай холбох дижитал платформ'
//       }
//     ],
//     minInvestment: 500000,
//     maxInvestment: 5000000,
//     location: 'Сөүл / Улаанбаатар',
//     linkedin: 'https://linkedin.com/in/elenakim',
//     website: 'https://steppecapital.com'
//   }
// ];