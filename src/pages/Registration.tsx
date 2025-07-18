import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/lib/components/ui/table";

const Registration = () => {
  return (
    <div className="pt-32 flex flex-col gap-10 min-h-screen primary-padding py-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Registration</h1>
        <div className="h-1 w-20 bg-blue-500" />
      </div>

      <div className="flex flex-col gap-3">
        <div className="text-sm text-muted-foreground">
          <span className="font-bold">Note:</span> All prices are exclusive of
          GST, 18% GST will be applicable on all the registration fees at the
          time of payment.
        </div>
        <div className="border border-input rounded-lg">
          <Table className="font-[SatoshiRegular] text-lg">
            <TableHeader className="font-bold">
              <TableRow className="hover:bg-inherit border-input">
                <TableHead className="whitespace-nowrap font-bold">
                  SI. No.
                </TableHead>
                <TableHead className="whitespace-nowrap font-bold">
                  Indian Participants
                </TableHead>
                <TableHead className="whitespace-nowrap font-bold">
                  IEEE Members (INR)
                </TableHead>
                <TableHead className="whitespace-nowrap font-bold">
                  Non-IEEE Members (INR)
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow className="hover:bg-inherit border-input">
                <TableCell className="whitespace-nowrap">1</TableCell>
                <TableCell className="">
                  Research Scholars/UG/PG Students
                </TableCell>
                <TableCell className="whitespace-nowrap">6500</TableCell>
                <TableCell className="">8000</TableCell>
              </TableRow>

              <TableRow className="hover:bg-inherit border-input">
                <TableCell className="whitespace-nowrap">2</TableCell>
                <TableCell className="">Academicians</TableCell>
                <TableCell className="whitespace-nowrap">7000</TableCell>
                <TableCell className="">8500</TableCell>
              </TableRow>

              <TableRow className="hover:bg-inherit border-input">
                <TableCell className="whitespace-nowrap">3</TableCell>
                <TableCell className="">Industry Person</TableCell>
                <TableCell className="whitespace-nowrap">7500</TableCell>
                <TableCell className="">9000</TableCell>
              </TableRow>

              <TableRow className="hover:bg-inherit border-input">
                <TableCell className="whitespace-nowrap">4</TableCell>
                <TableCell className="">
                  Listener (Non-Author/Attendee/Non-Presenter/Companion
                  Participant)
                </TableCell>
                <TableCell className="whitespace-nowrap">1500</TableCell>
                <TableCell className="">2000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="border border-input rounded-lg">
          <Table className="font-[SatoshiRegular] text-lg">
            <TableHeader className="font-bold">
              <TableRow className="hover:bg-inherit border-input">
                <TableHead className="whitespace-nowrap font-bold">
                  SI. No.
                </TableHead>
                <TableHead className="whitespace-nowrap font-bold">
                  Foreign Participants
                </TableHead>
                <TableHead className="whitespace-nowrap font-bold">
                  IEEE Members (USD)
                </TableHead>
                <TableHead className="whitespace-nowrap font-bold">
                  Non-IEEE Members (USD)
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow className="hover:bg-inherit border-input">
                <TableCell className="whitespace-nowrap">1</TableCell>
                <TableCell className="">
                  Research Scholars/Academicians
                </TableCell>
                <TableCell className="whitespace-nowrap">300$</TableCell>
                <TableCell className="">350$</TableCell>
              </TableRow>

              <TableRow className="hover:bg-inherit border-input">
                <TableCell className="whitespace-nowrap">2</TableCell>
                <TableCell className="">
                  Listener (Non-Author/Attendee/Non-Presenter/Companion
                  Participant)
                </TableCell>
                <TableCell className="whitespace-nowrap">150$</TableCell>
                <TableCell className="">200$</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Registration link */}
      {/* <div className="space-y-2">
        <span className="">
          Click{" "}
          <a
            href="https://forms.gle/gxZKDTB2LZhoyb8N9"
            className="text-blue-400"
          >
            here
          </a>{" "}
          to register
        </span>
      </div> */}
      {/* <div className="space-y-2">
        <span className="text-lg text-gray-700">
          Click{" "}
          <a
            href="https://forms.gle/gxZKDTB2LZhoyb8N9"
            className="text-blue-400 font-semibold relative group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 opacity-0 group-hover:opacity-100 animate-pulse rounded-full"></span>
            <span className="relative z-10">here</span>
          </a>{" "}
          to register
        </span>
      </div> */}
      {/* <div className="space-y-2">
        <span className="text-base text-gray-800">
          Click{" "}
          <a
            href="https://forms.gle/gxZKDTB2LZhoyb8N9"
            className="relative inline-flex items-center space-x-2 text-blue-600 font-semibold group"
          >
            <span className="pl-2 underline group-hover:text-blue-800 transition-colors duration-200">
              here
            </span>
            <span className="bg-yellow-200 text-yellow-800 text-xs font-bold px-2 py-0.5 rounded-full animate-pulse ml-1">
              Register Now
            </span>
          </a>{" "}
          to register
        </span>
      </div> */}

      <div className="space-y-2">
        <span className="text-xl text-gray-800 inline-flex items-center justify-center gap-1">
          Click{" "}
          <a
            target="_blank"
            href="https://forms.gle/gxZKDTB2LZhoyb8N9"
            className="relative inline-flex items-center font-semibold text-blue-600 group"
          >
            <span className="underline group-hover:text-blue-800 transition-colors duration-200">
              here to register
            </span>
            <span className="ml-2 bg-yellow-200 text-yellow-800 text-xs font-bold px-2 py-0.5 rounded-full animate-pulse">
              Open Now
            </span>
            {/* <span
              className="absolute -right-4 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping"
              aria-hidden="true"
            ></span> */}
          </a>
        </span>
      </div>

      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Payment Details</h1>
        <div className="h-1 w-20 bg-blue-500" />
      </div>

      <div className="space-y-3">
        <div className="font-[SatoshiRegular]">
          <h3 className="text-lg font-bold">For Domestic participants:</h3>
          <span className="text-sm">
            An online payment link, This accepts payments VIA Net
            banking/UPI/Debit & Credit Card.
          </span>
        </div>

        <div className="flex flex-row gap-2">
          <a
            className="text-blue-500 text-xl font-semibold underline"
            href="https://rzp.io/rzp/JDHgTzj7"
            target="_blank"
          >
            Click here to pay online
          </a>

          {/* Blinking text for (indian participants) */}
          <span className="text-green-500 text-lg font-semibold animate-pulse">
            (Indian Participants)
          </span>
        </div>

        <div className="text-sm text-muted-foreground">
          <span className="font-bold">Note:</span> Please take a screenshot of
          the payment success page for future reference. This is important as
          you will be required to upload this screenshot in the registration
          form.
        </div>
      </div>

      <div className="space-y-3">
        <div className="font-[SatoshiRegular]">
          <h3 className="text-lg font-bold">For NON-Domestic participants:</h3>
          <span className="text-sm">
            Bank account details given below for payments
          </span>
        </div>
        <div className="border border-input rounded-lg w-fit">
          <Table className="font-[SatoshiRegular] text-lg">
            <TableBody>
              <TableRow className="hover:bg-inherit border-input">
                <TableCell className="whitespace-nowrap">
                  Beneficiary Bank Ac Name:
                </TableCell>
                <TableCell className="">XIM UNIVERSITY FEES ACCOUNT</TableCell>
              </TableRow>
              <TableRow className="hover:bg-inherit border-input">
                <TableCell className="whitespace-nowrap">
                  Beneficiary Bank Ac Number:
                </TableCell>
                <TableCell className="">0460053000004025</TableCell>
              </TableRow>
              <TableRow className="hover:bg-inherit border-input">
                <TableCell className="whitespace-nowrap">
                  Beneficiary Address:
                </TableCell>
                <TableCell className="">
                  Plot No 12 A, Nijigada, Kurki, Harirajpur, Puri-752050,Odisha
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-inherit border-input">
                <TableCell className="whitespace-nowrap">IFSC Code:</TableCell>
                <TableCell className="">SIBL0000852</TableCell>
              </TableRow>
              <TableRow className="hover:bg-inherit border-input">
                <TableCell className="whitespace-nowrap">SWIFT Code:</TableCell>
                <TableCell className="">SOININ55082</TableCell>
              </TableRow>
              <TableRow className="hover:bg-inherit border-input">
                <TableCell className="whitespace-nowrap">
                  Beneficiary Bank Name:
                </TableCell>
                <TableCell className="">SOUTH INDIAN BANK</TableCell>
              </TableRow>
              <TableRow className="hover:bg-inherit border-input">
                <TableCell className="whitespace-nowrap">
                  Beneficiary Bank Address:
                </TableCell>
                <TableCell className="">
                  XIM University Branch, Plot No 12 A, Nijigada, Kurki,
                  Harirajpur, Puri-752050,Odisha, INDIA
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      {/* <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          Payment Mode(NEFT/DD/WIRE)
        </h1>
        <div className="h-1 w-20 bg-blue-500" />
      </div>

      <ul className="list-disc">
        <li>
          National Electronic Funds Transfer (NEFT)
          <ul>
            <li>
              The Online transaction should be make through NEFT with above
              Account details. (Please make a note of the transaction Number)
            </li>
          </ul>
        </li>
        <li>Demand Draft (DD)</li>
        <li>Wire Transfer</li>
      </ul> */}
    </div>
  );
};

export default Registration;
