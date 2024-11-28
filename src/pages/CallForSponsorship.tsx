import SponsorshipTierCard from "@/lib/components/SponsorshipTierCard";

const CallForSponsorship = () => {
  const tiers = [
    {
      title: "Platinum Sponsor",
      price: "INR 5.0L",
      features: [
        "10 Complimentary delegate passes",
        "40 minutes presentation slot",
        "Acknowledgement during Awards & Valedictory Function",
        "2 Complimentary exhibit booths at Prime Location",
        "Prominent display of logo on all printed material, backdrop and website",
        "Permission to keep the Company brochure in the registration Kit",
      ],
    },

    {
      title: "Gold Sponsor",
      price: "INR 3.0L",
      features: [
        "5 Complimentary delegate passes",
        "20 minutes presentation slot",
        "Acknowledgement during Awards & Valedictory Function",
        "1 Complimentary exhibit booth at Prime Location",
        "Prominent display of logo on all printed material, backdrop and website",
        "Permission to keep the Company brochure in the registration Kit",
      ],
    },

    {
      title: "Silver Sponsor",
      price: "INR 2.0L",
      features: [
        "3 Complimentary delegate passes",
        "15 minutes presentation slot",
        "Acknowledgement during Awards & Valedictory Function",
        "Prominent display of logo on all printed material, backdrop and website",
        "Permission to keep the Company brochure in the registration Kit",
      ],
    },
    {
      title: "Bronze Sponsor",
      price: "INR 1.0L",
      features: [
        "2 Complimentary delegate passes",
        "10 minutes presentation slot",
        "Acknowledgement during Awards & Valedictory Function",
        "Prominent display of logo on all printed material, backdrop and website",
      ],
    },
  ];
  return (
    <div className="text-justify font-[SatoshiRegular] pt-32 flex flex-col gap-10 min-h-screen px-3 sm:px-10 lg:px-20 py-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          Call For Sponsorship
        </h1>
        <div className="h-1 w-20 bg-blue-500" />
      </div>

      <h2 className="text-xl">
        Industrial and Institutional Sponsors are welcome to support ICAIET-2025
        conference under the following categories:
      </h2>

      <div className="flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {tiers.map((tier) => (
          <SponsorshipTierCard tier={tier} />
        ))}
      </div>

      <div className="flex items-center justify-center">
        <h2 className="text-xl text-blue-500 font-bold text-left">
          All interested sponsors, fill the Google form below or mail us
          at&nbsp;
          <a href="mailto:deanxcse_office@xim.edu.in">
            deanxcse_office@xim.edu.in
          </a>
        </h2>
      </div>
    </div>
  );
};

export default CallForSponsorship;
