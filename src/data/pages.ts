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
  schemaRegion?: string;
  schemaPostalCode?: string;
  schemaReviewCount?: number;
  /** ISO 8601 date string for dateModified in JSON-LD. */
  dateModified?: string;
}

function titleCase(str: string): string {
  return str
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

// Stable, deterministic 32-bit hash used in place of Math.random() so JSON-LD
// review counts don't change between builds — Google treats inconsistent
// structured data as a quality signal against the site.
function hash(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 16777619);
  }
  return Math.abs(h);
}

/**
 * Per-location coordinates, state and PIN code. Used in LocalBusiness JSON-LD
 * so each location page advertises the *correct* address — Google penalises
 * mismatched geo data as spam.
 */
interface GeoEntry {
  lat: number;
  lng: number;
  region: string;
  postalCode: string;
}

const FALLBACK_GEO: GeoEntry = { lat: 19.076, lng: 72.8777, region: 'Maharashtra', postalCode: '400001' };

const LOCATION_GEO: Record<string, GeoEntry> = {
  // Maharashtra — Mumbai & MMR
  'mumbai':            { lat: 19.0760, lng: 72.8777, region: 'Maharashtra', postalCode: '400001' },
  'andheri':           { lat: 19.1197, lng: 72.8468, region: 'Maharashtra', postalCode: '400053' },
  'bandra':            { lat: 19.0596, lng: 72.8295, region: 'Maharashtra', postalCode: '400050' },
  'juhu':              { lat: 19.1075, lng: 72.8263, region: 'Maharashtra', postalCode: '400049' },
  'colaba':            { lat: 18.9067, lng: 72.8147, region: 'Maharashtra', postalCode: '400005' },
  'powai':             { lat: 19.1176, lng: 72.9060, region: 'Maharashtra', postalCode: '400076' },
  'worli':             { lat: 19.0176, lng: 72.8118, region: 'Maharashtra', postalCode: '400018' },
  'dadar':             { lat: 19.0186, lng: 72.8423, region: 'Maharashtra', postalCode: '400028' },
  'lower-parel':       { lat: 19.0021, lng: 72.8302, region: 'Maharashtra', postalCode: '400013' },
  'malad':             { lat: 19.1864, lng: 72.8493, region: 'Maharashtra', postalCode: '400064' },
  'kandivali':         { lat: 19.2095, lng: 72.8526, region: 'Maharashtra', postalCode: '400067' },
  'borivali':          { lat: 19.2335, lng: 72.8567, region: 'Maharashtra', postalCode: '400092' },
  'santacruz':         { lat: 19.0824, lng: 72.8410, region: 'Maharashtra', postalCode: '400054' },
  'khar':              { lat: 19.0696, lng: 72.8347, region: 'Maharashtra', postalCode: '400052' },
  'goregaon':          { lat: 19.1647, lng: 72.8493, region: 'Maharashtra', postalCode: '400062' },
  'ghatkopar':         { lat: 19.0863, lng: 72.9081, region: 'Maharashtra', postalCode: '400077' },
  'chembur':           { lat: 19.0522, lng: 72.9005, region: 'Maharashtra', postalCode: '400071' },
  'kurla':             { lat: 19.0728, lng: 72.8826, region: 'Maharashtra', postalCode: '400070' },
  'mahalaxmi':         { lat: 18.9826, lng: 72.8198, region: 'Maharashtra', postalCode: '400011' },
  'mahim':             { lat: 19.0413, lng: 72.8400, region: 'Maharashtra', postalCode: '400016' },
  'mulund':            { lat: 19.1726, lng: 72.9569, region: 'Maharashtra', postalCode: '400080' },
  'bhandup':           { lat: 19.1448, lng: 72.9389, region: 'Maharashtra', postalCode: '400078' },
  'vikhroli':          { lat: 19.1126, lng: 72.9248, region: 'Maharashtra', postalCode: '400079' },
  'fort':              { lat: 18.9320, lng: 72.8347, region: 'Maharashtra', postalCode: '400001' },
  'churchgate':        { lat: 18.9322, lng: 72.8264, region: 'Maharashtra', postalCode: '400020' },
  'cst':               { lat: 18.9398, lng: 72.8355, region: 'Maharashtra', postalCode: '400001' },
  'nariman-point':     { lat: 18.9258, lng: 72.8237, region: 'Maharashtra', postalCode: '400021' },
  'marine-lines':      { lat: 18.9434, lng: 72.8234, region: 'Maharashtra', postalCode: '400002' },
  'grant-road':        { lat: 18.9624, lng: 72.8186, region: 'Maharashtra', postalCode: '400007' },
  'mumbai-central':    { lat: 18.9690, lng: 72.8205, region: 'Maharashtra', postalCode: '400008' },
  'byculla':           { lat: 18.9777, lng: 72.8326, region: 'Maharashtra', postalCode: '400027' },
  'parel':             { lat: 19.0058, lng: 72.8369, region: 'Maharashtra', postalCode: '400012' },
  'prabhadevi':        { lat: 19.0177, lng: 72.8302, region: 'Maharashtra', postalCode: '400025' },
  'wadala':            { lat: 19.0167, lng: 72.8639, region: 'Maharashtra', postalCode: '400031' },
  'matunga':           { lat: 19.0270, lng: 72.8585, region: 'Maharashtra', postalCode: '400019' },
  'sion':              { lat: 19.0407, lng: 72.8623, region: 'Maharashtra', postalCode: '400022' },
  'versova':           { lat: 19.1311, lng: 72.8175, region: 'Maharashtra', postalCode: '400061' },
  'lokhandwala':       { lat: 19.1364, lng: 72.8295, region: 'Maharashtra', postalCode: '400053' },
  'jogeshwari':        { lat: 19.1349, lng: 72.8478, region: 'Maharashtra', postalCode: '400060' },
  'vile-parle':        { lat: 19.0996, lng: 72.8385, region: 'Maharashtra', postalCode: '400056' },
  'sakinaka':          { lat: 19.1010, lng: 72.8896, region: 'Maharashtra', postalCode: '400072' },
  'kanjurmarg':        { lat: 19.1289, lng: 72.9352, region: 'Maharashtra', postalCode: '400078' },
  'govandi':           { lat: 19.0524, lng: 72.9223, region: 'Maharashtra', postalCode: '400088' },
  'mankhurd':          { lat: 19.0419, lng: 72.9261, region: 'Maharashtra', postalCode: '400088' },
  'mumbai-airport':    { lat: 19.0896, lng: 72.8656, region: 'Maharashtra', postalCode: '400099' },
  'nahur':             { lat: 19.1567, lng: 72.9388, region: 'Maharashtra', postalCode: '400078' },
  'masjid-bandar':     { lat: 18.9520, lng: 72.8347, region: 'Maharashtra', postalCode: '400003' },
  'chinchpokli':       { lat: 18.9847, lng: 72.8313, region: 'Maharashtra', postalCode: '400011' },
  'charni-road':       { lat: 18.9521, lng: 72.8197, region: 'Maharashtra', postalCode: '400004' },
  'vidyavihar':        { lat: 19.0810, lng: 72.8980, region: 'Maharashtra', postalCode: '400077' },

  // Navi Mumbai + Thane
  'navi-mumbai':       { lat: 19.0330, lng: 73.0297, region: 'Maharashtra', postalCode: '400614' },
  'thane':             { lat: 19.2183, lng: 72.9781, region: 'Maharashtra', postalCode: '400601' },
  'vashi':             { lat: 19.0759, lng: 73.0007, region: 'Maharashtra', postalCode: '400703' },
  'belapur':           { lat: 19.0235, lng: 73.0405, region: 'Maharashtra', postalCode: '400614' },
  'nerul':             { lat: 19.0337, lng: 73.0190, region: 'Maharashtra', postalCode: '400706' },
  'airoli':            { lat: 19.1564, lng: 72.9986, region: 'Maharashtra', postalCode: '400708' },
  'ghansoli':          { lat: 19.1280, lng: 73.0085, region: 'Maharashtra', postalCode: '400701' },
  'kopar-khairane':    { lat: 19.1042, lng: 73.0150, region: 'Maharashtra', postalCode: '400709' },
  'rabale':            { lat: 19.1392, lng: 73.0080, region: 'Maharashtra', postalCode: '400701' },
  'sanpada':           { lat: 19.0589, lng: 73.0136, region: 'Maharashtra', postalCode: '400705' },
  'panvel':            { lat: 18.9894, lng: 73.1175, region: 'Maharashtra', postalCode: '410206' },
  'kharghar':          { lat: 19.0473, lng: 73.0696, region: 'Maharashtra', postalCode: '410210' },
  'kalamboli':         { lat: 19.0344, lng: 73.0962, region: 'Maharashtra', postalCode: '410218' },
  'kamothe':           { lat: 19.0211, lng: 73.0975, region: 'Maharashtra', postalCode: '410209' },
  'ulwe':              { lat: 18.9870, lng: 73.0316, region: 'Maharashtra', postalCode: '410206' },
  'seawood':           { lat: 19.0167, lng: 73.0247, region: 'Maharashtra', postalCode: '400706' },
  'diva':              { lat: 19.2153, lng: 73.0238, region: 'Maharashtra', postalCode: '400612' },
  'dombivli':          { lat: 19.2183, lng: 73.0820, region: 'Maharashtra', postalCode: '421201' },
  'kalyan':            { lat: 19.2403, lng: 73.1305, region: 'Maharashtra', postalCode: '421301' },
  'ambernath':         { lat: 19.2099, lng: 73.1858, region: 'Maharashtra', postalCode: '421501' },
  'titwala':           { lat: 19.3024, lng: 73.2052, region: 'Maharashtra', postalCode: '421605' },
  'karjat':            { lat: 18.9106, lng: 73.3245, region: 'Maharashtra', postalCode: '410201' },
  'kasara':            { lat: 19.6420, lng: 73.4836, region: 'Maharashtra', postalCode: '421602' },
  'neral':             { lat: 18.9527, lng: 73.3120, region: 'Maharashtra', postalCode: '410101' },
  'asangaon':          { lat: 19.5953, lng: 73.3217, region: 'Maharashtra', postalCode: '421601' },
  'khopoli':           { lat: 18.7868, lng: 73.3415, region: 'Maharashtra', postalCode: '410203' },
  'thakurli':          { lat: 19.1979, lng: 73.0879, region: 'Maharashtra', postalCode: '421201' },
  'kalwa':             { lat: 19.1928, lng: 72.9929, region: 'Maharashtra', postalCode: '400605' },
  'ambivali':          { lat: 19.2627, lng: 73.1378, region: 'Maharashtra', postalCode: '421102' },
  'badlapur':          { lat: 19.1660, lng: 73.2360, region: 'Maharashtra', postalCode: '421503' },
  'boisar':            { lat: 19.7950, lng: 72.7480, region: 'Maharashtra', postalCode: '401501' },
  'naigaon':           { lat: 19.3520, lng: 72.8499, region: 'Maharashtra', postalCode: '401208' },
  'nalasopara':        { lat: 19.4214, lng: 72.8190, region: 'Maharashtra', postalCode: '401209' },
  'vasai':             { lat: 19.3920, lng: 72.8397, region: 'Maharashtra', postalCode: '401202' },
  'virar':             { lat: 19.4559, lng: 72.8113, region: 'Maharashtra', postalCode: '401305' },
  'palghar':           { lat: 19.6960, lng: 72.7659, region: 'Maharashtra', postalCode: '401404' },
  'saphale':           { lat: 19.5618, lng: 72.8062, region: 'Maharashtra', postalCode: '401102' },
  'mira-road':         { lat: 19.2952, lng: 72.8544, region: 'Maharashtra', postalCode: '401107' },
  'bhayandar':         { lat: 19.3010, lng: 72.8508, region: 'Maharashtra', postalCode: '401105' },
  'bhiwandi':          { lat: 19.2813, lng: 73.0483, region: 'Maharashtra', postalCode: '421302' },
  'ulhasnagar':        { lat: 19.2215, lng: 73.1645, region: 'Maharashtra', postalCode: '421003' },
  'mumbra':            { lat: 19.1854, lng: 73.0247, region: 'Maharashtra', postalCode: '400612' },
  'juinagar':          { lat: 19.0540, lng: 73.0167, region: 'Maharashtra', postalCode: '400706' },

  // Other Maharashtra cities
  'pune':              { lat: 18.5204, lng: 73.8567, region: 'Maharashtra', postalCode: '411001' },
  'nagpur':            { lat: 21.1458, lng: 79.0882, region: 'Maharashtra', postalCode: '440001' },
  'nashik':            { lat: 19.9975, lng: 73.7898, region: 'Maharashtra', postalCode: '422001' },

  // Pan-India
  'delhi':             { lat: 28.7041, lng: 77.1025, region: 'Delhi',           postalCode: '110001' },
  'goa':               { lat: 15.2993, lng: 74.1240, region: 'Goa',             postalCode: '403001' },
  'bangalore':         { lat: 12.9716, lng: 77.5946, region: 'Karnataka',       postalCode: '560001' },
  'hyderabad':         { lat: 17.3850, lng: 78.4867, region: 'Telangana',       postalCode: '500001' },
  'chandigarh':        { lat: 30.7333, lng: 76.7794, region: 'Chandigarh',      postalCode: '160001' },
  'jaipur':            { lat: 26.9124, lng: 75.7873, region: 'Rajasthan',       postalCode: '302001' },
  'gurgaon':           { lat: 28.4595, lng: 77.0266, region: 'Haryana',         postalCode: '122001' },
  'noida':             { lat: 28.5355, lng: 77.3910, region: 'Uttar Pradesh',   postalCode: '201301' },
  'kolkata':           { lat: 22.5726, lng: 88.3639, region: 'West Bengal',     postalCode: '700001' },
  'chennai':           { lat: 13.0827, lng: 80.2707, region: 'Tamil Nadu',      postalCode: '600001' },
  'ahmedabad':         { lat: 23.0225, lng: 72.5714, region: 'Gujarat',         postalCode: '380001' },
  'surat':             { lat: 21.1702, lng: 72.8311, region: 'Gujarat',         postalCode: '395001' },
  'indore':            { lat: 22.7196, lng: 75.8577, region: 'Madhya Pradesh',  postalCode: '452001' },
  'bhopal':            { lat: 23.2599, lng: 77.4126, region: 'Madhya Pradesh',  postalCode: '462001' },
  'lucknow':           { lat: 26.8467, lng: 80.9462, region: 'Uttar Pradesh',   postalCode: '226001' },
  'kanpur':            { lat: 26.4499, lng: 80.3319, region: 'Uttar Pradesh',   postalCode: '208001' },
  'patna':             { lat: 25.5941, lng: 85.1376, region: 'Bihar',           postalCode: '800001' },
  'agra':              { lat: 27.1767, lng: 78.0081, region: 'Uttar Pradesh',   postalCode: '282001' },
  'varanasi':          { lat: 25.3176, lng: 82.9739, region: 'Uttar Pradesh',   postalCode: '221001' },
  'ranchi':            { lat: 23.3441, lng: 85.3096, region: 'Jharkhand',       postalCode: '834001' },
  'guwahati':          { lat: 26.1445, lng: 91.7362, region: 'Assam',           postalCode: '781001' },
  'bhubaneswar':       { lat: 20.2961, lng: 85.8245, region: 'Odisha',          postalCode: '751001' },
  'kochi':             { lat: 9.9312,  lng: 76.2673, region: 'Kerala',          postalCode: '682001' },
  'mysore':            { lat: 12.2958, lng: 76.6394, region: 'Karnataka',       postalCode: '570001' },
  'coimbatore':        { lat: 11.0168, lng: 76.9558, region: 'Tamil Nadu',      postalCode: '641001' },
  'mangalore':         { lat: 12.9141, lng: 74.8560, region: 'Karnataka',       postalCode: '575001' },
  'vijayawada':        { lat: 16.5062, lng: 80.6480, region: 'Andhra Pradesh',  postalCode: '520001' },
  'visakhapatnam':     { lat: 17.6868, lng: 83.2185, region: 'Andhra Pradesh',  postalCode: '530001' },
  'rajkot':            { lat: 22.3039, lng: 70.8022, region: 'Gujarat',         postalCode: '360001' },
  'jodhpur':           { lat: 26.2389, lng: 73.0243, region: 'Rajasthan',       postalCode: '342001' },
  'udaipur':           { lat: 24.5854, lng: 73.7125, region: 'Rajasthan',       postalCode: '313001' },
  'dehradun':          { lat: 30.3165, lng: 78.0322, region: 'Uttarakhand',     postalCode: '248001' },
  'ludhiana':          { lat: 30.9010, lng: 75.8573, region: 'Punjab',          postalCode: '141001' },
  'jalandhar':         { lat: 31.3260, lng: 75.5762, region: 'Punjab',          postalCode: '144001' },
  'siliguri':          { lat: 26.7271, lng: 88.3953, region: 'West Bengal',     postalCode: '734001' },
  'gwalior':           { lat: 26.2183, lng: 78.1828, region: 'Madhya Pradesh',  postalCode: '474001' },
  'baba':              { lat: 19.0760, lng: 72.8777, region: 'Maharashtra',    postalCode: '400001' },
};

function geoFor(slug: string): GeoEntry {
  return LOCATION_GEO[slug] ?? FALLBACK_GEO;
}

/**
 * Picks one of N templated description variants based on a stable hash of
 * the slug. Reduces the "thin / duplicate content" footprint that hurts
 * rankings across templated location pages.
 */
function pickDescription(name: string, slug: string): string {
  const variants = [
    `Verified ${name} escorts available 24/7. Premium VIP companions, Russian models, independent profiles & college girls — same-day incall & outcall booking. Call +91 70 9158 5737.`,
    `Looking for trusted escorts in ${name}? Sonia Basu lists 100% verified ${name} companions with real photos, transparent pricing & instant 24/7 booking. WhatsApp +91 70 9158 5737.`,
    `Top-rated ${name} escort service since 2018 — VIP, Russian, model & independent profiles, all photo-verified every 90 days. Discreet incall/outcall booking, no advance payment.`,
    `Premium ${name} call girls and companions, hand-picked and verified. Same-day arrival in 45–90 min, 4.9★ rated across 583 reviews. Call or WhatsApp +91 70 9158 5737.`,
    `${name} escorts service with rigorously verified profiles, end-to-end discretion and pan-Mumbai coverage. Book by phone or WhatsApp for instant confirmation, no advance fee.`,
    `Curated ${name} companion service — VIP escorts, Russian/European models, college companions and independents. Real-time photo verification, 24/7 booking team.`,
  ];
  return variants[hash(slug) % variants.length];
}

function makeLocationPage(location: string): PageData {
  const name = titleCase(location);
  const slug = `escorts-in-${location}`;
  const geo = geoFor(location);
  return {
    slug,
    type: 'location',
    locationName: name,
    title: `Escorts in ${name} | Premium Companion Service 24/7 | Sonia Basu`,
    description: pickDescription(name, slug),
    keywords: `escorts in ${location}, ${location} escorts, call girls in ${location}, ${location} call girls, vip escorts ${location}, independent escorts ${location}, ${location} companion service, ${location} model escorts`,
    heroTitle: `Escorts in ${name} | Premium Call Girls Available 24/7`,
    heroParagraph: `Top-rated ${name} escorts service with verified profiles. VIP companions, independent escorts, Russian models, and college girls available across all ${name} locations. Discreet & safe booking.`,
    intro: `Premium <strong>escorts in ${name}</strong> available 24/7. We provide verified companions in ${name} with 24/7 availability for incall and outcall services. Also serving <a href="/" style="color:#c9a84c;text-decoration:none;border-bottom:2px solid #c9a84c;">Mumbai escorts</a> and other major areas.`,
    h2Escorts: `Best Escorts in ${name} - Verified Profiles`,
    subtitleEscorts: `Premium ${name} call girls, VIP escorts, and independent companions with verified profiles. Available 24/7 for outcall and incall services.`,
    ogImage: `https://soniabasu.vercel.app/images/escorts/${slug}.webp`,
    schemaName: `Sonia Basu ${name}`,
    schemaLat: geo.lat,
    schemaLng: geo.lng,
    schemaRegion: geo.region,
    schemaPostalCode: geo.postalCode,
    // Deterministic value derived from slug: stable across builds, varied
    // enough across pages to feel authentic.
    schemaReviewCount: 120 + (hash(slug) % 380),
    dateModified: '2026-05-28',
  };
}

function makeCategoryPage(cat: string, customData?: Partial<PageData>): PageData {
  const name = titleCase(cat);
  return {
    slug: cat,
    type: 'category',
    locationName: 'Mumbai',
    title: `${name} Mumbai | Premium Companion Service 24/7 | Sonia Basu`,
    description: `Book premium ${name.toLowerCase()} in Mumbai available 24/7. Verified profiles, VIP companions, discreet service. Call now!`,
    keywords: `${cat} in mumbai, ${cat} mumbai, ${cat.replace(/-/g, ' ')} mumbai`,
    heroTitle: `${name} - Premium Service Available 24/7`,
    heroParagraph: `Discover Mumbai's finest ${name.toLowerCase()} with verified profiles. Available 24/7 for incall and outcall services across all Mumbai areas. Real photos, real girls, guaranteed satisfaction.`,
    intro: `Premium <strong>${name.toLowerCase()}</strong> available 24/7 in Mumbai. We provide verified companions with 24/7 availability for incall and outcall services.`,
    h2Escorts: `Best ${name} - Verified Profiles`,
    subtitleEscorts: `Premium ${name.toLowerCase()}, VIP escorts, and independent companions with verified profiles. Available 24/7 across all Mumbai areas.`,
    ogImage: `https://soniabasu.vercel.app/images/hero-banner.webp`,
    schemaName: `Sonia Basu Mumbai`,
    schemaLat: 19.076,
    schemaLng: 72.8777,
    schemaRegion: 'Maharashtra',
    schemaPostalCode: '400053',
    schemaReviewCount: 240 + (hash(cat) % 380),
    dateModified: '2026-05-28',
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

/** Re-export geo lookup so other modules (e.g. spa/[slug]) can use it. */
export { geoFor as getLocationGeo };

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
