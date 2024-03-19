import { Textarea } from "~/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "~/components/ui/table";
import Chart from "./components/chart";

function Dashboard() {
  const expectedReturn = 0.05;
  const risk = 0.1;
  const totalValue = 1000000;

  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-center bg-black">
        <h1 className="py-2 text-5xl text-white">Asset Alyze</h1>
        <div className="flex w-3/4 flex-col">
          <Chart />
          <Table className="">
            <TableCaption>Portfolio Details</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Expected Return</TableHead>
                <TableHead>Risk</TableHead>
                <TableHead className="text-right">Total value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="text-stone-300">
                <TableCell>{expectedReturn}</TableCell>
                <TableCell>{risk}</TableCell>
                <TableCell className="text-right">{totalValue}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Textarea
            className="w-min-[80]"
            placeholder="Enter instruction to modify portfolio..."
          />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
