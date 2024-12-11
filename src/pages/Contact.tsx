const Contact = () => {
  return (
    <div className="font-[SatoshiRegular] pt-32 flex flex-col gap-10 min-h-screen px-3 sm:px-10 lg:px-20 py-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
        <div className="h-1 w-20 bg-blue-500" />
      </div>

      <div className="flex flex-col gap-3">
        <p className="font-[SatoshiBold] text-2xl">ICAIET - 2025</p>
        <div className="flex flex-col gap-3">
          <span>Email: icaiet-2025@xim.edu.in</span>
        </div>
      </div>
      <div className="flex flex-row gap-x-20 gap-y-10 flex-wrap">
        <div className="flex flex-col gap-3">
          <p className="font-[SatoshiBold] text-2xl">Dr. Fr. Joshy K X, S.J.</p>
          <div className="flex flex-col gap-3">
            {/* <span>Email: joshy@xim.edu.in</span> */}
            <span>Phone: +918280006677</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-[SatoshiBold] text-2xl">
            Dr. Devendra Kumar Yadav
          </p>
          <div className="flex flex-col gap-3">
            {/* <span>Email: devendra@xim.edu.in</span> */}
            <span>Phone: +917978910321</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-[SatoshiBold] text-2xl">Dr. Ashish Kumar</p>
          <div className="flex flex-col gap-3">
            {/* <span>Email: ashish@xim.edu.in</span> */}
            <span>Phone: +916205015853</span>
          </div>
        </div>

        {/* <div className="flex flex-col gap-3">
          <p className="font-[SatoshiBold] text-2xl">Mr. Biswajit Mohapatra</p>
          <div className="flex flex-col gap-3">
            <span>Email: deanxcse_office@xim.edu.in</span>
            <span>Phone: +917008014054</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
