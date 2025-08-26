import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/lib/components/ui/table";
import { ArrowRight } from "lucide-react";

const ImportantDates = ({ withHeader = true }: { withHeader?: boolean }) => {
  return (
    <>
      <div className="border border-input rounded-lg">
      <Table className="font-[SatoshiRegular] text-lg">
        {withHeader && (
          <TableHeader>
            <TableRow className="hover:bg-inherit border-input">
              <TableHead className="whitespace-nowrap font-bold">
                Important Dates
              </TableHead>
            </TableRow>
          </TableHeader>
        )}
        <TableBody>
          <TableRow className="hover:bg-inherit border-input">
            <TableCell className="whitespace-nowrap">
              Paper submission deadline
            </TableCell>
            <TableCell className="text-right whitespace-nowrap">
              <span className="line-through">
                01 March 2025 (First deadline)
              </span>
              <br />
              <span className="">Extended till 01 April 2025</span>
            </TableCell>
          </TableRow>
          <TableRow className="hover:bg-inherit border-input">
            <TableCell className="whitespace-nowrap">
              Acceptance Notification
            </TableCell>
            <TableCell className="text-right whitespace-nowrap">
              <span>
                14 April 2025 (1<sup>st</sup> phase acceptance)
              </span>
              <br />
              <span>
                14 May 2025 (2<sup>nd</sup> phase acceptance)
              </span>
            </TableCell>
          </TableRow>
          <TableRow className="hover:bg-inherit border-input">
            <TableCell className="whitespace-nowrap">
              Camera ready Version submission
            </TableCell>
            <TableCell className="text-right whitespace-nowrap">
              28 May 2025
            </TableCell>
          </TableRow>
          <TableRow className="hover:bg-inherit border-input">
            <TableCell className="whitespace-nowrap">
              Early-Bird Registration
            </TableCell>
            <TableCell className="text-right whitespace-nowrap">
              28 May 2025
            </TableCell>
          </TableRow>
          {/* <TableRow className="hover:bg-inherit border-input">
            <TableCell className="whitespace-nowrap">
              Regular Registration
            </TableCell>
            <TableCell className="text-right whitespace-nowrap">
              25 April 2025
            </TableCell>
          </TableRow> */}
          <TableRow className="hover:bg-inherit border-input">
            <TableCell className="whitespace-nowrap">
              Dates of Conference
            </TableCell>
            <TableCell className="text-right whitespace-nowrap">
              28 – 30 August 2025
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>

      <div className="flex flex-col justify-start py-6">
        <a
          href="/ICAIET-2025_Schedule.pdf"
          download
          className="flex flex-row items-center w-fit gap-2 px-8 py-3 bg-[#f0f5ff] border border-[#d6e4ff] text-[#1d39c4] rounded-full text-base font-medium transition-all duration-300 hover:gap-3 hover:bg-[#d6e4ff]/40"
        >
          Download Daywise Schedule <ArrowRight size={20} />
        </a>

        <p className="mt-3 pl-5 text-sm text-gray-600 text-center w-fit">
          Get the detailed daywise program (PDF)
        </p>
      </div>
    </>
  );
};

export default ImportantDates;
