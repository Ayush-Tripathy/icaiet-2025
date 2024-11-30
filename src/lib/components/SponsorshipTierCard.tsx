type SponsorshipTier = {
  title: string;
  price: string;
  features: string[];
};

const SponsorshipTierCard = ({ tier }: { tier: Partial<SponsorshipTier> }) => {
  return (
    <>
      {tier.title ? (
        <div className="relative p-8 text-left border border-gray-200 rounded-2xl shadow-sm flex flex-col">
          <div className="flex-1">
            <h3 className="text-xl font-semibold ">{tier.title}</h3>
            <p className="mt-4 flex items-baseline ">
              <span className="text-5xl font-extrabold tracking-tight">
                {tier.price}
              </span>
            </p>
            <p className="mt-6 "> Benefits include:</p>
            <ul role="list" className="mt-6 space-y-6">
              {tier.features?.map((feature: string, idx) => (
                <li className="flex" key={idx}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 w-6 h-6 text-emerald-500"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 ">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default SponsorshipTierCard;
