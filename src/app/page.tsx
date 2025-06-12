import Header from "@/components/header/headers";
import Landing from "@/components/landing/landing";
export default function Home() {
  return (
    <div className="flex flex-col mt-18">
      <Header />
      <Landing />
    </div>
  );
}
