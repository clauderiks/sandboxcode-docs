const nextConfig = {
  output: 'export', // Bắt buộc để sinh ra thư mục /out chứa file tĩnh
  images: {
    unoptimized: true, // Bắt buộc nếu dự án của bạn có sử dụng thẻ Image của Next.js
  },
};

module.exports = nextConfig;
