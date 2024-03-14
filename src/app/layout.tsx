import Navbar from "@/components/navbar";
import { NextIntlClientProvider, useMessages } from "next-intl";
import "bootstrap/dist/css/bootstrap.css";
interface RootLayoutProps{
  children: React.ReactNode;
  params:{
    locale:string;
  };
}

export default function RootLayout({
  children,
  params:{ locale },
}: Readonly<RootLayoutProps>) {
  const messages = useMessages();

    return (
    <html lang={locale}>
      <body>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Navbar/>
        <div className="background-container">{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>);
  }
// export default function RootLayout({
//     children,
//   }: Readonly<{
//     children: React.ReactNode;
//   }>) {
//     return children;
//   }