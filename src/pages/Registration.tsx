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
    <div className="pt-32 flex flex-col gap-10 min-h-screen px-3 sm:px-10 lg:px-20 py-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Registration</h1>
        <div className="h-1 w-20 bg-blue-500" />
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
              <TableCell className="">1500</TableCell>
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
              <TableCell className="">Research Scholars/Academicians</TableCell>
              <TableCell className="whitespace-nowrap">250$</TableCell>
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

      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Payment Details</h1>
        <div className="h-1 w-20 bg-blue-500" />
      </div>

      <div className="border border-input rounded-lg w-fit">
        <Table className="font-[SatoshiRegular] text-lg">
          <TableBody>
            <TableRow className="hover:bg-inherit border-input">
              <TableCell className="whitespace-nowrap">
                Account Name (In Favor of):
              </TableCell>
              <TableCell className="">will update soon</TableCell>
            </TableRow>

            <TableRow className="hover:bg-inherit border-input">
              <TableCell className="whitespace-nowrap">
                Account Number:
              </TableCell>
              <TableCell className="">will update soon</TableCell>
            </TableRow>

            <TableRow className="hover:bg-inherit border-input">
              <TableCell className="whitespace-nowrap">Bank Name:</TableCell>
              <TableCell className="">will update soon</TableCell>
            </TableRow>

            <TableRow className="hover:bg-inherit border-input">
              <TableCell className="whitespace-nowrap">Branch:</TableCell>
              <TableCell className="">will update soon</TableCell>
            </TableRow>

            <TableRow className="hover:bg-inherit border-input">
              <TableCell className="whitespace-nowrap">IFSC Code:</TableCell>
              <TableCell className="">will update soon</TableCell>
            </TableRow>

            <TableRow className="hover:bg-inherit border-input">
              <TableCell className="whitespace-nowrap">Account Type:</TableCell>
              <TableCell className="">will update soon</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="space-y-2">
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
      </ul>
    </div>
  );
};

export default Registration;
