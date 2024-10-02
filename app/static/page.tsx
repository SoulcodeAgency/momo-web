import Header from "@/components/common/Header";
import ProductLandingPage from "../../components/modules/ProductLandingPage";
import Footer from "@/components/common/Footer";

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
