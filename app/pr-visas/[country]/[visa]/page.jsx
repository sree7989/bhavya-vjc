import { visaMetaData } from "../../visaMetaData";
import Two from "./Two";

// Generate SEO metadata dynamically
export async function generateMetadata({ params }) {
  // ✅ Await params properly
  const { country, visa } = await params;

  const countrySlug = country?.toLowerCase();
  const visaSlug = visa?.toLowerCase();

  const visaData = visaMetaData?.[countrySlug]?.[visaSlug];

  if (visaData) {
    return {
      title: visaData.title,
      description: visaData.description,
      keywords: visaData.keywords,
    };
  }

  // ✅ Default fallback metadata
  return {
    title:
      "Permanent Residency PR Visa for Canada Australia Express Entry PR Visa Process Requirements",
    description:
      "Apply for Permanent Residency Visa in Canada and Australia. It is also called as Canada PR Visa Process or Australia PR Visa Process. Know the Benefits of Canada Express Entry Program and Australia PR Visa. Apply Online now and get Requirements for Canada PR Visa and Australia PR Visa Process in 2025. Get Australia Immigration PR Visa Process and Canada Immigration PR Visa Process with VJC Overseas.",
    keywords:
      "Permanent Residency Visa, PR Visa, Canada Permanent Residency Visa, Australia Permanent Residency Visa, Canada Express Entry, PR Visa Process, PR Visa Requirements, Permanent Residency Visa Requirements, PR Visa Benefits, Canada PR Visa Benefits, Australia PR Visa Benefits, Canada PR Visa Process, Australia PR Visa Process, Canada Permanent Residence Visa, Australia Permanent Residence Visa",
  };
}

// Main Visa Page
const VisaPage = () => {
  return (
    <>
      <div style={{ marginTop: "5%", zIndex: 20, position: "relative" }}>
        {/* Optional Nav here */}
      </div>
      <Two />
    </>
  );
};

export default VisaPage;
