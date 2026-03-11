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

  return (
    <div className="container mt-5">
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img
            src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/${type}/${uid}.jpg`}
            className="img-fluid"
            alt={item.properties.name}
            onError={(e) => {
              e.target.src =
                "https://starwars-visualguide.com/assets/img/placeholder.jpg";
            }}
          />
        </div>

        <div className="col-md-6 text-center">
          <h1 className="mb-4">{item.properties.name}</h1>

          <p className="fs-4">
            This section shows more detailed information about this{" "}
            {type === "people"
              ? "character"
              : type === "planets"
              ? "planet"
              : "vehicle"}{" "}
            from Star Wars.
          </p>
        </div> 
      </div>

      <hr className="border border-danger border-2 opacity-100" />

      <div className="row text-center text-danger mt-4">
        {type === "people" && (
          <>
            <div className="col">
              <h4>Name</h4>
              <p>{item.properties.name}</p>
            </div>
            <div className="col">
              <h4>Birth Year</h4>
              <p>{item.properties.birth_year}</p>
            </div>
            <div className="col">
              <h4>Gender</h4>
              <p>{item.properties.gender}</p>
            </div>
            <div className="col">
              <h4>Height</h4>
              <p>{item.properties.height}</p>
            </div>
            <div className="col">
              <h4>Skin Color</h4>
              <p>{item.properties.skin_color}</p>
            </div>
            <div className="col">
              <h4>Eye Color</h4>
              <p>{item.properties.eye_color}</p>
            </div>
          </>
        )}

        {type === "planets" && (
          <>
            <div className="col">
              <h4>Name</h4>
              <p>{item.properties.name}</p>
            </div>
            <div className="col">
              <h4>Climate</h4>
              <p>{item.properties.climate}</p>
            </div>
            <div className="col">
              <h4>Population</h4>
              <p>{item.properties.population}</p>
            </div>
            <div className="col">
              <h4>Orbital Period</h4>
              <p>{item.properties.orbital_period}</p>
            </div>
            <div className="col">
              <h4>Rotation Period</h4>
              <p>{item.properties.rotation_period}</p>
            </div>
            <div className="col">
              <h4>Diameter</h4>
              <p>{item.properties.diameter}</p>
            </div>
          </>
        )}

        {type === "vehicles" && (
          <>
            <div className="col">
              <h4>Name</h4>
              <p>{item.properties.name}</p>
            </div>
            <div className="col">
              <h4>Model</h4>
              <p>{item.properties.model}</p>
            </div>
            <div className="col">
              <h4>Passengers</h4>
              <p>{item.properties.passengers}</p>
            </div>
            <div className="col">
              <h4>Vehicle Class</h4>
              <p>{item.properties.vehicle_class}</p>
            </div>
            <div className="col">
              <h4>Manufacturer</h4>
              <p>{item.properties.manufacturer}</p>
            </div>
            <div className="col">
              <h4>Cost</h4>
              <p>{item.properties.cost_in_credits}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};