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
              1st March 2025
            </TableCell>
          </TableRow>
          <TableRow className="hover:bg-inherit border-input">
            <TableCell className="whitespace-nowrap">
              Acceptance Notification
            </TableCell>
            <TableCell className="text-right whitespace-nowrap">
              1st April, 2025
            </TableCell>
          </TableRow>
          <TableRow className="hover:bg-inherit border-input">
            <TableCell className="whitespace-nowrap">
              Camera ready Version submission
            </TableCell>
            <TableCell className="text-right whitespace-nowrap">
              5th April 2025
            </TableCell>
          </TableRow>
          <TableRow className="hover:bg-inherit border-input">
            <TableCell className="whitespace-nowrap">
              Early-Bird Registration
            </TableCell>
            <TableCell className="text-right whitespace-nowrap">
              10th April 2025
            </TableCell>
          </TableRow>
          <TableRow className="hover:bg-inherit border-input">
            <TableCell className="whitespace-nowrap">
              Regular Registration
            </TableCell>
            <TableCell className="text-right whitespace-nowrap">
              25th April 2025
            </TableCell>
          </TableRow>
          <TableRow className="hover:bg-inherit border-input">
            <TableCell className="whitespace-nowrap">
              Dates of Conference
            </TableCell>
            <TableCell className="text-right whitespace-nowrap">
              28th – 30th August 2025
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default ImportantDates;
