"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslations } from '@/lib/i18n';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Activity,
  BarChart3,
  Bell,
  Building2,
  Calendar,
  Clock,
  DollarSign,
  GraduationCap,
  Inbox,
  Lightbulb,
  Rocket,
  Users,
  UserPlus,
} from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const { locale } = useLanguage();
  const t = getTranslations(locale);

  // Redirect if not logged in
  React.useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Sample data for charts
  const pieData = [
    { name: locale === 'en' ? 'Tech' : 'Технологи', value: 25 },
    { name: locale === 'en' ? 'FinTech' : 'Финтек', value: 20 },
    { name: locale === 'en' ? 'E-commerce' : 'Э-бизнес', value: 18 },
    { name: locale === 'en' ? 'EdTech' : 'Боловсрол', value: 12 },
    { name: locale === 'en' ? 'Other' : 'Бусад', value: 25 },
  ];

  const barData = [
    { name: 'Q1', [locale === 'en' ? 'Startups' : 'Стартапууд']: 12 },
    { name: 'Q2', [locale === 'en' ? 'Startups' : 'Стартапууд']: 19 },
    { name: 'Q3', [locale === 'en' ? 'Startups' : 'Стартапууд']: 25 },
    { name: 'Q4', [locale === 'en' ? 'Startups' : 'Стартапууд']: 30 },
  ];

  const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))', 'hsl(var(--chart-5))'];

  const activities = [
    {
      id: 1,
      title: locale === 'en' ? 'New investor joined' : 'Шинэ хөрөнгө оруулагч нэгдлээ',
      time: '2 hours ago',
      icon: <UserPlus className="h-4 w-4" />,
    },
    {
      id: 2,
      title: locale === 'en' ? 'Startup Pitch Session' : 'Стартапын тайлбарын уулзалт',
      time: '3 hours ago',
      icon: <Lightbulb className="h-4 w-4" />,
    },
    {
      id: 3,
      title: locale === 'en' ? 'New investment request' : 'Шинэ хөрөнгө оруулалтын хүсэлт',
      time: 'Yesterday',
      icon: <DollarSign className="h-4 w-4" />,
    },
    {
      id: 4,
      title: locale === 'en' ? 'Mentoring session scheduled' : 'Менторын уулзалт товлогдлоо',
      time: '2 days ago',
      icon: <Calendar className="h-4 w-4" />,
    },
  ];

  // User-specific dashboard view based on role
  let dashboardView;

  switch (user.role) {
    case 'startup':
      dashboardView = (
        <>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {locale === 'en' ? 'Profile Completion' : 'Профайл гүйцэтгэл'}
                </CardTitle>
                <Building2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">65%</div>
                <p className="text-xs text-muted-foreground">
                  {locale === 'en' ? 'Complete your profile to get discovered' : 'Олдоход профайлаа бүрэн бөглөнө үү'}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {locale === 'en' ? 'Investor Views' : 'Хөрөнгө оруулагчийн үзэлт'}
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12</div>
                <p className="text-xs text-muted-foreground">
                  {locale === 'en' ? '+3 from last week' : '+3 өнгөрсөн долоо хоногоос'}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {locale === 'en' ? 'Mentorship Sessions' : 'Менторын уулзалтууд'}
                </CardTitle>
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground">
                  {locale === 'en' ? 'Scheduled for this week' : 'Энэ долоо хоногт товлосон'}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {locale === 'en' ? 'Investment Requests' : 'Хөрөнгө оруулалтын хүсэлтүүд'}
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1</div>
                <p className="text-xs text-muted-foreground">
                  {locale === 'en' ? 'Pending approval' : 'Зөвшөөрөл хүлээж байгаа'}
                </p>
              </CardContent>
            </Card>
          </div>
        </>
      );
      break;
    
    case 'investor':
      dashboardView = (
        <>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {locale === 'en' ? 'New Startups' : 'Шинэ стартапууд'}
                </CardTitle>
                <Rocket className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">
                  {locale === 'en' ? 'Added this week' : 'Энэ долоо хоногт нэмэгдсэн'}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {locale === 'en' ? 'Investment Requests' : 'Хөрөнгө оруулалтын хүсэлтүүд'}
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">
                  {locale === 'en' ? 'Awaiting review' : 'Хянаж байгаа'}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {locale === 'en' ? 'Sector Breakdown' : 'Салбарын задаргаа'}
                </CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-muted-foreground">
                  {locale === 'en' ? 'Active sectors' : 'Идэвхтэй салбарууд'}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {locale === 'en' ? 'Active Investments' : 'Идэвхтэй хөрөнгө оруулалтууд'}
                </CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-muted-foreground">
                  {locale === 'en' ? 'Currently active' : 'Одоогоор идэвхтэй'}
                </p>
              </CardContent>
            </Card>
          </div>
        </>
      );
      break;
    
    case 'mentor':
      dashboardView = (
        <>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {locale === 'en' ? 'Upcoming Sessions' : 'Удахгүй болох уулзалтууд'}
                </CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-muted-foreground">
                  {locale === 'en' ? 'This week' : 'Энэ долоо хоногт'}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {locale === 'en' ? 'Session Requests' : 'Уулзалтын хүсэлтүүд'}
                </CardTitle>
                <Inbox className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">
                  {locale === 'en' ? 'Awaiting approval' : 'Зөвшөөрөл хүлээж байгаа'}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {locale === 'en' ? 'Total Hours' : 'Нийт цаг'}
                </CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12.5</div>
                <p className="text-xs text-muted-foreground">
                  {locale === 'en' ? 'This month' : 'Энэ сард'}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {locale === 'en' ? 'Earnings' : 'Орлого'}
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₮ 450K</div>
                <p className="text-xs text-muted-foreground">
                  {locale === 'en' ? 'This month' : 'Энэ сард'}
                </p>
              </CardContent>
            </Card>
          </div>
        </>
      );
      break;
    
    default:
      dashboardView = (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            {locale === 'en' ? 'Dashboard information not available' : 'Хянах самбарын мэдээлэл байхгүй байна'}
          </p>
        </div>
      );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {t.dashboard.welcome}, {user.firstName || user.email.split('@')[0]}
          </h1>
          <p className="text-muted-foreground">
            {locale === 'en' ? 'Here\'s what\'s happening with your account today.' : 'Таны бүртгэлд өнөөдөр юу болж байгаа вэ.'}
          </p>
        </div>
      </div>

      {dashboardView}

      <Tabs defaultValue="overview" className="mt-8">
        <TabsList>
          <TabsTrigger value="overview">
            <BarChart3 className="h-4 w-4 mr-2" />
            {t.dashboard.overview}
          </TabsTrigger>
          <TabsTrigger value="analytics">
            <Activity className="h-4 w-4 mr-2" />
            {t.dashboard.analytics}
          </TabsTrigger>
          <TabsTrigger value="activity">
            <Bell className="h-4 w-4 mr-2" />
            {t.dashboard.activity}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>
                  {locale === 'en' ? 'Growth by Quarter' : 'Улирлаар өсөлт'}
                </CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={barData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey={locale === 'en' ? 'Startups' : 'Стартапууд'} fill="hsl(var(--chart-1))" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>
                  {locale === 'en' ? 'Sector Distribution' : 'Салбарын тархалт'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics">
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>{locale === 'en' ? 'Detailed Analytics' : 'Дэлгэрэнгүй аналитик'}</CardTitle>
              <CardDescription>
                {locale === 'en' 
                  ? 'View detailed metrics about startup growth and investment activity.'
                  : 'Стартапын өсөлт, хөрөнгө оруулалтын үйл ажиллагааны дэлгэрэнгүй хэмжүүрүүдийг харах.'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">
                  {locale === 'en' 
                    ? 'Detailed analytics will be available soon.'
                    : 'Дэлгэрэнгүй аналитик удахгүй гарна.'}
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="activity">
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>{t.dashboard.activity}</CardTitle>
              <CardDescription>
                {locale === 'en' 
                  ? 'Recent activity on your account and the platform.'
                  : 'Таны бүртгэл болон платформ дээрх сүүлийн үйл ажиллагаа.'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activities.map((activity) => (
                  <div key={activity.id} className="flex items-start">
                    <div className="mr-4 mt-0.5 bg-primary/10 rounded-full p-2">
                      {activity.icon}
                    </div>
                    <div>
                      <p className="font-medium">{activity.title}</p>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}