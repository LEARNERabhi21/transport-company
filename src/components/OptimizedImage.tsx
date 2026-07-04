import { useState } from "react";
import { getFallbackImage } from "@/utils/imageUtils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
}

export default function OptimizedImage({
  src,
  alt,
  className = "",
  fallbackSrc,
  width,
  height,
  loading = "lazy",
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc ?? getFallbackImage(width ?? 400, height ?? 300, alt));
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      onError={handleError}
      width={width}
      height={height}
    />
  );
}
