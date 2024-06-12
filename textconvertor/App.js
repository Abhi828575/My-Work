
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
    <Navbar title1="Text Converter" title2="Home" title3="About" title4="Contact us" title5="Search"/>
    <div className="container my-3">

    <TextForm heading="Enter the text to convert in uppercase"/>
    </div>
    
    </>
  );
}

export default App;
