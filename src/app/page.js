import Navheader from "./components/Navheader";
import Camera from "./components/Camera";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-gray-950 min-h-screen py-8">
      <div className=" max-w-4xl mx-auto space-y-8 px-4">
        <Navheader />
        <Camera />
        <Footer />
      </div>
    </main>
  );
}
