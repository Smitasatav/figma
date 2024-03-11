"use client";
import Table from '@/components/table';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');
  // console.log(t('app_title'));

  return (
    <>
    {/* <div>
      <h1 className='text-4xl mb-4 font-semibold'>{t('app_title')}</h1>
    </div> */}
    <main>
    <Table />
  </main>
  </>
  );
}
