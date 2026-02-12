import type React from "react";
// import { Link } from "react-router-dom";

interface Speaker {
  id: number;
  name: string;
  affiliation: string;
  image: string;
  title?: string;
}

const speakersData: Speaker[] = [
  // {
  //   id: 2,
  //   name: "Dr. Amitabha Bagchi",
  //   affiliation: "IIT, Delhi",
  //   title: "Professor",
  //   image: "/s/AmitabhaBagchi.jpg",
  // },
  // {
  //   id: 4,
  //   name: "Dr. Ashutosh Dutta",
  //   affiliation: "Johns Hopkins University, USA",
  //   title: "Professor",
  //   image: "/s/ashutosh_dutta.webp",
  // },
  // {
  //   id: 1,
  //   name: "Dr. Suchismita Chinara",
  //   affiliation: "NIT Rourkela",
  //   title: "Associate Professor",
  //   image: "/s/suchismita-chinara.jpeg",
  // },
  // {
  //   id: 5,
  //   name: "Dr. Prasant Mohapatra",
  //   affiliation: "University of South Florida, USA",
  //   title: "Professor",
  //   image: "/s/PrasantMohapatra.jpg",
  // },
  // {
  //   id: 3,
  //   name: "Mr. Satyajit Nath",
  //   affiliation: "Capgemini",
  //   title: "Senior Director",
  //   image: "/s/SatyajitNath.jfif",
  // },
  // {
  //   id: 6,
  //   name: "Dr. Ganapati Panda",
  //   affiliation: "CV Raman Global University, Bhubaneswar",
  //   title: "Professor",
  //   image: "/s/GanapatiPanda.jfif",
  // },
];

const SpeakerCard: React.FC<{ speaker: Speaker }> = ({ speaker }) => {
  return (
    <div className="group relative bg-white rounded-2xl border overflow-hidden transition-all duration-300">
      <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <img
          src={speaker.image || "/placeholder.svg"}
          alt={speaker.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900 leading-tight">
            {speaker.name}
          </h3>

          {speaker.title && (
            <p className="text-sm font-medium text-blue-600">{speaker.title}</p>
          )}

          <p className="text-gray-600 text-sm leading-relaxed">
            {speaker.affiliation}
          </p>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-xs text-gray-500 font-medium">
                Speaking
              </span>
            </div>

            {/* <button className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200">
              View Profile
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const SpeakersList: React.FC = () => {
  return (
    <div className="font-[SatoshiRegular] pt-32 flex flex-col gap-10 min-h-screen primary-padding py-10">
      <div className="">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
            Conference 2024
          </div> */}

          {/* <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Featured
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Speakers
            </span>
          </h1> */}

          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">Speakers</h1>
            <div className="h-1 w-20 bg-blue-500" />{" "}
          </div>

          {/* <p className="text-xl text-gray-600 leading-relaxed text-left mt-4">
            Meet our distinguished lineup of industry leaders, researchers, and
            innovators who will be sharing their insights and expertise.
          </p> */}
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
          {!speakersData.length && (
              <div>
                <p>Coming Soon</p>
              </div>
            )}
          
          {speakersData.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Don't Miss Out
            </h3>
            <p className="text-gray-600 mb-6">
              Join us for an incredible lineup of talks and networking
              opportunities.
            </p>
            <Link
              to="/registration"
              className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-8 py-3 rounded-xl font-medium hover:from-blue-500 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Register Now
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SpeakersList;
