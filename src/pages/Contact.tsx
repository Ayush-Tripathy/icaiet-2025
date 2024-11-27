const Contact = () => {
  return (
    <div className="font-[SatoshiRegular] pt-32 bg-black text-white flex flex-col gap-10 min-h-screen px-3 sm:px-10 lg:px-20 py-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
        <div className="h-1 w-20 bg-blue-500" />
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <p className="font-[SatoshiBold] text-2xl">
            Dr. Devendra Kumar Yadav
          </p>
          <div className="flex flex-col gap-3">
            <span>Email: devendra@xim.edu.in</span>
            <span>Phone: +917978910321</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-[SatoshiBold] text-2xl">Dr. Ashish Kumar</p>
          <div className="flex flex-col gap-3">
            <span>Email: ashish@xim.edu.in</span>
            <span>Phone: +916205015853</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-[SatoshiBold] text-2xl">Mr. Biswajit Mohapatra</p>
          <div className="flex flex-col gap-3">
            <span>Email: deanxcse_office@xim.edu.in</span>
            <span>Phone: +917008014054</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
