import Image, { type ImageProps } from "next/image";

type SiteImageProps = Omit<ImageProps, "alt"> & {
  alt: string;
};

export default function SiteImage({ src, alt, ...props }: SiteImageProps) {
  const srcStr = typeof src === "string" ? src : "";
  return <Image src={src} alt={alt} unoptimized={srcStr.endsWith(".svg")} {...props} />;
}
