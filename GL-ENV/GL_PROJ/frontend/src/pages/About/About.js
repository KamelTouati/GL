  import './About.css';
  import {Navbar, Footer} from '../../components/index'
  import images from '../../assets/Images/index'
  
  function About() {
    return (
      <>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_600px] bg-[#B7FEF9] relative">
            <div className="m-[20px] md:m-[50px]">
                <h1 className="text-6xl font-black">
                    Getting Best
                </h1>
                <h1 className="text-6xl font-black">
                    Quality Education
                </h1>
                <h1 className="text-6xl font-black">
                    Is Now More Easier
                </h1>
                <h3 className="text-xl leading-8 my-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quae enim, iusto a laboriosam vitae et rerum cupiditate. Soluta aliquam consequuntur placeat mollitia recusandae quis esse dolores, impedit veritatis porro!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quae enim, iusto a laboriosam vitae et rerum cupiditate. Soluta aliquam consequuntur placeat mollitia recusandae quis esse dolores, impedit veritatis porro!
                </h3>
            </div>
            <div className="flex items-center">
                <img className="w-[600px]" src={images[21]} alt="" />
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='hidden lg:block lg:-bottom-[300px] w-full absolute'>
                <path fill="#B7FEF9" fill-opacity="1" d="M0,192L34.3,208C68.6,224,137,256,206,266.7C274.3,277,343,267,411,224C480,181,549,107,617,101.3C685.7,96,754,160,823,170.7C891.4,181,960,139,1029,144C1097.1,149,1166,203,1234,218.7C1302.9,235,1371,213,1406,202.7L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
            </svg>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[600px_1fr] lg:top-[300px] relative">
            <div className="flex items-center">
                <img className="w-[600px]" src={images[21]} alt="" />
            </div>
            <div className="m-[20px] md:m-[50px]">
                <h1 className="text-6xl font-black">
                    Getting Best
                </h1>
                <h1 className="text-6xl font-black">
                    Quality Education
                </h1>
                <h1 className="text-6xl font-black">
                    Is Now More Easier
                </h1>
                <h3 className="text-xl leading-8 my-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quae enim, iusto a laboriosam vitae et rerum cupiditate. Soluta aliquam consequuntur placeat mollitia recusandae quis esse dolores, impedit veritatis porro!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quae enim, iusto a laboriosam vitae et rerum cupiditate. Soluta aliquam consequuntur placeat mollitia recusandae quis esse dolores, impedit veritatis porro!
                </h3>
            </div>
        </div>
      </>
    );
  }
  
export default About;