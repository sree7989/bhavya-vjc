import Link from "next/link";

export default async function ThankYou({ params }) {
  const resolvedParams = await params;
  const slugs = resolvedParams.slug;
  const fullPath = slugs ? slugs.join('/') : '';
  const previousPath = fullPath.endsWith('/thankyou')
    ? "/" + fullPath.substring(0, fullPath.lastIndexOf('/thankyou'))
    : "/" + fullPath;

  return (
    <div className="flex items-center justify-center min-h-screen px-2 py-8 mt-20 lg:mt-16 bg-gray-900">
      <div className="w-full max-w-screen-lg mx-auto bg-gray-800 rounded-2xl shadow-2xl border border-orange-500/50 flex flex-col items-center">
        {/* Header Ribbon */}
        <div className="w-full bg-gradient-to-r from-blue-400 to-orange-500 px-4 py-2 sm:py-4 rounded-t-2xl">
          <p className="text-xl font-semibold text-white tracking-wide  flex flex-col items-center uppercase">Assessment Submitted</p>
        </div>
        {/* Main Content Card */}
        <div className="w-full p-4 sm:p-8 md:p-14 flex flex-col items-center space-y-6">
          <h1 className="text-5xl font-extrabold text-orange-500 mb-2 animate-pulse">
            Success!
          </h1>
          <p className="text-6xl mb-4">✅</p>
          <p className="text-2xl text-gray-100 leading-snug font-medium text-center">
            Thank you for submitting your details for a <span className="text-orange-400 font-bold">Free Assessment</span>.
          </p>
          <p className="text-lg text-gray-300 text-center">
            Your profile will be evaluated shortly with our immigration experts.
          </p>
          {/* Contact Details */}
          <div className="pt-4 border-t border-gray-700 mt-4 w-full">
            <p className="text-lg text-gray-200 font-semibold mb-3 text-center">
              Our team will contact you shortly.
            </p>
            <p className="text-base text-gray-400 mb-1 text-center">
              For immediate assistance, reach out:
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-2">
              <a
                href="tel:+919160449000"
                className="text-orange-500 hover:text-blue-400 transition-colors text-lg underline"
              >
                Call: +91 9160449000
              </a>
              <a
                href="mailto:vjcbanglore@vjcoversesa.com"
                className="text-orange-500 hover:text-blue-400 transition-colors text-lg underline"
              >
                Email: info@vjcoverseas.com
              </a>
            </div>
          </div>
          {/* Home Button uses Next.js <Link> */}
          <div className="w-full mt-8 flex justify-center">
            <Link
              href="/"
              className="px-10 py-3 bg-blue-400 text-gray-900 font-bold rounded-full shadow-xl hover:bg-orange-500 hover:text-white transition-all duration-300 uppercase tracking-wider text-lg transform hover:scale-105"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
