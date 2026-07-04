export function getImagePath(path: string): string {
  return path.startsWith("/") ? path : `/${path}`;
}

export function getFallbackImage(
  width: number = 400,
  height: number = 300,
  text: string = "Image"
): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="100%" height="100%" fill="#1E293B"/>
    <rect x="2" y="2" width="${width - 4}" height="${height - 4}" fill="none" stroke="#334155" stroke-width="2" rx="8"/>
    <text x="50%" y="45%" font-family="Inter, Arial, sans-serif" font-size="16" fill="#64748B" text-anchor="middle" dominant-baseline="middle">${text}</text>
    <text x="50%" y="58%" font-family="Inter, Arial, sans-serif" font-size="12" fill="#475569" text-anchor="middle" dominant-baseline="middle">Avinash Roadways</text>
  </svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export function preloadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = getImagePath(src);
  });
}
