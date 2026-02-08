const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');
const outputDir = imagesDir;

// JPG 파일 찾기
const jpgFiles = fs.readdirSync(imagesDir).filter(file =>
  file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')
);

console.log(`Found ${jpgFiles.length} JPG files to convert\n`);

// 변환 프로세스
async function convertImages() {
  for (const file of jpgFiles) {
    const inputPath = path.join(imagesDir, file);
    const outputPath = path.join(outputDir, file.replace(/\.(jpg|jpeg)$/i, '.webp'));

    try {
      // 원본 파일 크기
      const originalStats = fs.statSync(inputPath);
      const originalSize = (originalStats.size / 1024).toFixed(2);

      // WebP로 변환 (품질 80, SEO 최적화)
      await sharp(inputPath)
        .webp({
          quality: 80,
          effort: 6, // 압축 노력 (0-6, 6이 최대 압축)
          smartSubsample: true // 스마트 서브샘플링으로 품질 유지
        })
        .toFile(outputPath);

      // 변환된 파일 크기
      const convertedStats = fs.statSync(outputPath);
      const convertedSize = (convertedStats.size / 1024).toFixed(2);
      const reduction = ((1 - convertedStats.size / originalStats.size) * 100).toFixed(1);

      console.log(`✓ ${file}`);
      console.log(`  ${originalSize}KB → ${convertedSize}KB (${reduction}% 감소)\n`);

    } catch (error) {
      console.error(`✗ Error converting ${file}:`, error.message);
    }
  }

  console.log('\n✅ All images converted successfully!');
  console.log('\n⚠️  Remember to update image references in your code from .jpg to .webp');
}

convertImages();
