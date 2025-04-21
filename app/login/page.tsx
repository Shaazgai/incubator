"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslations } from '@/lib/i18n';
import { Building2 } from 'lucide-react';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function Login() {
  const { locale } = useLanguage();
  const t = getTranslations(locale);
  const router = useRouter();
  const { signIn } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(data: LoginFormValues) {
    setIsLoading(true);

    try {
      // Make sure signIn is properly calling the login endpoint, not signup
      const result = await signIn(data.email, data.password);
      
      // Check if result has error property
      if (result && result.error) {
        console.error('Login error:', result.error);
        toast({
          variant: "destructive",
          title: locale === 'en' ? 'Login Failed' : 'Нэвтрэх амжилтгүй болсон',
          description: result.error.message || (locale === 'en' ? 'Invalid email or password' : 'И-мэйл эсвэл нууц үг буруу байна'),
        });
        setIsLoading(false);
        return;
      }

      toast({
        title: locale === 'en' ? 'Welcome back!' : 'Тавтай морил!',
        description: locale === 'en' ? 'You have successfully logged in.' : 'Та амжилттай нэвтэрлээ.',
      });

      router.push('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      toast({
        variant: "destructive",
        title: locale === 'en' ? 'Login Failed' : 'Нэвтрэх амжилтгүй болсон',
        description: locale === 'en' ? 'Please try again later.' : 'Дараа дахин оролдоно уу.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <Building2 className="h-12 w-12 text-primary" />
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-primary">
            {t.auth.loginTitle}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {t.auth.loginSubtitle}
          </p>
        </div>

        <div className="mt-8 bg-card p-8 border rounded-lg shadow-sm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.common.email}</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.common.password}</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <Link
                    href="/forgot-password"
                    className="text-primary hover:text-primary/80"
                  >
                    {t.common.forgotPassword}
                  </Link>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    {locale === 'en' ? 'Logging in...' : 'Нэвтэрч байна...'}
                  </>
                ) : (
                  t.common.login
                )}
              </Button>
            </form>
          </Form>

          <div className="mt-6 text-center text-sm">
            <p className="text-muted-foreground">
              {t.auth.noAccount}{' '}
              <Link href="/signup" className="text-primary hover:text-primary/80 font-medium">
                {t.common.signup}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}