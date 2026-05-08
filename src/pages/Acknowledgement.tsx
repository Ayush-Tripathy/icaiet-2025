
export default function Acknowledgement() {
  return (
    <div className="min-h-screen py-8 pt-32 primary-padding font-[SatoshiRegular]">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold uppercase tracking-tight">CMT Acknowledgement</h1>
          <div className="h-1 w-20 bg-blue-500 mt-2"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <p className="text-lg leading-relaxed text-gray-700">
            The Microsoft CMT service was used for managing the peer-reviewing process for this conference. 
            This service was provided for free by Microsoft and they bore all expenses, 
            including costs for Azure cloud services as well as for software development and support.
          </p>
        </div>
      </div>
    </div>
  );
}
