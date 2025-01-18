function Form(){
    return(
        <>


<div className="form">


<div className="Names">
  <div className="InputField">
    <label htmlFor="firstName">First Name</label>
    <input type="text" id="firstName" placeholder="Enter First Name" />
  </div>
  <div className="InputField">
    <label htmlFor="lastName">Last Name</label>
    <input type="text" id="lastName" placeholder="Enter Last Name" />
  </div>
</div>


<div className="Number">
  <div className="InputField">
    <label htmlFor="firstName">Mobile Number</label>
    <input type="text" id="firstName" placeholder="Enter 10 digit Mobile Number" />
  </div>
  <div className="InputField">
    <label htmlFor="lastName">Email ID</label>
    <input type="mail" id="lastName" placeholder="Enter email ID" />
  </div>
</div>

<div className="Class">
  <div className="InputField">
    <label htmlFor="firstName">Class</label>
    <input type="text" id="firstName" placeholder="Enter class" />
  </div>
  <div className="InputField">
    <label htmlFor="lastName">Goal</label>
    <input type="mail" id="lastName" placeholder="Enter goal" />
  </div>
</div>

<div className="program">
<div className="InputField">
    <label htmlFor="firstName">Preferred Programm</label>
    <input type="text" id="firstName" placeholder="Enter preferred programm" />
  </div>
</div>

<div>
        <input
          type="checkbox"
          id="terms"
          className="label"
        />
        <label htmlFor="terms">
          I agree to the <strong>Terms and Conditions</strong>.
        </label>
      </div>

      <div>
        <input
          type="checkbox"
          id="terms"
          className="label"
        />
        <label htmlFor="terms">
          
        I authorize ALLEN to contact me via phone/SMS & other channels.
        </label>
      </div>
<button>Submit</button>
</div>
        
       
        </>
    )

}

export default Form;