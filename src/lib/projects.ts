import nestharvest from "@/assets/work-nestharvest.jpg";
import genzmind from "@/assets/work-genzmind.jpg";
import investadvisors from "@/assets/work-investadvisors.jpg";
import archvault from "@/assets/work-archvault.jpg";
import biterush from "@/assets/work-biterush.jpg";

export type Project = {
  slug: string;
  name: string;
  domain: string;
  category: string;
  year: string;
  tagline: string;
  description: string;
  services: string[];
  image: string;
  palette: string[];
};

export const projects: Project[] = [
  {
    slug: "nestharvest",
    name: "Nest Harvest",
    domain: "nestharvest.in",
    category: "E-Commerce · Organic Goods",
    year: "2024",
    tagline: "Earthy commerce for a slow-living home brand.",
    description:
      "A warm, tactile storefront for a homegrown organic goods label. We designed a calm shopping experience that feels like flipping through a seasonal cookbook.",
    services: ["Brand Identity", "Shopify Build", "Product Photography Direction"],
    image: nestharvest,
    palette: ["#C97B3C", "#E8DCC4", "#3A3128"],
  },
  {
    slug: "genzmind",
    name: "GenZ Mind",
    domain: "genzmind.in",
    category: "Wellness · Meditation",
    year: "2024",
    tagline: "A breath of fresh air for a generation that needs one.",
    description:
      "An ethereal, soft-spoken digital home for a Gen-Z mental wellness platform. Built around a gradient language that feels like exhaling.",
    services: ["UX Strategy", "Web App", "Motion Design"],
    image: genzmind,
    palette: ["#C8B7E8", "#A8E6D4", "#FFC6D8"],
  },
  {
    slug: "investadvisors",
    name: "Invest Advisors",
    domain: "investadvisors.in",
    category: "Finance · Advisory",
    year: "2023",
    tagline: "Quiet authority for a serious financial firm.",
    description:
      "A confident, marble-and-gold digital presence for a boutique finance advisory. Restrained typography, sharp data viz, zero noise.",
    services: ["Brand System", "Web Design", "Dashboard UI"],
    image: investadvisors,
    palette: ["#0F1A2E", "#D4A24C", "#EDE7DC"],
  },
  {
    slug: "archvault",
    name: "Arch Vault",
    domain: "archvault.in",
    category: "Architecture · Portfolio",
    year: "2024",
    tagline: "Concrete poetry for a brutalist studio.",
    description:
      "A monochrome, monumentally-typeset portfolio for an architecture practice. We let the buildings speak — and the white space breathe.",
    services: ["Art Direction", "Custom CMS", "Editorial Layout"],
    image: archvault,
    palette: ["#0A0A0A", "#E5E5E5", "#8C8C8C"],
  },
  {
    slug: "biterush",
    name: "Bite Rush",
    domain: "biterush.in",
    category: "F&B · Restaurant",
    year: "2025",
    tagline: "Loud, fast, hungry — like the food.",
    description:
      "An unapologetically vibrant brand & ordering experience for a quick-service food chain. Pop colours, kinetic type, smooth checkout.",
    services: ["Brand Refresh", "Web + Order Flow", "Illustration"],
    image: biterush,
    palette: ["#FFD11A", "#E63B26", "#FFFFFF"],
  },
];
