import LeftSideBar from "@/components/LeftSideBar";
import RightSideBar from "@/components/RightSideBar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
      <main className="relative flex bg-black-3">
        <LeftSideBar />
        <section className="border-2 border-red-500 min-h-screen flex flex-1 flex-col px-4 sm:px-14">
          <div className="mx-auto flex w-full max-w-5xl flex-col max-sm:px-4">
            <div className="flex h-16 items-center justify-between md:hidden">
              <Image src="/icons/logo.svg" width={30} height={30} alt="new icon"/>
            </div>
            <div>{children}</div>
          </div>
        </section>
        <RightSideBar />
      </main>
    </div>
  );
}
