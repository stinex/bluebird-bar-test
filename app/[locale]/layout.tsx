import '@/app/assets/styles/globals.scss'

import {
  createTranslator,
  NextIntlClientProvider,
} from 'next-intl'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }]
}

// generate Metadata
export async function generateMetadata({ params: { locale } }: any) {
  const messages = (await import(`../../messages/${locale}.json`)).default
  const t = createTranslator({ locale, messages })

  return {
    title: t('Home.titlePage'),
    description: t('Home.descriptionPage'),
    openGraph: {
      title: t('Home.titlePage'),
      description: t('Home.descriptionPage'),
      type: 'website',
      siteName: process.env.NEXT_PUBLIC_APP_URL,
    },
  }
}

export default async function RootLayout({
  children,
  params: { locale },
}: React.ReactNode | any) {
  let messages
  try {
    messages = (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body className="font-body max-w-[1920px] m-auto">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
