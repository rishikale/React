import React from "react";
import axios from "axios";

function Promises() {
  // Promises : Promise is function which have three working states or structure

  // 1 . Pending : First state of the promise .When promise executes it will be in Pending state .

  // or

  // 2 . Accepted / Fullfilled : After the pending state if there is some result available the promise will go to Fullfilled state .

  //or

  // 3 .Rejected : If there is no data available to return in promise .or
  // there is some error occured then our promise will go to the rejected state .

  // Methods to write a promise :

  // Axios Library To Execute promises ;

  //   React.useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((response) => response.data)
  //       .then((res) => {
  //         console.log("The response from the promise is :", res);
  //       });
  //   }, []);

  //   React.useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/comments")
  //       .then((response) => response.json())
  //       .then((json) => console.log("The response from the promise is :", json))
  //       .catch((error) => {
  //         console.log("The error or rejected state of the promise :", error);
  //       });
  //   }, []);

  // get : used as Read .
  // post : used as write .
  // put : used as update .
  // delete : used as delete .

  React.useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((res) => {
        console.log("The response is :", res);
      })
      .catch((error) => {
        console.log("The error is :", error);
      });
  }, []);

  const getComments = async () => {
    await fetch("")
      .then((response) => response)
      .then((res) => {
        res;
      });
      
      throw {

      }
  };

  return (
    <div>
      <div className="mt-5 font-semibold text-xl flex justify-center">
        Promises
      </div>
    </div>
  );
}

export default Promises;
