import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/lib/components/ui/table";

const ImportantDates = ({ withHeader = true }: { withHeader?: boolean }) => {
  return (
    <div className="border border-[#2e2e2e] rounded-lg">
      <Table className="text-white font-[SatoshiRegular] text-lg">
        {withHeader && (
          <TableHeader>
            <TableRow className="hover:bg-inherit border-[#2e2e2e]">
              <TableHead className="whitespace-nowrap">
                Important Dates
              </TableHead>
            </TableRow>
          </TableHeader>
        )}
        <TableBody>
          <TableRow className="hover:bg-inherit border-[#2e2e2e]">
            <TableCell className="whitespace-nowrap">
              Paper submission deadline
            </TableCell>
            <TableCell className="text-right">1st March 2025</TableCell>
          </TableRow>
          <TableRow className="hover:bg-inherit border-[#2e2e2e]">
            <TableCell className="whitespace-nowrap">
              Acceptance Notification
            </TableCell>
            <TableCell className="text-right">1st April, 2025</TableCell>
          </TableRow>
          <TableRow className="hover:bg-inherit border-[#2e2e2e]">
            <TableCell className="whitespace-nowrap">
              Camera ready Version submission
            </TableCell>
            <TableCell className="text-right">5th April 2025</TableCell>
          </TableRow>
          <TableRow className="hover:bg-inherit border-[#2e2e2e]">
            <TableCell className="whitespace-nowrap">
              Early-Bird Registration
            </TableCell>
            <TableCell className="text-right">10th April 2025</TableCell>
          </TableRow>
          <TableRow className="hover:bg-inherit border-[#2e2e2e]">
            <TableCell className="whitespace-nowrap">
              Regular Registration
            </TableCell>
            <TableCell className="text-right">25th April 2025</TableCell>
          </TableRow>
          <TableRow className="hover:bg-inherit border-[#2e2e2e]">
            <TableCell className="whitespace-nowrap">
              Dates of Conference
            </TableCell>
            <TableCell className="text-right">
              28th – 30th August 2025
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default ImportantDates;
