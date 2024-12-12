/** @type {import('next').NextConfig} */
import withTM from "next-transpile-modules";

const nextConfig = {
  reactStrictMode: true,
};

export default withTM(["@amcharts/amcharts5"])(nextConfig);
