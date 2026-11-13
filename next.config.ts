import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  /* Fast Refresh and standard development options */
  reactStrictMode: true,
};

export default withNextIntl(nextConfig);
