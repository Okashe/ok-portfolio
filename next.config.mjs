

const hostnames = [
  "www.pngall.com", 
  "www.bluecamroo.com",
  "workfeelsgood.com",
  "wallpaperaccess.com",
  "1.bp.blogspot.com",
  "www.vhv.rs"
]

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: hostnames.map(hostname=>({
          hostname
        })),
      },
};

export default nextConfig;
