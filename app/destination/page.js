import { redirect } from "next/navigation";

async function DestinationPage() {
  return redirect("/destination/moon");
}

export default DestinationPage;
