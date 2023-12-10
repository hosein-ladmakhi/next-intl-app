"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "../navigation";

export default function Page() {
  const t = useTranslations();
  const router = useRouter();
  return (
    <>
      <p>{t("about")}</p>
      <div className="flex gap-3 mt-10">
        <button onClick={() => router.push("/about", { locale: "fa" })} className="bg-purple-600 btn">
          {t("fa")}
        </button>
        <button onClick={() => router.push("/about", { locale: "en" })} className="bg-pink-600 btn">
          {t("en")}
        </button>
      </div>
    </>
  );
}
