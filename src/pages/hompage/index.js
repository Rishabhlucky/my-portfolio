
import Header from '../../components/Header/index'
import Poster from '../../components/Poster/index'
import AboutUs from '../../components/AboutUs/index'
import OurExperience from '../../components/OurExperience';
import TeamMember from '../../components/TeamMember';
import OurWork from '../../components/OurWork';
import CliensFeedback from '../../components/ClientsFeedback';
import OurBlog from '../../components/OurBlog';
import ContactUs from '../../components/ContactUs/indec';



function HomePage() {
    return (
      <div className="App">
        
          
         <Header />
         <Poster /> 
         <AboutUs />
         <OurExperience />
         <TeamMember />
         <OurWork />
         <CliensFeedback />
          <OurBlog />
        <ContactUs />
      </div>
    );
  }
  export default HomePage;