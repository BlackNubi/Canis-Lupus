import { PrototypeFrame } from "@/components/prototype-frame";

type SearchParams = Promise<{
  profile?: string | string[];
}>;

function profileQuery(value: string | string[] | undefined): string {
  const profile = Array.isArray(value) ? value[0] : value;
  return profile === "manager" || profile === "robert"
    ? `?profile=${encodeURIComponent(profile)}`
    : "";
}

export default async function StaffingPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const query = profileQuery((await searchParams).profile);

  return (
    <PrototypeFrame
      title="Staffing Monitor"
      src={`/prototypes/staffing-monitor.html${query}`}
    />
  );
}
