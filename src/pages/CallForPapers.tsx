import { ArrowRight } from "lucide-react";

const CallForPapers = () => {
  return (
    <div className="text-justify font-[SatoshiRegular] pt-32 flex flex-col gap-10 min-h-screen px-3 sm:px-10 lg:px-20 py-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Call For Papers</h1>
        <div className="h-1 w-20 bg-blue-500" />
      </div>

      <a
        href="/CallForPapers_ICAIET-2025.pdf"
        className="w-fit flex flex-row items-center gap-3 px-4 sm:px-8 md:px-10 py-1 sm:py-2 md:py-3 bg-[#ccf2f4] border-[#a4ebf3] transition-all duration-300 hover:backdrop-blur-0 hover:gap-5 backdrop-blur-[1.25rem] text-sm sm:text-base md:text-lg uppercase rounded-full border "
      >
        Download CFP <ArrowRight size={24} />
      </a>

      <p className="text-opacity-[0.6] text-lg">
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
        meeting IEEE Xplore's scope and quality requirements. Prospective
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

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 text-left">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-4">
            Artificial Intelligence (AI) and Applications
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Overview of foundational and cutting-edge AI techniques.</li>
            <li>Applications in healthcare, robotics, gaming, and more.</li>
            <li>Ethical considerations and fairness in AI implementations.</li>
            <li>Advanced AI algorithms and their practical implementations.</li>
            <li>Exploring reinforcement learning and its use cases.</li>
            <li>Challenges in deploying AI systems in real-world scenarios.</li>
            <li>Integration of AI in smart cities and transportation.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-4">
            Machine Learning and Data Mining
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              Supervised, unsupervised, and reinforcement learning techniques.
            </li>
            <li>Feature engineering and model optimization strategies.</li>
            <li>Exploring clustering, classification, and regression tasks.</li>
            <li>
              Data mining methodologies for pattern discovery in large datasets.
            </li>
            <li>
              Application of ML in business, finance, and scientific research.
            </li>
            <li>Tools and libraries for building and training ML models.</li>
            <li>Real-world case studies of ML deployment.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-4">
            Computer Vision and Image Processing
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              Techniques for image recognition, segmentation, and
              classification.
            </li>
            <li>Role of deep learning in computer vision advancements.</li>
            <li>
              Applications in autonomous vehicles, surveillance, and AR/VR.
            </li>
            <li>
              Pre-processing techniques like filtering, edge detection, and
              transformation.
            </li>
            <li>
              Challenges in object detection, tracking, and pose estimation.
            </li>
            <li>Development of real-time vision systems.</li>
            <li>Integrating computer vision with IoT and robotics.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-4">
            Natural Language Processing (NLP)
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              Advances in sentiment analysis, text summarization, and machine
              translation.
            </li>
            <li>The role of transformers and attention mechanisms in NLP.</li>
            <li>Sentiment and emotion detection in textual data.</li>
            <li>
              Applications in chatbots, virtual assistants, and speech
              recognition.
            </li>
            <li>Challenges in understanding and generating human-like text.</li>
            <li>Addressing bias and ethical concerns in NLP systems.</li>
            <li>Tools and datasets for NLP research and application.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-4">
            IoT and Cyber-Physical Systems
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              Role of IoT in smart homes, healthcare, and industrial automation.
            </li>
            <li>Design and optimization of cyber-physical systems.</li>
            <li>
              Protocols and standards in IoT connectivity and interoperability.
            </li>
            <li>Challenges in scalability and reliability of IoT networks.</li>
            <li>Integration of edge and fog computing with IoT systems.</li>
            <li>
              Security concerns in IoT and cyber-physical implementations.
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-4">
            Blockchain Technology, Network Security, and Privacy
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Cryptographic techniques for secure communication.</li>
            <li>Secure authentication and access control mechanisms.</li>
            <li>Privacy-preserving data-sharing and storage mechanisms.</li>
            <li>
              Blockchain-enabled Resilience and Applications Securing cloud,
              distributed, and blockchain-integrated systems.
            </li>
            <li>
              Intrusion detection systems (IDS) and decentralized approaches
              with blockchain.
            </li>
            <li>
              The role of AI, ML, and blockchain in enhancing cybersecurity.
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-4">
            Sequential, Parallel, Distributed, and Cloud Computing
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              Differences between sequential, parallel, and distributed systems.
            </li>
            <li>Scalability and load balancing in distributed systems.</li>
            <li>Cloud architecture and service models (IaaS, PaaS, SaaS).</li>
            <li>
              Task scheduling and resource allocation in parallel systems.
            </li>
            <li>
              Applications of distributed computing in big data processing.
            </li>
            <li>Virtualization and containerization in cloud environments.</li>
            <li>Energy efficiency and optimization in computing systems.</li>
          </ul>
        </div>
      </div>

      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Special Tracks</h1>
        <div className="h-1 w-20 bg-blue-500" />
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 text-left">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-4">
            Emerging Technologies in Education
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Role of AI in personalized and adaptive learning.</li>
            <li>Gamification and its impact on student engagement.</li>
            <li>
              Virtual and augmented reality in immersive learning environments.
            </li>
            <li>
              Challenges in integrating technology with traditional education
              systems.
            </li>
            <li>
              Applications of blockchain for credentialing and record-keeping.
            </li>
            <li>
              Use of data analytics to predict and improve learning outcomes.
            </li>
            <li>
              Development of inclusive and accessible educational technologies.
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-4">
            AI in Finance and Business Analytics
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Predictive analytics for financial decision-making.</li>
            <li>AI-based fraud detection systems in banking and e-commerce.</li>
            <li>Optimization of investment portfolios using ML algorithms.</li>
            <li>
              Applications in credit scoring, risk assessment, and underwriting.
            </li>
            <li>
              Chatbots and virtual assistants for customer service in finance.
            </li>
            <li>Enhancing supply chain management using AI insights.</li>
            <li>
              Ethical concerns and transparency in AI-driven financial systems.
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-4">
            AI for Sustainable Development and Societal Impact
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              Role of AI in addressing climate change and resource management.
            </li>
            <li>
              Smart agriculture through AI-powered analytics and robotics.
            </li>
            <li>
              Applications in healthcare accessibility and remote diagnostics.
            </li>
            <li>
              Addressing inequalities through AI-driven education and job
              matching.
            </li>
            <li>Development of sustainable urban infrastructures with AI.</li>
            <li>Ethical considerations in AI-driven societal changes.</li>
            <li>Case studies on AI applications in humanitarian efforts.</li>
          </ul>
        </div>
      </div>

      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          Call for Technical Student Paper Contest
        </h1>
        <div className="h-1 w-20 bg-blue-500" />
      </div>

      <a
        href="https://cmt3.research.microsoft.com/ICAIET2025"
        className="w-fit flex flex-row items-center gap-3 px-4 sm:px-8 md:px-10 py-1 sm:py-2 md:py-3 bg-[#ccf2f4] border-[#a4ebf3] transition-all duration-300 hover:backdrop-blur-0 hover:gap-5 backdrop-blur-[1.25rem] text-sm sm:text-base md:text-lg uppercase rounded-full border "
      >
        Paper Submission Link <ArrowRight size={24} />
      </a>

      <p className="text-opacity-[0.6] text-lg">
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

      <p className="text-opacity-[0.6] text-lg">
        The Microsoft CMT service will be used for managing the peer-reviewing
        process for this conference. This service will be provided for free by
        Microsoft and they will bear all expenses, including costs for Azure
        cloud services as well as for software development and support.
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
