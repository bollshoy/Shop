import Banner from "./Banner";
import NewYear from "./NewYear";
import Products from "./Products";
import SideBar from "./SideBar";

const Home = () => {
  return (
    <main className="mt-6 sm:mt-8 lg:mt-10">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-stretch">
        <SideBar />
        <Banner />
      </div>
      <Products />
      <NewYear />
    </main>
  );
};

export default Home;
