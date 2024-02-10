import { Test } from "../components/test";

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.none file.
   */
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              <Test></Test>
            </h1>
          </div>      
        </div>
      </div>
    </>
  );
}
