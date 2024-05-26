import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PartnerSection from "./components/PartnerSection/PartnerSection";

function App() {
  return (
    <div className="max-w-[2000px] mx-auto text-neutral-900 bg-white dark:text-neutral-200 dark:bg-neutral-800">
      <Navbar />
      <Header />
      <Main />
      <PartnerSection />
    </div>
  );
}

export default App;
