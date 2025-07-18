import SponsorshipTierCard from "@/lib/components/SponsorshipTierCard";

const CallForSponsorship = () => {
  const tiers = [
    {
      title: "Title Sponsor",
      price: "INR 3.0L",
      features: [
        "4 Complimentary delegate passes",
        "25 minutes presentation slot",
        "Acknowledgement during Awards & Valedictory Function",
        "Prominent display of logo on all printed material, backdrop and website",
        "Permission to keep the Company brochure / logo in the registration Kit",
        "Inclusion of company logo and name in conference paper/poster presentations",
        "Social Media Promotion by XIM University"
      ],
    },

    {
      title: "Diamond Sponsor",
      price: "INR 2.0L",
      features: [
        "3 Complimentary delegate passes",
        "20 minutes presentation slot",
        "Acknowledgement during Awards & Valedictory Function",
        "Prominent display of logo on all printed material, backdrop and website",
        "Inclusion of company logo and name in conference paper/poster presentations",
        "Social Media Promotion by XIM University"
      ],
    },

    {
      title: "Gold Sponsor",
      price: "INR 1.0L",
      features: [
        "2 Complimentary delegate passes",
        "15 minutes presentation slot",
        "Acknowledgement during Awards & Valedictory Function",
        "Prominent display of logo on all printed material, backdrop and website",
        "Permission to keep the Company brochure in the registration Kit",
        "Social Media Promotion by XIM University"
      ],
    },
    {
      title: "Silver Sponsor",
      price: "INR 75K",
      features: [
        "1 Complimentary delegate passes",
        "10 minutes presentation slot",
        "Acknowledgement during Awards & Valedictory Function",
        "Prominent display of logo on all printed material, backdrop and website",
        "Social Media Promotion by XIM University"
      ],
    },
    {
      title: "Conference Kit Sponsor",
      price: "INR 75K",
      features: [
        "2 Complimentary delegate passes",
        "10 minutes presentation slot",
        "Acknowledgement during Awards & Valedictory Function",
        "Prominent display of logo on all printed material, backdrop and website",
        "Permission to keep the Company brochure / logo in the registration Kit",
        "Social Media Promotion by XIM University"
      ],
    },
    {
      title: "Banquet Dinner Sponsor",
      price: "INR 1.0L",
      features: [
        "2 Complimentary delegate passes",
        "10 minutes presentation slot",
        "Acknowledgement during Awards & Valedictory Function",
        "Prominent display of logo on all printed material, backdrop and website",
        "Social Media Promotion by XIM University"
      ],
    },
  ];
  return (
    <div className="text-justify font-[SatoshiRegular] pt-32 flex flex-col gap-10 min-h-screen primary-padding py-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          Call For Sponsorship
        </h1>
        <div className="h-1 w-20 bg-blue-500" />
      </div>

      <h2 className="text-xl text-left">
        Industrial and Institutional Sponsors are welcome to support ICAIET-2025
        conference under the following categories:
      </h2>

      <div className="flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {tiers.map((tier, idx) => (
          <SponsorshipTierCard tier={tier} key={idx} />
        ))}
      </div>

      <div className="flex items-center justify-center">
        <h2 className="text-xl text-blue-500 font-bold text-left">
          All interested sponsors, mail us
          at&nbsp;
          <a href="mailto: icaiet-2025@xim.edu.in">
            icaiet-2025@xim.edu.in
          </a>
        </h2>
      </div>
    </div>
  );
};

export default CallForSponsorship;
