import automotive from "@/assets/project-automotive.jpg";
import product from "@/assets/project-product.jpg";
import motion from "@/assets/project-motion.jpg";
import workspace from "@/assets/workspace.jpg";
import portrait from "@/assets/about-photo.jpg";

export const galleryCategories = [
  "All",
  "Automotive",
  "Product",
  "Motion",
  "CGI",
  "Branding",
  "Experiments",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, "All">;
  src: string;
  /** Aspect ratio used for masonry sizing */
  ratio: number;
  video?: string;
  projectSlug?: string;
};

const SAMPLE_VIDEO = "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4";

const seed: Omit<GalleryItem, "id">[] = [
  { title: "BMW M5 RENDER", category: "Automotive", src: automotive, ratio: 1.55, projectSlug: "automotive-cgi" },
  { title: "Nothing cell Concept", category: "ANIMATION", src: product, ratio: 1.55, projectSlug: "product-visualization" },
  { title: "KERALA THEYYAM RENDER", category: "3D ARTWORK", src: motion, ratio: 1.55, video: SAMPLE_VIDEO, projectSlug: "motion-design" },
  { title: "Night Studio", category: "Experiments", src: workspace, ratio: 1.25 },
  { title: "Portrait Study", category: "Branding", src: portrait, ratio: 0.8 },
  { title: "Paint Breakdown", category: "CGI", src: automotive, ratio: 1.55 },
  { title: "Pedestal Light Test", category: "Product", src: product, ratio: 1.55 },
  { title: "Clay Render Pass", category: "CGI", src: motion, ratio: 1.55, video: SAMPLE_VIDEO },
  { title: "Rig Setup", category: "Experiments", src: workspace, ratio: 1.25 },
  { title: "Roofline Rim Light", category: "Automotive", src: automotive, ratio: 1.55 },
  { title: "Identity Frames", category: "Branding", src: product, ratio: 1.55 },
  { title: "Loop Beat 04", category: "Motion", src: motion, ratio: 1.55, video: SAMPLE_VIDEO },
  { title: "Desk Reference", category: "Experiments", src: workspace, ratio: 1.25 },
  { title: "Wheel Detail", category: "Automotive", src: automotive, ratio: 1.55 },
  { title: "Bottle Macro", category: "Product", src: product, ratio: 1.55 },
  { title: "Miniature Set", category: "CGI", src: motion, ratio: 1.55 },
];

export const galleryItems: GalleryItem[] = seed.map((item, i) => ({
  ...item,
  id: `gallery-${i + 1}`,
}));
