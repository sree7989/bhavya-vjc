export const ImageContent = ({ country }) => {
  switch (country) {
    
    case "uk-student-study-visa-benefits-requirments":
      return (
        <>
      <h2 className="text-xl sm:text-3xl font-bold leading-tight bg-gradient-to-r from-orange-500 via-white to-sky-500 bg-clip-text text-transparent drop-shadow-lg flex items-center gap-2">
        UK Opportunity Card 2025
      </h2>
      <p className="mt-3 text-sm sm:text-base font-medium text-white leading-relaxed">
        The{" "}
        <span className="text-orange-400 font-semibold">
          Opportunity Card Visa
        </span>{" "}
        is your gateway to the UK dream — high income, family
        benefits, and a clear route to
        <span className="text-orange-400 font-semibold">
          {" "}
          Permanent Settlement!
        </span>
      </p>
    </>
      );
    case "Germany":
    default:
      return (
        <>
          <h2 className="text-xl sm:text-3xl font-bold leading-tight bg-gradient-to-r from-orange-500 via-white to-sky-500 bg-clip-text text-transparent drop-shadow-lg flex items-center gap-2">
            Germany Opportunity Card 2025
          </h2>
          <p className="mt-3 text-sm sm:text-base font-medium text-white leading-relaxed">
            The{" "}
            <span className="text-orange-400 font-semibold">
              Opportunity Card Visa
            </span>{" "}
            is your gateway to the German dream — high income, family
            benefits, and a clear route to
            <span className="text-orange-400 font-semibold">
              {" "}
              Permanent Settlement!
            </span>
          </p>
        </>
      );
  }
};
