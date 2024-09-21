import Header from '../Header';
import Footer from '../Footer';
import '../Pages/Landing.css';


function Landing() {
  return (
    <>
    <Header />
    <body classname="landing-body">
             <h1 classname="landing-title">Welcome to the Landing Page</h1>
    <Footer />
    </body>
    </>
  );
}

export default Landing;