import Footer from "@/app/_components/main/footer";
import NavBar from "@/app/_components/main/navbar/navbar";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col items-center relative">
      <NavBar />
      <div className="m-auto flex w-full max-w-6xl grow flex-col justify-start gap-4 px-8">
        {children}
      </div>
      <Footer />
    </div>
  );
}
