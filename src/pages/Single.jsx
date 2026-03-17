import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Single = () => {
  const { type, uid } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const getSingleItem = async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/${type}/${uid}`);
        const data = await response.json();
        setItem(data.result);
      } catch (error) {
        console.log(error);
      }
    };

    getSingleItem();
  }, [type, uid]);

  if (!item) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  const props = item.properties;

  return (
    <div className="container mt-5">
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img
            src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/${type}/${uid}.jpg`}
            className="img-fluid"
            alt={props.name}
            onError={(e) => {
              e.target.src =
                "https://starwars-visualguide.com/assets/img/placeholder.jpg";
            }}
          />
        </div>

        <div className="col-md-6 text-center">
          <h1 className="mb-4">{props.name}</h1>

          <p className="fs-4">
            {type === "people" &&
              `${props.name} is a ${props.gender} character from the Star Wars universe. This character was born in ${props.birth_year}, has a height of ${props.height} cm, with ${props.skin_color} skin and ${props.eye_color} eyes.`}

            {type === "planets" &&
              `${props.name} is a planet from the Star Wars universe. It has a climate of ${props.climate}, a population of ${props.population}, an orbital period of ${props.orbital_period}, a rotation period of ${props.rotation_period}, and a diameter of ${props.diameter}.`}

            {type === "vehicles" &&
              `${props.name} is a vehicle from the Star Wars universe. Its model is ${props.model}, built by ${props.manufacturer}, with capacity for ${props.passengers} passengers, and belongs to the ${props.vehicle_class} class. Its cost is ${props.cost_in_credits} credits.`}
          </p>
        </div>
      </div>

      <hr className="border border-danger border-2 opacity-100" />

      <div className="row text-center text-danger mt-4">
        {type === "people" && (
          <>
            <div className="col">
              <h4>Name</h4>
              <p>{props.name}</p>
            </div>
            <div className="col">
              <h4>Birth Year</h4>
              <p>{props.birth_year}</p>
            </div>
            <div className="col">
              <h4>Gender</h4>
              <p>{props.gender}</p>
            </div>
            <div className="col">
              <h4>Height</h4>
              <p>{props.height}</p>
            </div>
            <div className="col">
              <h4>Skin Color</h4>
              <p>{props.skin_color}</p>
            </div>
            <div className="col">
              <h4>Eye Color</h4>
              <p>{props.eye_color}</p>
            </div>
          </>
        )}

        {type === "planets" && (
          <>
            <div className="col">
              <h4>Name</h4>
              <p>{props.name}</p>
            </div>
            <div className="col">
              <h4>Climate</h4>
              <p>{props.climate}</p>
            </div>
            <div className="col">
              <h4>Population</h4>
              <p>{props.population}</p>
            </div>
            <div className="col">
              <h4>Orbital Period</h4>
              <p>{props.orbital_period}</p>
            </div>
            <div className="col">
              <h4>Rotation Period</h4>
              <p>{props.rotation_period}</p>
            </div>
            <div className="col">
              <h4>Diameter</h4>
              <p>{props.diameter}</p>
            </div>
          </>
        )}

        {type === "vehicles" && (
          <>
            <div className="col">
              <h4>Name</h4>
              <p>{props.name}</p>
            </div>
            <div className="col">
              <h4>Model</h4>
              <p>{props.model}</p>
            </div>
            <div className="col">
              <h4>Passengers</h4>
              <p>{props.passengers}</p>
            </div>
            <div className="col">
              <h4>Vehicle Class</h4>
              <p>{props.vehicle_class}</p>
            </div>
            <div className="col">
              <h4>Manufacturer</h4>
              <p>{props.manufacturer}</p>
            </div>
            <div className="col">
              <h4>Cost</h4>
              <p>{props.cost_in_credits}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};