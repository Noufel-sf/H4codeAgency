import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { siteConfig } from '@/config/site';
import { Toaster } from 'sonner';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import '@/app/compiled.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: 'H4Code — Premium Digital Development Studio',
    ar: 'H4Code — استوديو تطوير رقمي وهندسة برمجيات متقدمة',
    fr: 'H4Code — Studio de Développement Digital Haut de Gamme'
  };

  const descriptions: Record<string, string> = {
    en: siteConfig.description.en,
    ar: siteConfig.description.ar,
    fr: siteConfig.description.fr
  };

  const currentTitle = titles[locale] || titles.en;
  const currentDesc = descriptions[locale] || descriptions.en;

  return {
    title: {
      default: currentTitle,
      template: `%s | ${siteConfig.name}`
    },
    description: currentDesc,
    keywords: [
      'Digital Agency',
      'Web Development',
      'Next.js 16',
      'React 19',
      'Full-Stack Studio',
      'SaaS Development',
      'E-Commerce',
      'UI/UX Design',
      'Bespoke Software',
      'وكالة برمجة',
      'تطوير مواقع'
    ],
    authors: [{ name: siteConfig.legalName }],
    creator: siteConfig.legalName,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        ar: '/ar',
        fr: '/fr'
      }
    },
    openGraph: {
      title: currentTitle,
      description: currentDesc,
      url: `/${locale}`,
      siteName: siteConfig.name,
      locale: locale === 'ar' ? 'ar_AR' : locale === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: currentTitle,
      description: currentDesc
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const isRtl = locale === 'ar';

  return (
    <html
      lang={locale}
      dir={isRtl ? 'rtl' : 'ltr'}
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
        />
      </head>
      <body
        className={`${
          isRtl ? 'font-arabic' : 'font-sans'
        } bg-white text-slate-900 dark:bg-[#090B10] dark:text-[#F5F7FC] antialiased transition-colors duration-200 selection:bg-[#315BDB] selection:text-white`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
            <Toaster
              position={isRtl ? 'bottom-left' : 'bottom-right'}
              richColors
            />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

