import "./global.css";

import { FC, PropsWithChildren } from "react";
import { Figtree, Vazirmatn } from "next/font/google";
import { NextIntlClientProvider, useMessages } from "next-intl";

const figtreeFont = Figtree({
  display: "swap",
  style: "normal",
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

const vazirFont = Vazirmatn({ display: "swap", variable: "--font-vazir", subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600"] });

interface LayoutProps extends PropsWithChildren {
  params: {
    locale: string;
  };
}

const Layout: FC<LayoutProps> = ({ children, params }) => {
  const { locale } = params;
  const direction = locale === "fa" ? "rtl" : "ltr";
  const messages = useMessages();

  return (
    <html className={`${figtreeFont.variable} ${vazirFont.variable}`} lang={locale} dir={direction}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default Layout;
