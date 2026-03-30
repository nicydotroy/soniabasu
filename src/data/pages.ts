export interface PageData {
  slug: string;
  type: 'location' | 'category' | 'special';
  title: string;
  description: string;
  keywords: string;
  heroTitle: string;
  heroParagraph: string;
  intro: string;
  h2Escorts: string;
  subtitleEscorts: string;
  locationName: string; // used in escort card location label
  ogImage?: string;
  geoRegion?: string;
  geoPlacename?: string;
  geoPosition?: string;
  schemaName?: string;
  schemaLat?: number;
  schemaLng?: number;
  schemaReviewCount?: number;
}

function titleCase(str: string): string {
  return str
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function makeLocationPage(location: string): PageData {
  const name = titleCase(location);
  const slug = `escorts-in-${location}`;
  return {
    slug,
    type: 'location',
    locationName: name,
    title: `Escorts in ${name} | Premium Companion Service 24/7 | VVIP Escorts`,
    description: `Top-rated escorts in ${name} available 24/7. Premium call girls, VIP companions, independent escorts & models. Safe, discreet, verified. Book now!`,
    keywords: `escorts in ${location}, ${location} escorts, call girls in ${location}, ${location} call girls, vip escorts ${location}, independent escorts ${location}`,
    heroTitle: `Escorts in ${name} | Premium Call Girls Available 24/7`,
    heroParagraph: `Top-rated ${name} escorts service with verified profiles. VIP companions, independent escorts, Russian models, and college girls available across all ${name} locations. Discreet & safe booking.`,
    intro: `Premium <strong>escorts in ${name}</strong> available 24/7. We provide verified companions in ${name} with 24/7 availability for incall and outcall services. Also serving <a href="/" style="color:#c9a84c;text-decoration:none;border-bottom:2px solid #c9a84c;">Mumbai escorts</a> and other major areas.`,
    h2Escorts: `Best Escorts in ${name} - Verified Profiles`,
    subtitleEscorts: `Premium ${name} call girls, VIP escorts, and independent companions with verified profiles. Available 24/7 for outcall and incall services.`,
    ogImage: `https://vvip-escorts.com/images/escorts/${slug}.webp`,
    schemaName: `VVIP Escorts ${name}`,
    schemaReviewCount: Math.floor(100 + Math.random() * 300),
  };
}

function makeCategoryPage(cat: string, customData?: Partial<PageData>): PageData {
  const name = titleCase(cat);
  return {
    slug: cat,
    type: 'category',
    locationName: 'Mumbai',
    title: `${name} Mumbai | Premium Companion Service 24/7 | VVIP Escorts`,
    description: `Book premium ${name.toLowerCase()} in Mumbai available 24/7. Verified profiles, VIP companions, discreet service. Call now!`,
    keywords: `${cat} in mumbai, ${cat} mumbai, ${cat.replace(/-/g, ' ')} mumbai`,
    heroTitle: `${name} - Premium Service Available 24/7`,
    heroParagraph: `Discover Mumbai's finest ${name.toLowerCase()} with verified profiles. Available 24/7 for incall and outcall services across all Mumbai areas. Real photos, real girls, guaranteed satisfaction.`,
    intro: `Premium <strong>${name.toLowerCase()}</strong> available 24/7 in Mumbai. We provide verified companions with 24/7 availability for incall and outcall services.`,
    h2Escorts: `Best ${name} - Verified Profiles`,
    subtitleEscorts: `Premium ${name.toLowerCase()}, VIP escorts, and independent companions with verified profiles. Available 24/7 across all Mumbai areas.`,
    ogImage: `https://vvip-escorts.com/images/hero-banner.webp`,
    schemaName: `VVIP Escorts Mumbai`,
    schemaLat: 19.076,
    schemaLng: 72.8777,
    schemaReviewCount: Math.floor(200 + Math.random() * 400),
    ...customData,
  };
}

// All location slugs
export const locationSlugs = [
  'agra','ahmedabad','airoli','ambernath','ambivali','andheri','asangaon','baba','badlapur','bandra',
  'bangalore','belapur','bhandup','bhayandar','bhiwandi','bhopal','bhubaneswar','boisar','borivali',
  'byculla','chandigarh','charni-road','chembur','chennai','chinchpokli','churchgate','coimbatore',
  'colaba','cst','dadar','dehradun','delhi','diva','dombivli','fort','ghansoli','ghatkopar','goa',
  'goregaon','govandi','grant-road','gurgaon','guwahati','gwalior','hyderabad','indore','jaipur',
  'jalandhar','jodhpur','jogeshwari','juhu','juinagar','kalamboli','kalwa','kalyan','kamothe',
  'kandivali','kanjurmarg','kanpur','karjat','kasara','khar','khar-road','kharghar','khopoli',
  'kochi','kolkata','kopar-khairane','kurla','lokhandwala','lower-parel','lucknow','ludhiana',
  'mahalaxmi','mahim','malad','mangalore','mankhurd','marine-lines','masjid-bandar','matunga',
  'mira-road','mulund','mumbai-airport','mumbai-central','mumbra','mysore','nagpur','nahur',
  'naigaon','nalasopara','nariman-point','nashik','navi-mumbai','neral','nerul','noida','palghar',
  'panvel','parel','patna','powai','prabhadevi','pune','rabale','rajkot','ranchi','sakinaka',
  'sanpada','santacruz','saphale','seawood','siliguri','sion','surat','thakurli','thane','titwala',
  'udaipur','ulhasnagar','ulwe','varanasi','vasai','vashi','versova','vidyavihar','vijayawada',
  'vikhroli','vile-parle','virar','visakhapatnam','wadala','worli',
];

// All category slugs
export const categorySlugs = [
  'air-hostess-escorts','bdsm-escorts','bengali-escorts','bollywood-actress-escorts',
  'celebrity-escorts','college-girls-escorts','female-model-escorts','girlfriends-escorts',
  'gujarati-escorts','high-profile-escorts','hj-bj-escorts','horny-escorts','house-wife-escorts',
  'independent-escorts','jaat-escorts','lesbian-escorts','marathi-escorts','marwadi-escorts',
  'model-escorts','mumbai-escorts','muslim-escorts','nepali-escorts','north-indian-escorts',
  'punjabi-escorts','role-play-escorts','russian-escorts','south-indian-escorts',
  'unsatisfied-bhabhi','unsatisfied-female','vip-escorts',
];

const allLocationPages: PageData[] = locationSlugs.map(makeLocationPage);
const allCategoryPages: PageData[] = categorySlugs.map((cat) => makeCategoryPage(cat));

const allPages: PageData[] = [...allLocationPages, ...allCategoryPages];

const pageMap = new Map<string, PageData>(allPages.map((p) => [p.slug, p]));

export function getPageData(slug: string): PageData | null {
  return pageMap.get(slug) ?? null;
}

export function getAllSlugs(): string[] {
  return allPages.map((p) => p.slug);
}
