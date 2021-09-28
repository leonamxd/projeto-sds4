import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";
import DataTable from "components/dataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Bounty of Mugiwara Crew</h1>

        <div className="row px-3">

          <div className="col-sm-6">
            <h5 className="text-center text-secundary">DEAD OR ALIVE</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secundary">% of Bounts</h5>
            <DonutChart />
          </div>

          <div className="py-3">
            <h2 className="text-primary"> Todos os dados </h2>
          </div>

        </div>

        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;