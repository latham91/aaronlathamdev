/** @type {import('next').NextConfig} */
const nextConfig = {};

const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipoWaiting: true,
});

module.exports = withPWA(nextConfig);
