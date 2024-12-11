import ImportantDates from "@/lib/components/ImportantDates";

const ImportantDatesPage = () => {
  return (
    <div className="pt-32 flex flex-col gap-10 min-h-screen primary-padding py-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Important Dates</h1>
        <div className="h-1 w-20 bg-blue-500" />
      </div>

      <ImportantDates withHeader={false} />
    </div>
  );
};

export default ImportantDatesPage;
