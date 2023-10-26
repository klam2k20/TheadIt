import CreateBox from "@/components/CreateBox";

export default function Home() {
  return (
    <div className="grid h-full w-full grid-cols-1 gap-6 md:grid-cols-3">
      {/* Feed */}
      <div className="col-span-2 h-full w-full overflow-hidden">Feed</div>

      {/* Action Box */}
      <CreateBox />
    </div>
  );
}
