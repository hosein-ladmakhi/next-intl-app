// "use client";

import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Link } from "./navigation";

export const generateMetadata = async () => {
  const t = await getTranslations();
  return { title: t("title") };
};

export default function Page() {
  const t = useTranslations();
  // const router = useRouter();
  return (
    <>
      <p>{t("hello")}</p>
      <div className="flex gap-3 mt-10">
        {/* <button onClick={() => router.push("/", { locale: "fa" })} className="bg-purple-600 btn">
          {t("fa")}
        </button>
        <button onClick={() => router.push("/", { locale: "en" })} className="bg-pink-600 btn">
          {t("en")}
        </button> */}

        <Link className="btn text-blue-500" href="/" locale="fa">
          {t("fa")}
        </Link>
        <Link className="btn text-blue-500" href="/" locale="en">
          {t("en")}
        </Link>
      </div>
    </>
  );
}
