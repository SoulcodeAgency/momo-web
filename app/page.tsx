import Header from "@/components/Header";
import ProductLandingPage from "./ProductLandingPage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans">
      <div className="flex flex-col min-h-screen">

        <Header />

        <ProductLandingPage />

        <Footer />

      </div>
    </div>
  );
}
