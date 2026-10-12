import { siteImages } from "./images";

// Keep the sitemap and each page's search metadata on the same canonical URLs.
export const searchPages = {
  "/terms-and-conditions": {
    title: "Terms & Conditions",
    description: "Read the guidelines for using Phakama’s website, sharing content, health awareness information and participating in community activities.",
    image: siteImages.homepage,
    imageAlt: "Phakama community gathering in Hwange",
  },
  "/": {
    title: "Phakama Women's Organization | Hwange, Zimbabwe",
    description: "Phakama brings women together in Hwange district, Zimbabwe through community meetings, clean-up campaigns, women's wellbeing and breast cancer awareness.",
    image: siteImages.homepage,
    imageAlt: "Phakama community gathering in Hwange",
  },
  "/about": {
    title: "About Our Women's Organisation in Hwange",
    description: "Meet Phakama, a community-based women's organisation in Hwange district, Zimbabwe. Discover our purpose, values and commitment to women's wellbeing.",
    image: siteImages.gathering,
    imageAlt: "Community members gathered for a conversation",
  },
  "/programs": {
    title: "Community Programmes & Campaigns in Hwange",
    description: "Explore Phakama's annual meetings, clean-up campaigns, women's wellbeing activities and breast cancer awareness initiatives across Hwange district.",
    image: siteImages.programs,
    imageAlt: "Community members gathered in a clinic corridor",
  },
  "/womens-health": {
    title: "Women's Health & Wellbeing in Hwange",
    description: "Explore women's wellbeing with Phakama in Hwange, Zimbabwe: health awareness, emotional wellbeing, community connection and opportunities to participate.",
    image: siteImages.community,
    imageAlt: "Women taking part in a community discussion",
  },
  "/breast-cancer-awareness": {
    title: "Breast Cancer Awareness & Community Support",
    description: "Find breast cancer awareness information, signs and symptoms, and community support with Phakama Women's Organization in Hwange district, Zimbabwe.",
    image: siteImages.awareness,
    imageAlt: "A speaker addressing a community awareness gathering",
  },
  "/updates": {
    title: "Hwange Community Stories & Updates",
    description: "Read Phakama's stories about annual meetings, clean-up campaigns and women's wellbeing across Hwange district, alongside news from the wider region.",
    image: siteImages.gathering,
    imageAlt: "Participants sharing a community conversation",
  },
  "/gallery": {
    title: "Community Gatherings & Awareness Photo Gallery",
    description: "Explore Phakama's community photo gallery: women coming together, awareness activities and shared moments from Hwange district, Zimbabwe.",
    image: siteImages.support,
    imageAlt: "Women standing together in awareness shirts",
  },
  "/get-involved": {
    title: "Volunteer & Partner with Phakama in Hwange",
    description: "Support women's wellbeing in Hwange district. Volunteer, partner with Phakama or contribute to community meetings, clean-up campaigns and awareness activities.",
    image: siteImages.programs,
    imageAlt: "Members of the Phakama community",
  },
  "/contact": {
    title: "Contact Phakama Women's Organization",
    description: "Contact Phakama in Hwange district, Zimbabwe by WhatsApp, phone or email. Ask about community activities, women's wellbeing, volunteering and partnerships.",
    image: siteImages.homepage,
    imageAlt: "Phakama community members gathered together",
  },
} as const;

export type SearchPagePath = keyof typeof searchPages;
