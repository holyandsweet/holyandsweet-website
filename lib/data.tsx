import { 
  YouTubeLogo, SpotifyLogo, AppleMusicLogo, AmazonMusicLogo, 
  DoveIcon, PrayHandsIcon, SunIcon, SailboatIcon, LeafBranchIcon, LightRaysIcon,
  TownIcon, ButterflyIcon, BuilderIcon, MusicNoteIcon, BooksStackIcon, OpenBibleIcon,
  TShirtIcon, MugIcon, JournalIcon, HoodieIcon, WallArtIcon, CalendarIcon, GiftBoxIcon, NotebookIcon,
  ColoringBookIcon, StorybookIcon, FlashcardsIcon, StickerIcon, PlushIcon
} from "@/components/icons";

export const KIDS_SERIES = [
  {
    icon: <TownIcon />,
    name: "Sweetville Friends",
    desc: "Kids and animals learn faith and kindness",
    episodes: "8 Episodes",
    bg: "#082040",
    color: "#38D4E0",
  },
  {
    icon: <ButterflyIcon />,
    name: "Fruitful Forest",
    desc: "Exploring the fruits of the spirit in nature",
    episodes: "12 Episodes",
    bg: "#0A3060",
    color: "#18B8CC",
  }
];

export const VIDEOS_KIDS = [
  {
    icon: <SailboatIcon />,
    bg: "#071830",
    title: "Noah Obeys God",
    series: "Bible Story Time",
  },
  {
    icon: <OpenBibleIcon />,
    bg: "#0A2848",
    title: "David and Goliath",
    series: "Bible Story Time",
  }
];

export const SONGS = [
  {
    icon: <DoveIcon />,
    bg: "#083040",
    title: "Still Waters",
    tag: "Worship",
    verse: "Psalm 23:2",
  },
  {
    icon: <PrayHandsIcon />,
    bg: "#0A3060",
    title: "Lord, I Surrender",
    tag: "Prayer",
    verse: "James 4:7",
  },
  {
    icon: <SunIcon />,
    bg: "#114860",
    title: "Morning Mercies",
    tag: "Praise",
    verse: "Lamentations 3:22",
  }
];

export const PRODUCTS_ADULT = [
  {
    icon: <TShirtIcon />,
    bg: "#E4F4F6",
    name: "Faith Tee",
    tag: "Apparel",
    price: "$32",
  },
  {
    icon: <JournalIcon />,
    bg: "#DAF0F2",
    name: "Prayer Journal",
    tag: "Devotional",
    price: "$24",
  },
  {
    icon: <MugIcon />,
    bg: "#EEF8F9",
    name: "Morning Mug",
    tag: "Home",
    price: "$18",
  }
];

export const PRODUCTS_KIDS = [
  {
    icon: <ColoringBookIcon />,
    bg: "#DDFAF8",
    name: "Kids Coloring Book",
    tag: "Activity",
    price: "$16",
  },
  {
    icon: <StickerIcon />,
    bg: "#B4E4EC",
    name: "Virtue Stickers",
    tag: "Fun",
    price: "$8",
  },
  {
    icon: <PlushIcon />,
    bg: "#DAF0F2",
    name: "Plush Dove",
    tag: "Toys",
    price: "$22",
  }
];

export const PLATFORMS = [
  {
    logo: <YouTubeLogo />,
    name: "YouTube",
    sub: "Watch & Subscribe",
  },
  {
    logo: <SpotifyLogo />,
    name: "Spotify",
    sub: "Listen Now",
  },
  {
    logo: <AppleMusicLogo />,
    name: "Apple Music",
    sub: "Stream Anywhere",
  }
];
