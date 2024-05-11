import noImage from "../assets/no-image-placeholder.webp";

export default function getCroppedImageUrl(url: string): string {
  if (!url) return noImage;
  const index = url.indexOf("media/") + 6;
  url = url.slice(0, index) + "crop/600/400/" + url.slice(index);
  return url;
}
