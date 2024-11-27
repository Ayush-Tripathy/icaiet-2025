import { ArrowRight } from "lucide-react";

const CallForPapers = () => {
  return (
    <div className="font-[SatoshiRegular] pt-32 bg-black text-white flex flex-col gap-10 min-h-screen px-3 sm:px-10 lg:px-20 py-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Call For Papers</h1>
        <div className="h-1 w-20 bg-blue-500" />
      </div>

      <a
        href="/Call For Papers.pdf"
        className="w-fit flex flex-row items-center gap-3 px-4 sm:px-8 md:px-10 py-1 sm:py-2 md:py-3 bg-[#ffffff3d] transition-all duration-300 hover:backdrop-blur-0 hover:gap-5 backdrop-blur-[1.25rem] text-sm sm:text-base md:text-lg uppercase rounded-full border border-[#fff]"
      >
        Download CFP <ArrowRight size={24} />
      </a>

      <p className="text-white text-opacity-[0.6] text-lg">
        This International Conference On Artificial Intelligence And Emerging
        Technologies (ICAIET-2025), is dedicated to advanced research in the
        areas of microwave as well as antenna engineering, signal processing and
        communication. The conference aims at bringing together the researchers,
        scientists, engineers and research scholars from all areas of
        engineering and technology, to provide an international forum to
        exchange their ideas, foster collaboration, practical developments
        experiences and cover new grounds. The conference will feature invited
        talks by eminent researchers from around the world, technical paper
        sessions, poster sessions, demos, tutorials and workshops. Accepted
        papers will be submitted for inclusion into IEEE Xplore subject to
        meeting IEEE Xplore’s scope and quality requirements. Prospective
        authors are encouraged to submit their original research contributions
        in IEEE format. Papers submitted to ICAIET 2025 should contain original
        research/study and should not have been published or submitted for
        publication elsewhere. The IEEE anti-plagiarism policy is applicable to
        all submissions. At least one author of each accepted paper must
        register for the conference and present his/her paper.
      </p>

      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Conference Tracks</h1>
        <div className="h-1 w-20 bg-blue-500" />
      </div>

      <ul className="list-disc">
        <li>Artificial Intelligence (AI) and Applications</li>
        <li>Machine Learning and Data Mining</li>
        <li>Computer Vision and Image Processing</li>
        <li>Natural Language Processing (NLP)</li>
        <li>IoT and Cyber-Physical Systems</li>
        <li>Network Security and Privacy</li>
        <li>Sequential, parallel, distributed and Cloud computing</li>
      </ul>

      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Special Tracks</h1>
        <div className="h-1 w-20 bg-blue-500" />
      </div>

      <ul className="list-disc">
        <li>Emerging Technologies in Education</li>
        <li>AI in Finance and Business Analytics</li>
        <li>AI for Sustainable Development and Societal Impact</li>
      </ul>

      <p className="text-white text-opacity-[0.6] text-lg">
        The Microsoft CMT service will be used for managing the peer-reviewing
        process for this conference. This service will be provided for free by
        Microsoft and they will bear all expenses, including costs for Azure
        cloud services as well as for software development and support.
      </p>

      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          Call for Technical Student Paper Contest
        </h1>
        <div className="h-1 w-20 bg-blue-500" />
      </div>

      <a
        href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FAESPC202%25204"
        className="w-fit flex flex-row items-center gap-3 px-4 sm:px-8 md:px-10 py-1 sm:py-2 md:py-3 bg-[#ffffff3d] transition-all duration-300 hover:backdrop-blur-0 hover:gap-5 backdrop-blur-[1.25rem] text-sm sm:text-base md:text-lg uppercase rounded-full border border-[#fff]"
      >
        Paper Submission Link <ArrowRight size={24} />
      </a>

      <p className="text-white text-opacity-[0.6] text-lg">
        Original and unpublished research works on the topics Artificial
        Intelligence, IoT, Machine Learning, NLP etc. are invited for the
        student paper contest in two different categories:
      </p>

      <p>
        Category 1: For B. E. /B. Tech/ M. Sc Students
        <br />
        Mode of Presentation: Poster
        <br />
        <span className="font-[SatoshiBold]">
          1st Prize: Rs.5,000/-, 2nd Prize: Rs.3,000/- (For Each Track).
        </span>
      </p>

      <p>
        Category 2: For of M. E. /M. Tech/M. Phil/ Ph. D Student
        <br />
        Mode of Presentation: Poster
        <br />
        <span className="font-[SatoshiBold]">
          1st Prize: Rs.6,000/-, 2nd Prize: Rs.4,000/- (For Each Track).
        </span>
      </p>

      <p>
        Authorship eligibility: For both of the categories maximum of two
        authors, defined below, will be allowed. The Primary (First author) and
        his/her supervisor
        <br />
        OR
        <br />
        The Primary (First author) and one co-author who may be another student
        or anyone other than supervisor
      </p>

      <p>
        Guideline: Manuscripts limited to 4 pages including figures, photos,
        tables, appendices, acknowledgment and references are to be prepared for
        submission in IEEE format. Submissions shall be received starting from
        Feb 15, 2025. Contestants are advised to prepare an error-free
        manuscript, since there will be no scope for revision. Plagiarism,
        including self-plagiarism (i.e. previously used own material) is
        strongly discouraged. For other information, please visit guidelines for
        authors in the website.
      </p>

      <p>
        Evaluation Procedures: The best paper in each category will be selected
        based on evaluations in 3 phases: (i) Regular review process as adopted
        in the conference; (ii) accepted papers will be evaluated by a common
        panel of experts composed of professors/scientists of international
        repute. Based on this evaluation, maximum of 10 papers will be selected
        for Poster in each Category. (iii) Finally the best paper will be judged
        by a panel of experts by evaluating the poster and interact with the
        students.
      </p>

      <p>
        <span className="font-[SatoshiBold]">Award:</span>
        The best technical paper in each category (With Every Track). will
        receive an award in the form of cheque/cash prize and a certificate.
        Awards will be announced and presented in the Last day of the
        Conference.
      </p>

      <p>
        For questions relating to contest, paper submissions etc. please
        contact:
      </p>

      <p className="font-[SatoshiBold]">
        Dr. Devendra Kumar Yadav
        <br />
        Mobile:&nbsp;+917978910321
        <br />
        Email:&nbsp;devendra@xim.edu.in
      </p>
    </div>
  );
};

export default CallForPapers;
