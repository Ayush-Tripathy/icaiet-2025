export const ConferenceTrack = ({ title, topics, chairs }) => {
  return (
    <div className="rounded-lg border border-gray-200 shadow-sm bg-white h-full flex flex-col">
      {/* Track Header */}
      <div className="p-6 border-b border-gray-100 bg-gray-50 rounded-t-lg">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>

      {/* Track Topics */}
      <div className="p-6 flex-grow">
        <ul className="space-y-3">
          {topics.map((topic, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary mr-2 mt-0.5 text-lg">•</span>
              <span className="text-gray-700">{topic}</span>
            </li>
          ))}
        </ul>
      </div>

      {chairs.length > 0 && (
        <div className="mt-auto border-t border-gray-200 bg-gray-50 p-6 rounded-b-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Track Chairs
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {chairs.map((chair, index) => (
              <div key={index} className="flex items-start">
                <div className="">
                  <p className="font-medium text-gray-800">{chair.name}</p>
                  <p className="text-sm text-gray-600">{chair.affiliation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
