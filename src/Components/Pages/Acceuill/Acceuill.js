import React, { useRef, useEffect } from "react";

const Acceuill = () => {
  let myLoremDiv = useRef(null);
  useEffect(() => {
    console.log(" UseEffect");
    myLoremDiv.current.style.color = "red";
    console.log(myLoremDiv);
  });
  console.log("hellooooo");
  return (
    <div>
      Acceuill
      <div ref={myLoremDiv}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
        cupiditate autem aliquam numquam natus fugit itaque eius, quia rerum ea
        obcaecati explicabo beatae, necessitatibus optio id. Commodi pariatur
        est quisquam?
      </div>
    </div>
  );
};

export default Acceuill;
