import ImportantDates from "@/lib/components/ImportantDates";

const ImportantDatesPage = () => {
  return (
    <div className="pt-32 bg-black text-white flex flex-col gap-10 h-screen px-3 sm:px-10 lg:px-20 py-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Important Dates</h1>
        <div className="h-1 w-20 bg-blue-500" />
      </div>

      <ImportantDates withHeader={false} />
    </div>
  );
};

export default ImportantDatesPage;
