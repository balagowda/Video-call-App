import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="Contact">
        <div className="Contact-body">
          <h1 className="Contact-heading">Contact US</h1>
          <div className="Contact-form">
            <form >
              <label htmlFor="name">Name :</label>
              <input type="text" id="name"placeholder="Name"/>

              <label htmlFor="mail">Mail :</label>
              <input type="text" id="mail" placeholder="mail"/>

              <label htmlFor="query">Query</label>
              <textarea name="query" id="query" cols="30" rows="10" placeholder="I am unable to login etc."></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
