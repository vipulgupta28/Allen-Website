function Navbar(){
    return (
      <>
      <div className="nav">
        <h1 className="logo">ALLEN</h1>
        <div className="links">
        <a href="#">Courses</a>
        <a href="#">Test Series</a>
        <a href="#">Scholarships</a>
        <a href="#">Results</a>
        <a href="#">StudyMaterials</a>
        <a href="#">About us</a>
        </div>

        <div className="buttons">
          <div className="talk">
          <button>Talk To Us</button>
          </div>

          <div className="login">
          <button>Login</button>
          </div>
          
        </div>
       
        </div>
        </>
    );
  };
  
  export default Navbar;
  