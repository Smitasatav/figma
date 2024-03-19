"use client";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";
// import { usePathname } from 'next/navigation'

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  // const pathname = usePathname()
  // console.log(pathname,router)

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}/${pathname}`);
    });
  };
  return (
    <div className="d-flex pt-1" style={{width:"60px",height:"35px"}}>
    <img src="./icons/language.svg" /><select
      defaultValue={localActive}
      onChange={onSelectChange}
      disabled={isPending}
    >
      <option value="en">English</option>
      <option value="hi">Hindi</option>
      <option value="id">Indonesian</option>
      <option value="es">Español</option>
    </select></div>
  );
}
