import ReactLogo from "../../assets/ReactLogo.png"
import PythonLogo from "../../assets/PythonLogo.png"
import NodeLogo from "../../assets/NodeLogo.png"
import PostGreLogo from "../../assets/PostGreSQLLogo.png"
import MongoLogo from "../../assets/MongoLogo.png"
import RLogo from "../../assets/RLogo.png"
import FlutterLogo from "../../assets/FlutterLogo.png"
import FigmaLogo from "../../assets/FigmaLogo.png"
import RedisLogo from "../../assets/RedisLogo.png"


const TechStackSection = () => {
  const technologies = [ReactLogo,PythonLogo,NodeLogo,PostGreLogo,MongoLogo,RLogo,FlutterLogo,FigmaLogo,RedisLogo];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-display-md xl:text-display-lg font-bold mb-4">
            Technology <span className="text-primary">Stack</span>
          </h2>
        </div>
        
<div className="w-full flex flex-wrap justify-between items-center">
  {technologies.map((tech, index) => (
    <img
      key={index}
      src={tech}
      alt="Technology Logo"
      className="object-contain"
    />
  ))}
</div>


      </div>
    </section>
  );
};

export default TechStackSection;