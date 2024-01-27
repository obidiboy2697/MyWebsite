/*
  File: ContactMe.jsx page
  Student’s Name: [Obi christian C]
  StudentID: [301329284]
  Date: [27th-01-2024]
*/
import '../src/contact.css';
export default function ContactMe () {
     return (
     <>
       {/* <!-- body Content Section --> */}
     <p>ContactMe:</p>
     <form id="ffp">
		
			
				<label htmlFor="myFName"> First Name: </label>
				<input type="text" id="myFName" name="myFName" required="required" autoFocus /> <br /> <br />
				
				<label htmlFor="myLName"> Last Name: </label>
				<input type="text" id="myLName" name="myLName" required="required" /> <br /> <br />
				
				
				<label htmlFor="myEmail">  Subject </label>
				<input type="email" id="myEmail" name="myEmail" required="required" /> <br /> <br />
				
				<input type="submit" className="submit" value="Submit" /> <br />
					
		
		</form> <br></br>
          <p><i>Call me on: <strong>416.771.6276 </strong></i></p>
 <p>cobi@my.centennialcollege.ca</p>
 <p>xhristianobi@gmai.com</p>
     </>
     );
     }
    