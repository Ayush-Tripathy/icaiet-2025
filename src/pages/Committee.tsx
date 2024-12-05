import ImageCard from "@/lib/components/committee/ImageCard";
import ChiefPatron from "../assets/committee/ChiefPatron/Fr.-Antony-R.-Uvari-SJ.jpg";
import AntonyRaj from "../assets/committee/Patron/Prof. Fr.S.Antony Raj.jpg";
import GopalKrishnaNayak from "../assets/committee/Patron/Dr. Gopal Krishna Nayak.png";
import RudraMohanTripathy from "../assets/committee/GeneralChair/Dr. Rudra mohan tripathy.png";
import AshutoshDutta from "../assets/committee/GeneralChair/Ashutosh-Dutta.jpg";

// Advisory Committee photos
import Arokiyadass from "../assets/committee/AdvisoryCommittee/Fr.-V.-Arokiyadass-S.J..jpg";
import Turuk from "../assets/committee/AdvisoryCommittee/A.K. Turuk.jpg";
import Majhi from "../assets/committee/AdvisoryCommittee/Prof.B.Majhi.jpg";
import Schuller from "../assets/committee/AdvisoryCommittee/Bjoern Schuller.jpg";
import Baral from "../assets/committee/AdvisoryCommittee/chitta baral.png";
import Dogra from "../assets/committee/AdvisoryCommittee/D.P Dogra.png";
import Panda from "../assets/committee/AdvisoryCommittee/Ganapati panda.jpg";
import Hari from "../assets/committee/AdvisoryCommittee/kvs hari.jpg";
import Gaur from "../assets/committee/AdvisoryCommittee/Prerna Gaur.jpeg";
import Srivastava from "../assets/committee/AdvisoryCommittee/Rajeev Srivastava.jpg";
import Misra from "../assets/committee/AdvisoryCommittee/Sudip Misra.jpg";

// Steering Committee photos
import CKumar from "../assets/committee/SteeringCommittee/C.Kumar.jpg";
import Dharmendra from "../assets/committee/SteeringCommittee/Dharmendra Kumar Yadav.jpg";
import Dilip from "../assets/committee/SteeringCommittee/Dilip K.prasad.jpg";
import Subramanian from "../assets/committee/SteeringCommittee/SUbramanian.png";
import RKSharma from "../assets/committee/SteeringCommittee/R.K. Sharma.jpg";
import Vidy from "../assets/committee/SteeringCommittee/vidy potdar.png";

// Organizing Chair photos
import AshishKumar from "../assets/committee/OrganizingChair/Ashish Kumar.png";
import DevendraKumarYadav from "../assets/committee/OrganizingChair/Devendra Kumar Yadav.png";

// Technical Program Chair photos
import BSPanda from "../assets/committee/TechnicalProgramChair/B S Panda.jpg";
import Pabitra from "../assets/committee/TechnicalProgramChair/Pabitra MOhan Khilar.jpg";
import Susanta from "../assets/committee/TechnicalProgramChair/Susanta Ray.jpg";
import SouravMondal from "../assets/committee/TechnicalProgramChair/Sourav mandal.png";

export default function CommitteesPage() {
  return (
    <div className="pt-32 font-[SatoshiRegular]">
      {/* Main Content */}
      <main className="container px-3 sm:px-10 lg:px-20 py-6 md:py-12">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Committees</h1>
          <div className="h-1 w-20 bg-blue-500" />
        </div>

        <div className="flex flex-row items-start flex-wrap mt-10 gap-28">
          {/* Chief Patron Section */}
          <section className="space-y-4 max-sm:w-full">
            <h2 className="text-2xl font-bold text-blue-400">Chief Patron</h2>
            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:gap-5 sm:flex-wrap w-full">
              <ImageCard
                src={ChiefPatron}
                name="Fr. Antony R. Uvari, S.J."
                occupation="Vice Chancellor, XIM University, India"
              />
            </div>
          </section>

          {/* Patron Section */}
          <section className="space-y-4 max-sm:w-full">
            <h2 className="text-2xl font-bold text-blue-400">Patron</h2>
            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:gap-5 sm:flex-wrap w-full">
              <ImageCard
                src={AntonyRaj}
                name="Fr. S. Antony Raj, S.J."
                occupation="Registrar, XIM University"
              />

              <ImageCard
                src={GopalKrishnaNayak}
                name="Dr. Gopal Krishna Nayak"
                occupation="Professor, XIM University, India"
              />
            </div>
          </section>

          {/* General Chair Section */}
          <section className="space-y-4 max-sm:w-full">
            <h2 className="text-2xl font-bold text-blue-400">General Chair</h2>
            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:gap-5 sm:flex-wrap w-full">
              <ImageCard
                src={AshutoshDutta}
                name="Dr. Ashutosh Dutta"
                occupation="Professor and Director, Johns Hopkins
              University, USA"
              />

              <ImageCard
                src={RudraMohanTripathy}
                name="Dr. Rudra Mohan Tripathy"
                occupation="Dean, School of Computer Science and
              Engineering, XIM University, India"
              />
            </div>
          </section>

          {/*  Advisory Committee Section */}
          <section className="space-y-4 max-sm:w-full">
            <h2 className="text-2xl font-bold text-blue-400">
              Advisory Committee
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:gap-5 sm:flex-wrap w-full">
              <ImageCard
                src={AntonyRaj}
                name="Fr. S. Antony Raj, S.J."
                occupation="Registrar, XIM University"
              />

              <ImageCard
                src={Arokiyadass}
                name="Fr. V. Arokiyadass, S.J."
                occupation="Chief Finance Officer, XIM University, India"
              />

              <ImageCard
                src={Turuk}
                name="Dr. A.K. Turuk"
                occupation="Professor, NIT Rourkela"
              />

              <ImageCard
                src={Majhi}
                name="Dr. B. Majhi"
                occupation="Professor, VSSUT, VC"
              />

              <ImageCard
                src={Schuller}
                name="Dr. Bjoran Schuller"
                occupation="Professor, Imperial College, London"
              />

              <ImageCard
                src={Baral}
                name="Dr. Chitta Baral"
                occupation="Professor, Arizona State University, USA"
              />

              <ImageCard
                src={Dogra}
                name="Dr. D.P. Dogra"
                occupation="Associate Head, IIT Bhubaneswar"
              />

              <ImageCard
                src={Panda}
                name="Dr. G. Panda"
                occupation="Professor and Advisor, CV Raman Global University"
              />

              <ImageCard
                src={Hari}
                name="Dr. K.V.S. Hari"
                occupation="Professor, IISc., Bangalore"
              />

              <ImageCard
                src={Gaur}
                name="Dr. Prerna Gaur"
                occupation="Director, NSUT, West Campus, Delhi"
              />

              <ImageCard
                src={Srivastava}
                name="Dr. R. Srivastava"
                occupation="Professor, Director IIIT Ranchi"
              />

              <ImageCard
                src={Misra}
                name="Dr. Sudip Misra"
                occupation="Professor, IIT KGP"
              />
            </div>
          </section>

          {/* Steering Committee */}
          <section className="space-y-4 max-sm:w-full">
            <h2 className="text-2xl font-bold text-blue-400">
              Steering Committee
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:gap-5 sm:flex-wrap w-full">
              <ImageCard
                src={CKumar}
                name="Dr. C. Kumar"
                occupation="Professor & Head, Dept. of CSE, IIT(ISM) Dhanbad"
              />

              <ImageCard
                src={Dharmendra}
                name="Dr. Dharmendra Kumar Yadav"
                occupation="Professor & Head, Dept. of CSE, MNNIT Allahabad"
              />

              <ImageCard
                src={Dilip}
                name="Dr. Dilip K Prasad"
                occupation="Professor, UIT Norway"
              />

              <ImageCard
                src={Subramanian}
                name="Dr. R. Subramanian"
                occupation="Professor, IIT Roorkee"
              />

              <ImageCard
                src={RKSharma}
                name="Dr. R.K. Sharma"
                occupation="Professor, Department of Mathematics, IIT Delhi"
              />

              <ImageCard
                src={Vidy}
                name="Dr. Vidy Potdar"
                occupation="Associate Professor, Curtin University, Australia"
              />
            </div>
          </section>

          {/* Organizing Chair Section */}
          <section className="space-y-4 max-sm:w-full">
            <h2 className="text-2xl font-bold text-blue-400">
              Organizing Chair
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:gap-5 sm:flex-wrap w-full">
              <ImageCard
                src={AshishKumar}
                name="Dr. Ashish Kumar"
                occupation="XIM University"
              />

              <ImageCard
                src={DevendraKumarYadav}
                name="Dr. Devendra Kumar Yadav"
                occupation="XIM University"
              />
            </div>
          </section>

          {/* Technical Program Chair Section */}
          <section className="space-y-4 max-sm:w-full">
            <h2 className="text-2xl font-bold text-blue-400">
              Technical Program Chair
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:gap-5 sm:flex-wrap w-full">
              <ImageCard
                src={BSPanda}
                name="Dr. B.S. Panda"
                occupation="IIT Delhi"
              />

              <ImageCard
                src={Pabitra}
                name="Dr. Pabitra Mohan Khilar"
                occupation="NIT Rourkela"
              />

              <ImageCard
                src={Susanta}
                name="Dr. Susanta Ray"
                occupation="Jadavpur University"
              />

              <ImageCard
                src={AshishKumar}
                name="Dr. Ashish Kumar"
                occupation="XIM University"
              />

              <ImageCard
                src={DevendraKumarYadav}
                name="Dr. Devendra Kumar Yadav"
                occupation="XIM University"
              />

              <ImageCard
                src={SouravMondal}
                name="Dr. Sourav Mondal"
                occupation="XIM University"
              />
            </div>
          </section>
        </div>

        <div className="mt-12 space-y-12">
          {/* Technical Program Committee Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-400">
              Technical Program Committee
            </h2>
            <div className="space-y-2">
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Abinash Pujari, SRM University, AP
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Alok Ranjan, Bosch
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Arijit Karati, National Sun Yat-Sen University, Taiwan
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Arun Kumar, NIT Rourkela
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Asif Eqbal, IIT Patna
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Bhaskar Mondal, NIT Patna
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Bidyut Kumar Patra, IIT(BHU), Varanasi
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Damodar Reddy Edla, NIT Goa
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Daya Sagar Gupta, IIT Patna
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Debashis Giri, MAKAUT
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Debbrota Paul Chowdhury, NIT Silchar
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Deepak Ranjan Nayak, MNIT Jaipur
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Hari Om, IIT (ISM) Dhanbad
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. M. Tanveer, IIT Indore
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Mahendra Pratap Yadav, IIIT Pune
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Malay Bhattacharyya, ISI Kolkata
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Nabajyoti Mazumdar, IIIT Allahabad
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Preeti Chandrakar, NIT Raipur
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. R. P. Mahapatra, SRM Institute of Science and Technology
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Rakesh Chandra Balabantaray, IIIT Bhubaneswar
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Ravi Yadav, IIT Jodhpur
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Samarendra Das, ICAR-National Institute on Foot and Mouth
                Disease, Bhubaneswar
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Samarjit Kar, NIT DGP
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Sanjaya Kumar Panda, NIT Warangal
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Santos Kumar Das, NIT Rourkela
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Sasaram Ranvir Singh, IIT Guwahati
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. SK Hafizul Islam, IIIT Kalyani
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Sriparna Saha, IIT Patna
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Suchismita Chinara, NIT Rourkela
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Sudip Kumar Naskar, Jadavpur University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Tapas Kumar Mishra, NIT Rourkela
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Yamuna Prasad, IIT Jammu
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Naveen Kumar Gupta, NIT Jalandhar
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Ajay Kumar Mallick, NIT Hamirpur
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Ashwini Kumar, Bennett University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Debendra Kumar Muduli, CV Raman Global University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Ram Chandra Barik, CV Raman Global University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Lalatendu Muduli, Utkal University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Rasmi Kant Pati, Sambalpur University Institute of
                Information and Technology
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Prabhat Dansena, CV Raman Global University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Surendra Kumar Nanda, CV Raman Global University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Pradeep Roy, Indian Institute of Management Nagpur
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Amrendra Kumar Yadav, ABV-IIITM, Gwalior
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Pramit Mazumdar, IIIT Vadodara
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Prasun Chandra Tripathi, IITRAM, Ahmedabad
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Ruhul Amin, NIT Jamshedpur
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Ram Narayan Yadav, IITRAM, Ahmedabad
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Bharat Ranjan Jyoti Sahoo, ITER, SOA, Bhubaneswar
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Parabir Sethy, Guru Ghasidas Vishwavidyalaya, Bilaspur
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Santosh Kumar Majhi, Guru Ghasidas Vishwavidyalaya, Bilaspur
              </p>
            </div>
          </section>

          {/* Finance Chair Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-400">Finance Chair</h2>
            <div className="space-y-2">
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Pradip Kundu, XIM University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Chandan Misra, XIM University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Fr. Joshy K X, S.J., XIM University
              </p>
            </div>
          </section>

          {/* Web Chair Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-400">Web Chair</h2>
            <div className="space-y-2">
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Fr. Joshy K X, S.J., XIM University
              </p>
            </div>
          </section>

          {/* Publication Chairs Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-400">
              Publication Chairs
            </h2>
            <div className="space-y-2">
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Arif Ahmed Sekh, UiT Norway
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Sourav Mondal, XIM University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Swarup Chattopadhyay, XIM University
              </p>
            </div>
          </section>

          {/* Sponsorship Chair Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-400">
              Sponsorship Chair
            </h2>
            <div className="space-y-2">
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Chandan Misra, XIM University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Fr. Joshy K X, S.J., XIM University
              </p>
            </div>
          </section>

          {/* Registration Chair and Transportation Chair Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-400">
              Registration Chair and Transportation Chair
            </h2>
            <div className="space-y-2">
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Chandan Misra, XIM University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Mr. Pravat Ranjan Jena, XIM University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Mr. Sripati Mahapatra, XIM University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Mr. Biswajit Mohapatra, XIM University
              </p>
            </div>
          </section>

          {/* Publicity Chair Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-400">
              Publicity Chair
            </h2>
            <div className="space-y-2">
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Deepak Ranjan Nayak, MNIT Jaipur
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Lov Kumar, NIT Kurukshetra
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Sanjaya Kumar Panda, NIT Warangal
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Rojalina Priyadarshini, CV Raman Global University,
                Bhubaneswar
              </p>
            </div>
          </section>

          {/* Tutorial & Industry Talk Chair Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-400">
              Tutorial & Industry Talk Chair
            </h2>
            <div className="space-y-2">
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Mr. Akanksha Priyadarshini, Co-Founder & CEO of Aurassure
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Mr. Bodhisattwa Sanghapriya, Co-Founder & CEO of IG Drones
              </p>
            </div>
          </section>

          {/* Local Organizing Committee Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-400">
              Local Organizing Committee
            </h2>
            <div className="space-y-2">
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Ashish Kumar, XIM University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Chandan Misra, XIM University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Devendra Kumar Yadav, XIM University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Pradip Kundu, XIM University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Sourav Mandal, XIM University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Dr. Swarup Chattopadhyay, XIM University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Mr. Sripati Mahapatra, XIM University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Mr. Biswajit Mohapatra, XIM University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Mr. Pravat Ranjan Jena, XIM University
              </p>
            </div>
          </section>

          {/* IEEE Student Branch Volunteers Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-400">
              IEEE Student Branch Volunteers
            </h2>
            <div className="space-y-2">
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Ms. Ipsita Prusty, IEEE Student Member, XIM University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Ms. Ishika Bandhopadhyay, IEEE Student Member, XIM University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Mr. Manish Nanda, IEEE Student Member, XIM University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Mr. Nishikanta Kar, IEEE Student Member, XIM University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Ms. Pratirupa Toppo, IEEE Student Member, XIM University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Mr. R. Pawan Kumar Reddy, IEEE Student Member, XIM University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Ms. Saishrita Mohapatra, IEEE Student Member, XIM University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Ms. Shreya Dutta, IEEE Student Member, XIM University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Ms. Simran Osta, IEEE Student Member, XIM University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Ms. Sneha Grace Kujur, IEEE Student Member, XIM University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Ms. Sonali Nayak, IEEE Student Member, XIM University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Mr. Soumya Prakash Satapathy, IEEE Student Member, XIM
                University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Mr. Subhasis Panda, IEEE Student Member, XIM University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Ms. Subhasree Das, IEEE Student Member, XIM University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Mr. Suraj Maharana, IEEE Student Member, XIM University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Mr. Swayam Mishra, IEEE Student Member, XIM University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Mr. Swayam Prakash, IEEE Student Member, XIM University
              </p>
              <p className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                Mr. Ujjwal Prajapati, IEEE Student Member, XIM University
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
