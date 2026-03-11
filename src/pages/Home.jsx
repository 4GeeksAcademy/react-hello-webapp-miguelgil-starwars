import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Home = () => {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const { actions } = useGlobalReducer();

  useEffect(() => {
    const getPeople = async () => {
      try {
        const response = await fetch("https://www.swapi.tech/api/people");
        const data = await response.json();

        const detailedPeople = [];

        for (let i = 0; i < 6; i++) {
          const person = data.results[i];

          const detailResponse = await fetch(person.url);
          const detailData = await detailResponse.json();

          detailedPeople.push({
            ...person,
            properties: detailData.result.properties
          });
        }

        setPeople(detailedPeople);
      } catch (error) {
        console.log(error);
      }
    };

    const getPlanets = async () => {
      try {
        const response = await fetch("https://www.swapi.tech/api/planets");
        const data = await response.json();

        const detailedPlanets = [];

        for (let i = 0; i < 6; i++) {
          const planet = data.results[i];

          const detailResponse = await fetch(planet.url);
          const detailData = await detailResponse.json();

          detailedPlanets.push({
            ...planet,
            properties: detailData.result.properties
          });
        }

        setPlanets(detailedPlanets);
      } catch (error) {
        console.log(error);
      }
    };

    const getVehicles = async () => {
      try {
        const response = await fetch("https://www.swapi.tech/api/vehicles");
        const data = await response.json();

        const detailedVehicles = [];

        for (let i = 0; i < 6; i++) {
          const vehicle = data.results[i];

          const detailResponse = await fetch(vehicle.url);
          const detailData = await detailResponse.json();

          detailedVehicles.push({
            ...vehicle,
            properties: detailData.result.properties
          });
        }

        setVehicles(detailedVehicles);
      } catch (error) {
        console.log(error);
      }
    };

    getPeople();
    getPlanets();
    getVehicles();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-danger mb-3">People</h2>
      <div className="d-flex overflow-auto gap-3 mb-5">
        {people.map((person) => (
          <div className="card" style={{ minWidth: "22rem" }} key={person.uid}>
            <img
              src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${person.uid}.jpg`}
              className="card-img-top"
              alt={person.name}
              onError={(e) => {
                e.target.src =
                  "https://starwars-visualguide.com/assets/img/placeholder.jpg";
              }}
            />
            <div className="card-body">
              <h5 className="card-title">{person.name}</h5>
              <p className="card-text mb-1">Gender: {person.properties?.gender}</p>
              <p className="card-text mb-1">Hair Color: {person.properties?.hair_color}</p>
              <p className="card-text mb-3">Eye-Color: {person.properties?.eye_color}</p>

              <div className="d-flex justify-content-between">
                <Link to={`/single/people/${person.uid}`}>
                  <button className="btn btn-primary">Learn more</button>
                </Link>

                <button
                  className="btn btn-warning"
                  onClick={() => actions.addFavorite(person.name)}
                >
                  ♥
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-danger mb-3">Planets</h2>
      <div className="d-flex overflow-auto gap-3 mb-5">
        {planets.map((planet) => (
          <div className="card" style={{ minWidth: "22rem" }} key={planet.uid}>
            <img
              src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/planets/${planet.uid}.jpg`}
              className="card-img-top"
              alt={planet.name}
              onError={(e) => {
                e.target.src =
                  "https://starwars-visualguide.com/assets/img/placeholder.jpg";
              }}
            />
            <div className="card-body">
              <h5 className="card-title">{planet.name}</h5>
              <p className="card-text mb-1">Climate: {planet.properties?.climate}</p>
              <p className="card-text mb-1">Terrain: {planet.properties?.terrain}</p>
              <p className="card-text mb-3">Population: {planet.properties?.population}</p>

              <div className="d-flex justify-content-between">
                <Link to={`/single/planets/${planet.uid}`}>
                  <button className="btn btn-primary">Learn more</button>
                </Link>

                <button
                  className="btn btn-warning"
                  onClick={() => actions.addFavorite(planet.name)}
                >
                  ♥
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-danger mb-3">Vehicles</h2>
      <div className="d-flex overflow-auto gap-3 mb-5">
        {vehicles.map((vehicle) => (
          <div className="card" style={{ minWidth: "22rem" }} key={vehicle.uid}>
            <img
              src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/vehicles/${vehicle.uid}.jpg`}
              className="card-img-top"
              alt={vehicle.name}
              onError={(e) => {
                e.target.src =
                  "https://starwars-visualguide.com/assets/img/placeholder.jpg";
              }}
            />
            <div className="card-body">
              <h5 className="card-title">{vehicle.name}</h5>
              <p className="card-text mb-1">Model: {vehicle.properties?.model}</p>
              <p className="card-text mb-1">Passengers: {vehicle.properties?.passengers}</p>
              <p className="card-text mb-3">Class: {vehicle.properties?.vehicle_class}</p>

              <div className="d-flex justify-content-between">
                <Link to={`/single/vehicles/${vehicle.uid}`}>
                  <button className="btn btn-primary">Learn more</button>
                </Link>

                <button
                  className="btn btn-warning"
                  onClick={() => actions.addFavorite(vehicle.name)}
                >
                  ♥
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};