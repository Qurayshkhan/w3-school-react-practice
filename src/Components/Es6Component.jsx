import React, { useState, useEffect } from "react";
import Goal from "./Goal";
import Missed from "./Missed";

class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return `this is support brand ${this.brand}`;
  }
}

const myCar = new Car("Farari");
console.log(myCar.present());

function Es6Component(props) {
  const vehicleOne = {
    brand: "Ford",
    model: "Mustang",
    type: "car",
    year: 2021,
    color: "red",
    registration: {
      city: "Houston",
      state: "Texas",
      country: "USA",
    },
  };

  function myVehicle({ brand, registration: { city } }) {
    const message = "My " + brand + " is registered in " + city + ".";

    console.log(message);
  }

  useEffect(() => {
    myVehicle(vehicleOne);
  }, []);

  const myArray = [
    {
      title: "React",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, quis facilis consequatur quos corrupti id voluptates a, non consequuntur ad soluta exercitationem temporibus expedita maxime totam iste dicta! Ex, enim.",
    },
    {
      title: "VUE",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, quis facilis consequatur quos corrupti id voluptates a, non consequuntur ad soluta exercitationem temporibus expedita maxime totam iste dicta! Ex, enim.",
    },
    {
      title: "Angular",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, quis facilis consequatur quos corrupti id voluptates a, non consequuntur ad soluta exercitationem temporibus expedita maxime totam iste dicta! Ex, enim.",
    },
  ];
  const [myArr, setMyArr] = useState(myArray);

  //   const numberOne = [1, 2, 3, 4, 5];
  //   const numberTwo = [6, 7, 8, 9, 10];
  //   const numberThree = [...numberOne, ...numberTwo];
  //   console.log(numberThree);
  //   const { one, two, ...rest } = numberOne;
  let shoot = (a, event) => {
    alert(a);
    console.log(event);
  };
  let goal = props.isGoal;
  return (
    <>
      {goal ? <Goal /> : <Missed />}
      <h1>Title {props.name.model}</h1>
      <div>
        <ul>
          {myArr.map((item) => {
            const { title } = item;
            return <li key={title}>{title}</li>;
          })}
        </ul>

        <button onClick={(event) => shoot("GOAL", event)}>
          Take the shot!
        </button>
      </div>
    </>
  );
}

export default Es6Component;
