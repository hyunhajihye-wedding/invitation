const BASE_PATH = "/src/assets/imgs/gallerys";
const COUNT_OF_IMGS = 15;

/**
 * 갤러리 이미지 경로 목록을 반환합니다.
 * @returns {string[]} 이미지 경로 배열
 */
export const getGalleryImages = () => {
  const images = [];
  for (let i = 1; i <= COUNT_OF_IMGS; i++) {
    images.push(`${BASE_PATH}/gallery${String(i).padStart(2, "0")}.jpg`);
  }
  return images;
};

/**
 * 특정 인덱스의 갤러리 이미지를 반환합니다.
 * @param {number} index 이미지 인덱스 (1부터 시작)
 * @returns {string | null} 이미지 경로 또는 null
 */
export const getGalleryImageByIndex = (index) => {
  if (index < 1 || index > COUNT_OF_IMGS) {
    console.warn("Invalid index. Please provide an index between 1 and 15.");
    return null;
  }
  return `${BASE_PATH}/gallery${String(index).padStart(2, "0")}.jpg`;
};
