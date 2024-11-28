
import TwitterNavbar from "@/components/Navbar";

export default async function Layout({ children }: { children: any }) {
  return (
    <main className="flex w-full justify-center items-center">
      <TwitterNavbar />
      <div className="flex flex-col w-full justify-center items-center">
        {children}
      </div>
    </main>
  );
}
