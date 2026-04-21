from datetime import date

today = date.today().strftime("%Y-%m-%d")

location_slugs = [
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
]

category_slugs = [
    'air-hostess-escorts','bdsm-escorts','bengali-escorts','bollywood-actress-escorts',
    'celebrity-escorts','college-girls-escorts','female-model-escorts','girlfriends-escorts',
    'gujarati-escorts','high-profile-escorts','hj-bj-escorts','horny-escorts','house-wife-escorts',
    'independent-escorts','jaat-escorts','lesbian-escorts','marathi-escorts','marwadi-escorts',
    'model-escorts','mumbai-escorts','muslim-escorts','nepali-escorts','north-indian-escorts',
    'punjabi-escorts','role-play-escorts','russian-escorts','south-indian-escorts',
    'unsatisfied-bhabhi','unsatisfied-female','vip-escorts',
]

BASE = "https://soniabasu.com"

def url(loc, changefreq="weekly", priority="0.8"):
    return f"""  <url>
    <loc>{loc}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>{changefreq}</changefreq>
    <priority>{priority}</priority>
  </url>"""

entries = []

# Static pages
entries.append(url(f"{BASE}/",         "daily", "1.0"))
entries.append(url(f"{BASE}/services", "weekly","0.9"))
entries.append(url(f"{BASE}/location", "weekly","0.9"))
entries.append(url(f"{BASE}/gallery",  "weekly","0.8"))
entries.append(url(f"{BASE}/contact",  "weekly","0.8"))

# Escort location pages
for slug in location_slugs:
    entries.append(url(f"{BASE}/escorts-in-{slug}", "weekly", "0.8"))

# Category pages
for slug in category_slugs:
    entries.append(url(f"{BASE}/{slug}", "weekly", "0.8"))

# Spa location pages
for slug in location_slugs:
    entries.append(url(f"{BASE}/spa/{slug}", "weekly", "0.8"))

xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
xml += "\n".join(entries)
xml += "\n</urlset>\n"

with open("public/sitemap.xml", "w") as f:
    f.write(xml)

print(f"Done — {len(entries)} URLs written to public/sitemap.xml")
