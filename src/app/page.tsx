import { Footer } from "@/components/Footer";
import { HeaderTopBrand } from "@/components/HeaderTopBrand";
import { PasswordGenerator } from "@/components/PasswordGenerator";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-start bg-slate-100">
      <HeaderTopBrand />
      <PasswordGenerator />
      <Footer />
    </div>
  );
}
