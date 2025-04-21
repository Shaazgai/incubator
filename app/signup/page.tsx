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
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslations } from '@/lib/i18n';
import { Building2, Rocket, Users, GraduationCap } from 'lucide-react';

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
  confirmPassword: z.string(),
  role: z.enum(['startup', 'investor', 'mentor']),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type SignupFormValues = z.infer<typeof signupSchema>;

export default function Signup() {
  const { locale } = useLanguage();
  const t = getTranslations(locale);
  const router = useRouter();
  const { signUp } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      role: 'startup',
    },
  });

  async function onSubmit(data: SignupFormValues) {
    setIsLoading(true);

    try {
      const { error, user } = await signUp(data.email, data.password, data.role);

      if (error) {
        console.error('Signup error:', error);
        toast({
          variant: "destructive",
          title: locale === 'en' ? 'Signup Failed' : 'Бүртгүүлэх амжилтгүй болсон',
          description: error.message || (locale === 'en' ? 'Please try again with a different email.' : 'Өөр и-мэйл ашиглан дахин оролдоно уу.'),
        });
        setIsLoading(false);
        return;
      }

      toast({
        title: locale === 'en' ? 'Account created!' : 'Бүртгэл үүсгэгдлээ!',
        description: locale === 'en' ? 'You have successfully signed up.' : 'Та амжилттай бүртгүүллээ.',
      });

      router.push('/dashboard');
    } catch (error) {
      console.error('Signup error:', error);
      toast({
        variant: "destructive",
        title: locale === 'en' ? 'Signup Failed' : 'Бүртгүүлэх амжилтгүй болсон',
        description: locale === 'en' ? 'Please try again later.' : 'Дараа дахин оролдоно уу.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  const roleIcons = {
    startup: <Rocket className="h-5 w-5" />,
    investor: <Users className="h-5 w-5" />,
    mentor: <GraduationCap className="h-5 w-5" />,
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <Building2 className="h-12 w-12 text-primary" />
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-primary">
            {t.auth.signupTitle}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {t.auth.signupSubtitle}
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

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {locale === 'en' ? 'Confirm Password' : 'Нууц үг баталгаажуулах'}
                    </FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.auth.role}</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="grid grid-cols-3 gap-4"
                      >
                        <FormItem className="flex flex-col items-center space-y-2 space-x-0">
                          <FormControl>
                            <RadioGroupItem
                              value="startup"
                              id="startup"
                              className="peer sr-only"
                            />
                          </FormControl>
                          <FormLabel
                            htmlFor="startup"
                            className="flex w-full cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                          >
                            <Rocket className="mb-3 h-6 w-6" />
                            {t.auth.startup}
                          </FormLabel>
                        </FormItem>

                        <FormItem className="flex flex-col items-center space-y-2 space-x-0">
                          <FormControl>
                            <RadioGroupItem
                              value="investor"
                              id="investor"
                              className="peer sr-only"
                            />
                          </FormControl>
                          <FormLabel
                            htmlFor="investor"
                            className="flex w-full cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                          >
                            <Users className="mb-3 h-6 w-6" />
                            {t.auth.investor}
                          </FormLabel>
                        </FormItem>

                        <FormItem className="flex flex-col items-center space-y-2 space-x-0">
                          <FormControl>
                            <RadioGroupItem
                              value="mentor"
                              id="mentor"
                              className="peer sr-only"
                            />
                          </FormControl>
                          <FormLabel
                            htmlFor="mentor"
                            className="flex w-full cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                          >
                            <GraduationCap className="mb-3 h-6 w-6" />
                            {t.auth.mentor}
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
                    {locale === 'en' ? 'Creating account...' : 'Бүртгэл үүсгэж байна...'}
                  </>
                ) : (
                  t.common.signup
                )}
              </Button>
            </form>
          </Form>

          <div className="mt-6 text-center text-sm">
            <p className="text-muted-foreground">
              {t.auth.haveAccount}{' '}
              <Link href="/login" className="text-primary hover:text-primary/80 font-medium">
                {t.common.login}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}