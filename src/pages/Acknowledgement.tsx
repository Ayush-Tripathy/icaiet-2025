
export default function Acknowledgement() {
  return (
    <div className="min-h-screen py-8 pt-32 primary-padding font-[SatoshiRegular]">
      <div className="container mx-auto px-4">
          <p className="text-lg leading-relaxed text-gray-700">
            The Microsoft CMT service was used for managing the peer-reviewing process for this conference. 
            This service was provided for free by Microsoft and they bore all expenses, 
            including costs for Azure cloud services as well as for software development and support.
          </p>
        
      </div>
    </div>
  );
}
{/*
export const dynamic = 'force-static';  // 👈 Add this line

export default function Acknowledgement() {
  return (
    <div className="min-h-screen py-8 pt-32 primary-padding font-[SatoshiRegular]">
      <div className="container mx-auto px-4">
        <p className="text-lg leading-relaxed text-gray-700">
          The Microsoft CMT service was used for managing the peer-reviewing process for this conference. 
          This service was provided for free by Microsoft and they bore all expenses, 
          including costs for Azure cloud services as well as for software development and support.
        </p>
      </div>
    </div>
  );
}*/}