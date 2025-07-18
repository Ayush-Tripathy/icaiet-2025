import { ArrowRight, Award, IndianRupee, Users } from "lucide-react"
import { ConferenceTrack } from "@/lib/components/ConferenceTrack"
import { TRACKS } from "@/lib/constants/tracks"

const CallForPosters = () => {
  return (
    <div className="text-justify font-[SatoshiRegular] pt-32 flex flex-col gap-12 min-h-screen primary-padding py-10">
      {/* Header Section */}
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Call For Posters</h1>
          <div className="h-1 w-20 bg-blue-600" />
        </div>
        <p className="text-lg text-gray-600">
          ICAIET-2025 invites poster submissions on original and ongoing research in AI, Machine Learning, Data Science, IoT, Blockchain, Network Security, and Cloud Computing. The poster session offers a platform for interactive
          discussion and networking with peers and experts.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-4 gap-8">
        {/* Left Content - Takes 3 columns */}
        <div className="lg:col-span-3 space-y-8">
          {/* Key Information Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <IndianRupee className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Registration Fee</h3>
              </div>
              <p className="text-2xl font-bold text-blue-600 mb-2">₹1,000</p>
              <p className="text-sm text-gray-600">per participant (excluding GST)</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Recognition</h3>
              </div>
              <p className="text-lg font-medium text-gray-800 mb-2">Top 3 Posters</p>
              <p className="text-sm text-gray-600">will be selected and awarded</p>
            </div>
          </div>

          {/* Submission Guidelines */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Submission Guidelines</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Submissions must follow IEEE format and represent unpublished work</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>At least one author must register and present the poster at the conference</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Poster presentations will be held on 29-30 August 2025</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  Posters should be printed in <strong>A0 size</strong>. Refer to the{' '}
                  <a href="https://drive.google.com/drive/folders/1Ynz3EHYLHO5EKd6hxUDJCjyFKT_9ytUl" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                    poster template
                  </a>{' '}
                  for formatting guidelines.
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-row items-center gap-5">
            {/* Download Flyer Button */}
            <a
              href="/CallForPosterFlyer_ICAIET-2025.pdf"
              className="w-fit flex flex-row items-center gap-3 px-8 py-3 bg-[#ccf2f4] hover:bg-[#b8eef1] text-gray-800 transition-all duration-300 hover:gap-5 text-lg font-medium rounded-full shadow-sm hover:shadow-md border border-[#a4ebf3]"
            >
              Download Flyer <ArrowRight size={20} />
            </a>

            {/* Submission Link */}
            <a
              href="https://forms.gle/P7TStcoWdnRMoQtd7"
              target="_blank"
              className="w-fit flex flex-row items-center gap-3 px-8 py-3 bg-[#ccf2f4] hover:bg-[#b8eef1] text-gray-800 transition-all duration-300 hover:gap-5 text-lg font-medium rounded-full shadow-sm hover:shadow-md border border-[#a4ebf3]"
            >
              Poster Submission Link <ArrowRight size={20} />
            </a>
          </div>
        </div>

        {/* Right Sidebar - Important Dates - Takes 1 column */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden sticky top-8">
            <div className="bg-blue-600 px-4 py-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Users className="w-4 h-4" />
                Important Dates
              </h3>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                {[
                  { label: "Submission", date: "20 Jul 2025", highlight: true },
                  { label: "Acceptance", date: "22 Jul 2025" },
                  { label: "Registration", date: "24 Jul 2025" },
                  { label: "Conference", date: "28-30 Aug 2025" },
                  { label: "Presentation", date: "29-30 Aug 2025", highlight: true },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg text-center ${item.highlight ? "bg-blue-50 border border-blue-200" : "bg-gray-50"}`}
                  >
                    <div className="text-xs font-medium text-gray-600 mb-1">{item.label}</div>
                    <div className={`text-sm font-bold ${item.highlight ? "text-blue-600" : "text-gray-900"}`}>
                      {item.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Topics Section */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">Poster Presentation Topics</h2>
          <div className="h-1 w-20 bg-blue-600" />
        </div>
        <p className="text-gray-600 italic">The topics include — but are not limited to the following</p>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 text-left">
          {TRACKS.map((track) => (
            <ConferenceTrack key={track.title} title={track.title} topics={track.topics} chairs={[]} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CallForPosters
