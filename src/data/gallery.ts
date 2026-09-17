export const galleryCategories = ["All photos", "Awareness", "Community gatherings", "Togetherness"] as const;
export type GalleryCategory = (typeof galleryCategories)[number];

export interface GalleryPhoto {
  id: number;
  src: string;
  width: number;
  height: number;
  alt: string;
  category: Exclude<GalleryCategory, "All photos">;
}

// Describe only what is visible. WhatsApp filenames are not event dates.
const photos: [number, number, number, string, GalleryPhoto["category"]][] = [
  [1, 960, 1280, "Two women wearing awareness shirts beside flowering plants", "Awareness"],
  [2, 960, 1280, "A woman in a breast cancer awareness shirt beside pink flowers", "Awareness"],
  [3, 960, 1280, "Four women showing the messages on the backs of their awareness shirts", "Awareness"],
  [4, 960, 1280, "Women in matching awareness shirts gathering in a courtyard", "Awareness"],
  [5, 960, 1280, "A group posing together in black breast cancer awareness shirts", "Awareness"],
  [6, 960, 1280, "Women in awareness shirts standing beside a table of shared food", "Awareness"],
  [7, 960, 1280, "A conversation beside a table of food at a community gathering", "Awareness"],
  [8, 960, 1280, "Women wearing awareness shirts standing together under a canopy", "Awareness"],
  [9, 960, 1280, "Three women in breast cancer awareness shirts posing beneath a canopy", "Awareness"],
  [10, 774, 1032, "A smiling woman in a white T-shirt at an outdoor gathering", "Togetherness"],
  [11, 774, 1032, "Women in white T-shirts sharing a lively moment outside", "Togetherness"],
  [12, 1040, 780, "A group standing together in a clinic corridor", "Community gatherings"],
  [13, 780, 1040, "A speaker addressing women seated along a covered veranda", "Community gatherings"],
  [14, 1080, 810, "An outdoor group gathering photographed from the front of the seated circle", "Community gatherings"],
  [15, 780, 1040, "A woman speaking while other participants sit beneath a tree", "Community gatherings"],
  [16, 780, 1040, "Women standing together during an outdoor gathering", "Togetherness"],
  [17, 1040, 780, "Five women posing together outside a thatched building", "Togetherness"],
  [18, 1040, 780, "A speaker addressing a large group seated in the shade of a tree", "Community gatherings"],
  [19, 780, 1040, "A wide view of a community discussion beneath a leafy tree", "Community gatherings"],
  [22, 810, 1080, "A cheerful group selfie taken outdoors", "Togetherness"],
  [23, 810, 1080, "Friends posing for a selfie beside a courtyard wall", "Togetherness"],
  [24, 1040, 780, "Women seated in a circle outside a house for a group discussion", "Community gatherings"],
  [25, 810, 1080, "A group selfie inside a vehicle", "Togetherness"],
  [26, 810, 1080, "Two women seated outdoors in the shade", "Togetherness"],
  [27, 1024, 576, "People gathered near an outdoor seating area with printed materials", "Community gatherings"],
  [28, 1024, 576, "An outdoor gathering viewed from behind the participants", "Community gatherings"],
  [29, 780, 470, "A group posing beside the Dete Council Clinic sign", "Community gatherings"],
  [30, 774, 1032, "Women in white and blue standing together in a courtyard", "Togetherness"],
  [31, 774, 1032, "Two women sharing a playful moment at a group gathering", "Togetherness"],
  [32, 774, 1032, "Women smiling and moving together outside a house", "Togetherness"],
  [33, 774, 1032, "A group portrait outside a grey house", "Togetherness"],
  [34, 1020, 768, "Participants seated around a table during an indoor gathering", "Community gatherings"],
  [35, 1020, 768, "A speaker standing behind a group gathered around a table", "Community gatherings"],
  [36, 1020, 768, "Women seated in a row beneath a tree outside a building", "Community gatherings"],
  [37, 1020, 768, "An indoor gathering with participants talking around a shared table", "Community gatherings"],
  [38, 1020, 768, "A candid view of a group listening to a standing speaker indoors", "Community gatherings"],
  [39, 768, 1020, "Participants seated beside refreshments at an indoor gathering", "Community gatherings"],
  [40, 1020, 768, "A group sharing conversation around a table indoors", "Community gatherings"],
  [41, 1020, 768, "A circle of women seated outdoors in the shade", "Community gatherings"],
];

// Lead with clear, varied photographs; keep every other suitable photo in the gallery.
const featuredOrder = [9, 18, 17, 29, 6, 24, 15, 35, 5];
export const galleryPhotos: GalleryPhoto[] = photos
  .map(([id, width, height, alt, category]) => ({
    id, width, height, alt, category,
    src: `/images/community/photo-${String(id).padStart(2, "0")}.jpeg`,
  }))
  .sort((a, b) => {
    const rank = (id: number) => {
      const index = featuredOrder.indexOf(id);
      return index === -1 ? featuredOrder.length + id : index;
    };
    return rank(a.id) - rank(b.id);
  });
