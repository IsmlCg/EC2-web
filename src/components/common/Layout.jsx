import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      {/* from-10% via-sky-500 via-30% to-emerald-500 to-90% */}
      <div className=" mx-auto bg-gradient-to-b from-green-200 from-10% via-orange-100 via-30% to-orange-50 to-90%">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
