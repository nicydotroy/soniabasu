import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Escorts Locations - All India Coverage | Zarina Escorts Mumbai",
  description:
    "Premium escort services across 150+ locations in India. Mumbai, Delhi, Bangalore, Hyderabad, Pune and all major cities. 24/7 available.",
  alternates: { canonical: "https://hotzarina.in/location" },
};

const mumbaiLocations = [
  ["Andheri","escorts-in-andheri"],["Bandra","escorts-in-bandra"],["Juhu","escorts-in-juhu"],
  ["Colaba","escorts-in-colaba"],["Powai","escorts-in-powai"],["Worli","escorts-in-worli"],
  ["Lower Parel","escorts-in-lower-parel"],["Dadar","escorts-in-dadar"],["Malad","escorts-in-malad"],
  ["Kandivali","escorts-in-kandivali"],["Borivali","escorts-in-borivali"],["Santacruz","escorts-in-santacruz"],
  ["Vile Parle","escorts-in-vile-parle"],["Jogeshwari","escorts-in-jogeshwari"],["Goregaon","escorts-in-goregaon"],
  ["Kurla","escorts-in-kurla"],["Ghatkopar","escorts-in-ghatkopar"],["Mulund","escorts-in-mulund"],
  ["Bhandup","escorts-in-bhandup"],["Kanjurmarg","escorts-in-kanjurmarg"],["Vikhroli","escorts-in-vikhroli"],
  ["Vidyavihar","escorts-in-vidyavihar"],["Chembur","escorts-in-chembur"],["Govandi","escorts-in-govandi"],
  ["Mankhurd","escorts-in-mankhurd"],["Wadala","escorts-in-wadala"],["Sion","escorts-in-sion"],
  ["Matunga","escorts-in-matunga"],["Parel","escorts-in-parel"],["Mahim","escorts-in-mahim"],
  ["Mahalaxmi","escorts-in-mahalaxmi"],["Lower Parel","escorts-in-lower-parel"],["Worli","escorts-in-worli"],
  ["Prabhadevi","escorts-in-prabhadevi"],["Nariman Point","escorts-in-nariman-point"],
  ["Marine Lines","escorts-in-marine-lines"],["Churchgate","escorts-in-churchgate"],
  ["CST","escorts-in-cst"],["Fort","escorts-in-fort"],["Colaba","escorts-in-colaba"],
  ["Byculla","escorts-in-byculla"],["Grant Road","escorts-in-grant-road"],
  ["Mumbai Central","escorts-in-mumbai-central"],["Charni Road","escorts-in-charni-road"],
  ["Chinchpokli","escorts-in-chinchpokli"],["Masjid Bandar","escorts-in-masjid-bandar"],
  ["Lokhandwala","escorts-in-lokhandwala"],["Versova","escorts-in-versova"],
  ["Khar","escorts-in-khar"],["Khar Road","escorts-in-khar-road"],
  ["Mumbai Airport","escorts-in-mumbai-airport"],["Sakinaka","escorts-in-sakinaka"],
];

const naviMumbaiLocations = [
  ["Vashi","escorts-in-vashi"],["Nerul","escorts-in-nerul"],["Aircoli","escorts-in-airoli"],
  ["Belapur","escorts-in-belapur"],["Kharghar","escorts-in-kharghar"],["Panvel","escorts-in-panvel"],
  ["Ulwe","escorts-in-ulwe"],["Rabale","escorts-in-rabale"],["Ghansoli","escorts-in-ghansoli"],
  ["Kopar Khairane","escorts-in-kopar-khairane"],["Sanpada","escorts-in-sanpada"],
  ["Juinagar","escorts-in-juinagar"],["Kalamboli","escorts-in-kalamboli"],["Kamothe","escorts-in-kamothe"],
  ["Seawood","escorts-in-seawood"],["Navi Mumbai","escorts-in-navi-mumbai"],
];

const thaneLocations = [
  ["Thane","escorts-in-thane"],["Kalyan","escorts-in-kalyan"],["Dombivli","escorts-in-dombivli"],
  ["Ulhasnagar","escorts-in-ulhasnagar"],["Bhiwandi","escorts-in-bhiwandi"],["Ambernath","escorts-in-ambernath"],
  ["Badlapur","escorts-in-badlapur"],["Titwala","escorts-in-titwala"],["Thakurli","escorts-in-thakurli"],
  ["Diva","escorts-in-diva"],["Mumbra","escorts-in-mumbra"],["Kalwa","escorts-in-kalwa"],
  ["Ambivali","escorts-in-ambivali"],["Asangaon","escorts-in-asangaon"],["Mira Road","escorts-in-mira-road"],
  ["Bhayandar","escorts-in-bhayandar"],["Nalasopara","escorts-in-nalasopara"],
  ["Virar","escorts-in-virar"],["Vasai","escorts-in-vasai"],["Naigaon","escorts-in-naigaon"],
  ["Saphale","escorts-in-saphale"],["Boisar","escorts-in-boisar"],["Palghar","escorts-in-palghar"],
  ["Karjat","escorts-in-karjat"],["Khopoli","escorts-in-khopoli"],["Neral","escorts-in-neral"],
  ["Kasara","escorts-in-kasara"],["Baba","escorts-in-baba"],["Nahur","escorts-in-nahur"],
  ["Rabale","escorts-in-rabale"],["Ghansoli","escorts-in-ghansoli"],
];

const majorCities = [
  ["Delhi","escorts-in-delhi"],["Bangalore","escorts-in-bangalore"],["Hyderabad","escorts-in-hyderabad"],
  ["Chennai","escorts-in-chennai"],["Kolkata","escorts-in-kolkata"],["Pune","escorts-in-pune"],
  ["Ahmedabad","escorts-in-ahmedabad"],["Surat","escorts-in-surat"],["Jaipur","escorts-in-jaipur"],
  ["Lucknow","escorts-in-lucknow"],["Chandigarh","escorts-in-chandigarh"],["Goa","escorts-in-goa"],
  ["Noida","escorts-in-noida"],["Gurgaon","escorts-in-gurgaon"],["Indore","escorts-in-indore"],
  ["Bhopal","escorts-in-bhopal"],["Nashik","escorts-in-nashik"],["Nagpur","escorts-in-nagpur"],
  ["Vadodara","escorts-in-ahmedabad"],["Rajkot","escorts-in-rajkot"],
  ["Ludhiana","escorts-in-ludhiana"],["Jalandhar","escorts-in-jalandhar"],
  ["Dehradun","escorts-in-dehradun"],["Agra","escorts-in-agra"],["Kanpur","escorts-in-kanpur"],
  ["Varanasi","escorts-in-varanasi"],["Patna","escorts-in-patna"],["Ranchi","escorts-in-ranchi"],
  ["Guwahati","escorts-in-guwahati"],["Kochi","escorts-in-kochi"],["Coimbatore","escorts-in-coimbatore"],
  ["Mangalore","escorts-in-mangalore"],["Mysore","escorts-in-mysore"],["Siliguri","escorts-in-siliguri"],
  ["Bhubaneswar","escorts-in-bhubaneswar"],["Visakhapatnam","escorts-in-visakhapatnam"],
  ["Vijayawada","escorts-in-vijayawada"],["Jodhpur","escorts-in-jodhpur"],
  ["Udaipur","escorts-in-udaipur"],["Gwalior","escorts-in-gwalior"],
];

function LocationGrid({ title, locations }: { title: string; locations: string[][] }) {
  return (
    <div className="location-card" style={{ padding: "2rem" }}>
      <h3 style={{ color: "var(--primary-color)", marginBottom: "1.5rem" }}>{title}</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {locations.map(([name, slug]) => (
          <Link
            key={slug}
            href={`/${slug}`}
            style={{
              background: "var(--primary-color)",
              color: "white",
              padding: "0.4rem 1rem",
              borderRadius: "20px",
              textDecoration: "none",
              fontSize: "0.9rem",
              transition: "all 0.3s ease",
            }}
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function LocationPage() {
  return (
    <>
      <section
        className="hero"
        style={{
          background:
            "linear-gradient(rgba(128,0,128,0.7),rgba(128,0,128,0.7)), url('/images/escorts-in-mumbai-banner.webp') center/cover no-repeat",
        }}
      >
        <div className="container">
          <div className="hero-content">
            <h1>Escorts Services Across India - 150+ Locations</h1>
            <p>Premium escort services available across all major cities and locations in India. Available 24/7.</p>
            <div className="hero-buttons">
              <a href="tel:+919038976363" className="btn btn-primary">📞 Call us at +91 90389 76363</a>
            </div>
          </div>
        </div>
      </section>

      <section className="locations-section">
        <div className="container">
          <div className="locations-intro">
            <h2>Our Coverage Locations</h2>
            <p>We provide premium escort services across 150+ locations in India</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <LocationGrid title="🏙️ Mumbai Locations" locations={mumbaiLocations} />
            <LocationGrid title="🌊 Navi Mumbai Locations" locations={naviMumbaiLocations} />
            <LocationGrid title="🚂 Thane & Suburbs" locations={thaneLocations} />
            <LocationGrid title="🌍 Major Cities Across India" locations={majorCities} />
          </div>
        </div>
      </section>

      <section className="coverage-section">
        <div className="container">
          <h2>Our India-Wide Coverage</h2>
          <p>Premium escort services available 24/7 across India</p>
          <div className="coverage-stats">
            {[["150+","Locations Covered"],["5000+","Verified Escorts"],["24/7","Service Available"],["100%","Discreet Service"]].map(([num, label]) => (
              <div className="stat-item" key={label}>
                <h3>{num}</h3>
                <p>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
