const Sponsors = () => {
  const knowledgeSponsor = {
    name: "Capgemini",
    logo: "/Capgemini_Logo_Color_RGB.png",
    description:
      "A global leader in consulting, technology services and digital transformation.",
    website: "https://www.capgemini.com/",
  }
  return (
    <div className="font-[SatoshiRegular] pt-32 flex flex-col gap-10 min-h-screen primary-padding py-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Sponsors</h1>
        <div className="h-1 w-20 bg-blue-500" />
      </div>

      <div className="space-y-6">
          <div className="max-w-2xl">
            <div className="bg-white rounded-xl border transition-all duration-300 p-8">
              <div className="space-y-6 text-center">
                {/* Logo */}
                <div className="flex justify-center">
                  <img
                    src={knowledgeSponsor.logo || "/placeholder.svg"}
                    alt={`${knowledgeSponsor.name} logo`}
                    className="h-20 w-auto object-contain"
                  />
                </div>

                {/* Company Name */}
                {/* <h3 className="text-3xl font-bold text-gray-900">{knowledgeSponsor.name}</h3> */}
                <span className="text-gray-500 text-lg">Knowledge Sponsor</span>

                {/* Description */}
                <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto">{knowledgeSponsor.description}</p>

                {/* Website Link */}
                <div className="pt-4">
                  <a
                    href={knowledgeSponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
                  >
                    Visit Website
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Sponsors;
