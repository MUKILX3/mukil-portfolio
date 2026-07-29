import automotive from "@/assets/project-automotive.jpg";
import product from "@/assets/project-product.jpg";
import motion from "@/assets/project-motion.jpg";
import workspace from "@/assets/workspace.jpg";

export type Project = {
  slug: string;
  index: string;
  category: string;
  title: string;
  description: string;
  software: string[];
  cover: string;
  theme: "ink" | "highlight";
  notes: string[];
  overview: string;
  goal: string;
  process: { step: string; text: string }[];
  gallery: string[];
  video?: string;
  behindTheScenes: string;
};

export const projects: Project[] = [
  {
    slug: "automotive-cgi",
    index: "01",
    category: "Automotive CGI",
    title: "Custom Jimny",
    description: "High quality automotive CGI render built for a custom off-road build campaign.",
    software: ["Blender", "Cycles", "Photoshop"],
    cover: automotive,
    theme: "ink",
    notes: ["3D Modeling", "Rendering", "Lighting"],
    overview:
      "A full CGI campaign key visual: hard-surface modelling, shader work and studio lighting recreated entirely in Blender, finished with a filmic grade.",
    goal: "Deliver a photoreal hero frame that could replace a physical studio shoot while keeping full creative control over paint, wheels and lighting.",
    process: [
      { step: "Blockout", text: "Reference boards, proportions and hard-surface blockout of the body." },
      { step: "Shading", text: "Layered car paint, rubber and anodised metal shaders with real-world roughness." },
      { step: "Lighting", text: "Studio HDRI plus three large softboxes for controlled rim separation." },
      { step: "Comp", text: "Multi-pass compositing, reflection cleanup and filmic colour grade." },
    ],
    gallery: [automotive, workspace],
    behindTheScenes: "Around 40 lighting iterations before the rim highlight sat right along the roofline.",
  },
  {
    slug: "product-visualization",
    index: "02",
    category: "Product Visualization",
    title: "Noir Skincare",
    description: "Premium product visualization for a matte-black skincare launch.",
    software: ["Blender", "Substance", "After Effects"],
    cover: product,
    theme: "highlight",
    notes: ["Look Dev", "Product CGI", "Grade"],
    overview:
      "A minimal, high-contrast product suite: bottle, carton and pedestal built for print and social crops from a single scene.",
    goal: "Make black-on-black read with clarity — separation through light shaping instead of colour.",
    process: [
      { step: "Look dev", text: "Micro-roughness studies on the bottle to hold the light band." },
      { step: "Set", text: "Stone pedestal sculpt and displacement detailing." },
      { step: "Light", text: "Single gobo key with negative fill for the diagonal shaft." },
      { step: "Deliver", text: "Multiple crops rendered from one camera rig." },
    ],
    gallery: [product],
    behindTheScenes: "The diagonal light shaft is a modelled gobo, not a post effect.",
  },
  {
    slug: "motion-design",
    index: "03",
    category: "Motion Design / CGI Animation",
    title: "Sound Hills Loop",
    description: "3D motion loop animation exploring miniature worlds and music.",
    software: ["Blender", "After Effects", "Premiere Pro"],
    cover: motion,
    theme: "ink",
    notes: ["3D Animation", "Looping", "Design"],
    overview:
      "A seamless looping miniature world animated for social — soft clay shading, tiny characters and a bouncing camera move.",
    goal: "Build a scroll-stopping loop that feels handmade rather than rendered.",
    process: [
      { step: "Boards", text: "Paper thumbnails of the loop beats." },
      { step: "Layout", text: "Camera path designed so frame 1 and frame 240 match exactly." },
      { step: "Animation", text: "Overlapping character cycles with offset timing." },
      { step: "Finish", text: "Grain, chromatic edge and sound design pass." },
    ],
    gallery: [motion],
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    behindTheScenes: "The loop is 240 frames; every character cycle is a divisor of that number.",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
