//import useServices from "../../../Hooks/useServices";
// import KhujTheSearch from "../../KhujTheSearch/KhujTheSearch";
import useLibraries from '../../../hooks/useLibraries'
// import Service from "../Service/Service";
import Banner from '../Banner/SimpleSlider'

import HomeLibrary from '../homeLibrary/HomeLibrary';
import "./homeLibraries.css";

const HomeLibraries = () => {
  const [services, setServices] = useLibraries();

  return (
    <div id="services" className="services-fullcontainer">
      
      <div>
        {/* <Banner/> */}
      <h1 className="services-header">All Books</h1>
      {/* <KhujTheSearch/> */}
      </div>
      <div className="services-container">
        {services.map((service) => (
          <HomeLibrary key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default HomeLibraries;