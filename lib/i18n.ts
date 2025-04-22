// import { createI18n } from 'next-intl';
import {createTranslator} from 'next-intl'

export const locales = ['en', 'mn'];
export const defaultLocale = 'mn';

const messages = {
  en: {
    common: {
      login: 'Login',
      signup: 'Sign Up',
      email: 'Email',
      password: 'Password',
      forgotPassword: 'Forgot Password?',
      logout: 'Logout',
      profile: 'Profile',
      dashboard: 'Dashboard',
      startups: 'Startups',
      investors: 'Investors',
      mentors: 'Mentors',
      about: 'About',
      contact: 'Contact',
      search: 'Search',
      settings: 'Settings',
      language: 'Language',
      english: 'English',
      mongolian: 'Mongolian',
    },
    auth: {
      loginTitle: 'Welcome back',
      loginSubtitle: 'Login to access your account',
      signupTitle: 'Join Taны Incubator',
      signupSubtitle: 'Create your account',
      noAccount: "Don't have an account?",
      haveAccount: 'Already have an account?',
      role: 'I am a',
      startup: 'Startup',
      investor: 'Investor',
      mentor: 'Mentor',
    },
    home: {
      hero: {
        title: 'Building Mongolia\'s Startup Ecosystem',
        subtitle: 'Connecting startups, investors, and mentors in Mongolia',
        cta: 'Join Now',
      },
      stats: {
        startups: 'Startups',
        investors: 'Investors',
        mentors: 'Mentors',
        funding: 'Funding Raised',
      },
    },
    startup: {
      listing: 'Startup Directory',
      search: 'Search startups',
      filter: 'Filter',
      sector: 'Sector',
      fundingStage: 'Funding Stage',
      location: 'Location',
      create: 'Add Your Startup',
    },
    profile: {
      editProfile: 'Edit Profile',
      companyInfo: 'Company Information',
      personalInfo: 'Personal Information',
      bio: 'Bio',
      save: 'Save Changes',
      pitchDeck: 'Pitch Deck',
      upload: 'Upload',
    },
    investment: {
      request: 'Request Investment',
      amount: 'Amount',
      description: 'Description',
      submit: 'Submit Request',
      history: 'Investment History',
    },
    mentorship: {
      book: 'Book a Session',
      rate: 'Rate',
      duration: 'Duration',
      schedule: 'Schedule',
      upcoming: 'Upcoming Sessions',
      past: 'Past Sessions',
    },
    dashboard: {
      welcome: 'Welcome',
      overview: 'Overview',
      requests: 'Requests',
      connections: 'Connections',
      activity: 'Recent Activity',
      analytics: 'Analytics',
    },
  },
  mn: {
    common: {
      login: 'Нэвтрэх',
      signup: 'Бүртгүүлэх',
      email: 'И-мэйл',
      password: 'Нууц үг',
      forgotPassword: 'Нууц үгээ мартсан уу?',
      logout: 'Гарах',
      profile: 'Профайл',
      dashboard: 'Хянах самбар',
      startups: 'Стартапууд',
      investors: 'Хөрөнгө оруулагчид',
      mentors: 'Менторууд',
      about: 'Тухай',
      contact: 'Холбоо барих',
      search: 'Хайх',
      settings: 'Тохиргоо',
      language: 'Хэл',
      english: 'Англи',
      mongolian: 'Монгол',
    },
    auth: {
      loginTitle: 'Тавтай морил',
      loginSubtitle: 'Бүртгэлдээ нэвтэрнэ үү',
      signupTitle: 'Таны Инкубаторт нэгдээрэй',
      signupSubtitle: 'Бүртгэл үүсгэх',
      noAccount: "Бүртгэл байхгүй юу?",
      haveAccount: 'Бүртгэлтэй юу?',
      role: 'Би бол',
      startup: 'Стартап',
      investor: 'Хөрөнгө оруулагч',
      mentor: 'Ментор',
    },
    home: {
      hero: {
        title: 'Монголын Стартапын Экосистемийг Бүтээх',
        subtitle: 'Монголын стартап, хөрөнгө оруулагч, менторуудыг холбох',
        cta: 'Нэгдэх',
      },
      stats: {
        startups: 'Стартапууд',
        investors: 'Хөрөнгө оруулагчид',
        mentors: 'Менторууд',
        funding: 'Босгосон хөрөнгө',
      },
    },
    startup: {
      listing: 'Стартапын Жагсаалт',
      search: 'Стартап хайх',
      filter: 'Шүүлтүүр',
      sector: 'Салбар',
      fundingStage: 'Хөрөнгө оруулалтын шат',
      location: 'Байршил',
      create: 'Стартапаа нэмэх',
    },
    profile: {
      editProfile: 'Профайл засах',
      companyInfo: 'Компанийн мэдээлэл',
      personalInfo: 'Хувийн мэдээлэл',
      bio: 'Танилцуулга',
      save: 'Хадгалах',
      pitchDeck: 'Танилцуулга',
      upload: 'Оруулах',
    },
    investment: {
      request: 'Хөрөнгө оруулалт хүсэх',
      amount: 'Хэмжээ',
      description: 'Тайлбар',
      submit: 'Хүсэлт илгээх',
      history: 'Хөрөнгө оруулалтын түүх',
    },
    mentorship: {
      book: 'Уулзалт захиалах',
      rate: 'Үнэ',
      duration: 'Хугацаа',
      schedule: 'Хуваарь',
      upcoming: 'Удахгүй болох уулзалтууд',
      past: 'Өнгөрсөн уулзалтууд',
    },
    dashboard: {
      welcome: 'Тавтай морил',
      overview: 'Ерөнхий байдал',
      requests: 'Хүсэлтүүд',
      connections: 'Холбоосууд',
      activity: 'Сүүлийн үйл ажиллагаа',
      analytics: 'Аналитик',
    },
  },
};

export function getIntl(locale: string) {
  return createTranslator({
    locale,
    messages: messages[locale as keyof typeof messages],
  });
}

export function getTranslations(locale: string) {
  return messages[locale as keyof typeof messages];
}