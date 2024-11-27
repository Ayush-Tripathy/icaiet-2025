import { ArrowRight } from "lucide-react";

export default function SubmissionGuidelines() {
  return (
    <div className="min-h-screen bg-black text-gray-100 py-8 pt-32 px-3 sm:px-10 lg:px-20 font-[SatoshiRegular]">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Submission Guidelines</h1>
          <div className="h-1 w-20 bg-blue-500 mt-2"></div>
        </div>

        <div className="space-y-6">
          <p>Dear Research Paper Submitter,</p>
          <p>
            Please follow the following ICAIET paper submission instructions:
          </p>

          <ol className="list-none space-y-4">
            {[
              { title: "Paper Formatting:", content: "IEEE format." },
              {
                title: "Page Limit:",
                content:
                  "6 pages. Additional pages can be bought at INR 750/- per page.",
              },
              {
                title: "Author Information:",
                content:
                  "Please include author names, affiliations, contact details, and a brief biography (40-70 words) for each author. Mention if you have a separate corresponding author.",
              },
              {
                title: "Abstract:",
                content:
                  "Summarize the main contribution and findings in no more than 1000 words.",
              },
              {
                title: "Keywords:",
                content:
                  "A list of keywords that describe the paper's topic and can be used for indexing purposes.",
              },
              {
                title: "Originality and Plagiarism:",
                content:
                  "Please submit original work; the conference imposes IEEE's policy on plagiarism. Your submission confirms that the paper is not under consideration elsewhere and that all sources have been appropriately cited.",
              },
              {
                title: "Ethical Considerations:",
                content:
                  "Please disclose any potential conflicts of interest or funding sources related to their work.",
              },
              {
                title: "Review Process:",
                content:
                  "ICAIET follows a blind review process by at least 3 reviewers and is conducted by a distinguished set of academicians and professionals (the Program Committee). To avoid conflicts of interest, a reviewer cannot self-select papers.",
              },
              {
                title: "Presentation Format:",
                content:
                  "The papers are expected to be presented orally unless they are in a poster session.",
              },
              {
                title: "Copyright and Publication:",
                content: "Provide the IEEE/conference's copyright policy.",
              },
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-400 mr-2">■</span>
                <span>
                  <strong>{item.title}</strong> {item.content}
                </span>
              </li>
            ))}
          </ol>

          <p>Thank you,</p>
          <p>ICAIET Chairs</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Paper Information:</h2>

          <p className="space-y-2">
            <span className="block">
              Manuscripts reporting high-quality original and unpublished
              research are solicited for this symposium. Single-spaced,
              double-column, 6-page manuscripts need to be formatted as per the
              guidelines below.
            </span>
            <span className="block">
              Manuscripts longer than 6 pages incur additional charges per page.
            </span>
            <span className="block">
              The manuscripts will undergo blind review by a strong team of
              reviewers and program committee members consisting of leading
              researchers around the globe.
            </span>
            <span className="block">
              It's expected that at least one of the authors of a submitted
              paper will register to attend the conference and present it if the
              paper gets accepted (this is a requirement for a paper to be
              published and indexed).
            </span>
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Formatting Information:
          </h2>

          <p className="space-y-2">
            <span className="block">
              Templates specific to the symposium will be provided to the
              authors via the author kit upon the acceptance of the manuscript.
            </span>
            <span className="block">
              The templates below are the general templates designed for
              conferences using US Letter (8.5" x 11") trim size which can be
              used for the manuscript prepared for the submissions.
            </span>
          </p>

          <div className="space-y-4 mt-4">
            <a
              href="/conference-template-a4.docx"
              className="w-fit flex flex-row items-center gap-3 px-4 sm:px-8 md:px-8 py-1 sm:py-2 md:py-4 bg-[#ffffff3d] transition-all duration-300 hover:backdrop-blur-0 hover:gap-5 backdrop-blur-[1.25rem] text-sm sm:text-base uppercase rounded-full border border-[#fff]"
            >
              Click here to download Word Template
            </a>

            <a
              href="/conference-latex-template_10-17-19.zip"
              className="w-fit flex flex-row items-center gap-3 px-4 sm:px-8 md:px-8 py-1 sm:py-2 md:py-4 bg-[#ffffff3d] transition-all duration-300 hover:backdrop-blur-0 hover:gap-5 backdrop-blur-[1.25rem] text-sm sm:text-base uppercase rounded-full border border-[#fff]"
            >
              Click here to download LaTex Package
            </a>
            <a
              href="https://www.ieee.org/conferences/publishing/templates.html"
              className="w-fit flex flex-row items-center gap-3 px-4 sm:px-8 md:px-8 py-1 sm:py-2 md:py-4 bg-[#ffffff3d] transition-all duration-300 hover:backdrop-blur-0 hover:gap-5 backdrop-blur-[1.25rem] text-sm sm:text-base uppercase rounded-full border border-[#fff]"
            >
              For more on Templates :<ArrowRight size={24} />
            </a>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Manuscript Submission Information:
          </h2>

          <p>
            A manuscript for reviewing purposes needs to be submitted as a
            single PDF or Word file using the following link:
          </p>

          <a
            href="#"
            className="w-fit flex flex-row items-center gap-3 px-4 sm:px-8 md:px-8 py-1 sm:py-2 md:py-4 bg-[#ffffff3d] transition-all duration-300 hover:backdrop-blur-0 hover:gap-5 backdrop-blur-[1.25rem] text-sm sm:text-base uppercase rounded-full border border-[#fff]"
          >
            Click here to submit
          </a>
        </div>
      </div>
    </div>
  );
}
