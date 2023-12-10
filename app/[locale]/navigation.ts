import { createLocalizedPathnamesNavigation, Pathnames } from "next-intl/navigation";

export const locales = ["en", "fa"] as const;
export const localePrefix = "always";

export const pathnames = {
  "/": "/",
  "/about": "/about",
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } = createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
