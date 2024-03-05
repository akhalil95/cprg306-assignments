import layout from "./layout";
import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-gradient-radial from-blue-500 to-purple-600 min-h-screen flex flex-col items-center py-10">
      <h1 className="text-center text-3xl font-bold mb-8">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        <LinkCard href="/week-2" title="Week 2" />
        <LinkCard href="/week-3" title="Week 3" />
        <LinkCard href="/week-4" title="Week 4" />
        <LinkCard href="/week-5" title="Week 5" />
        <LinkCard href="/week-6" title="Week 6" />
      </div>
    </main>
  );
}

function LinkCard({ href, title }) {
  return (
    <Link href={href} passHref>
      <div className="block p-6 w-80 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 cursor-pointer text-gray-800 ">
        {title}
      </div>
    </Link>
  );
}
