"use client";
import Navbar from '@/components/navbar';
import Table from '@/components/table';
import { useTranslations } from 'next-intl';

export default function Home() {
  // const t = useTranslations('Table');

  return (
    <main>
    <Table />
  </main>
  );
}
