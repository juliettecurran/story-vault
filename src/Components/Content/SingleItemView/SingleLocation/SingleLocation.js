import React from "react";
import { useParams } from "react-router-dom";
import { useLocationStore } from "../../../../Provider/LocationStoreProvider";
import "./singleLocation.css";

const SingleLocation = () => {
  const params = useParams();
  const id = params.location_id;
  const { locationById } = useLocationStore();
  const mySingleLocation = locationById(id);
  return (
    <div className="singleLocation__container">
      <img
        className="singleLocation__image"
        src={`${mySingleLocation.locationImage}`}
        alt=""
      ></img>
      <table className="singleLocation__table">
        <thead></thead>
        <tbody>
          <tr>
            <td className="singleLocation__label">Name</td>
            <td className="singleLocation__value">{mySingleLocation.name}</td>
          </tr>
          <tr>
            <td className="singleLocation__label">Demonym</td>
            <td className="singleLocation__value">
              {mySingleLocation.demonym}
            </td>
          </tr>
          <tr>
            <td className="singleLocation__label">Size</td>
            <td className="singleLocation__value">{mySingleLocation.size}</td>
          </tr>
          <tr>
            <td className="singleLocation__label">Ruler</td>
            <td className="singleLocation__value">{mySingleLocation.ruler}</td>
          </tr>
          <tr>
            <td className="singleLocation__label">Population</td>
            <td className="singleLocation__value">
              {mySingleLocation.population}
            </td>
          </tr>
          <tr>
            <td className="singleLocation__label">Geography</td>
            <td className="singleLocation__value">
              {mySingleLocation.geography}
            </td>
          </tr>
          <tr>
            <td className="singleLocation__label">Cultural Trait</td>
            <td className="singleLocation__value">
              {mySingleLocation.culturalTrait}
            </td>
          </tr>
          <tr>
            <td className="singleLocation__label">Dominant Religion</td>
            <td className="singleLocation__value">
              {mySingleLocation.dominantReligion}
            </td>
          </tr>
          <tr>
            <td className="singleLocation__label">Language</td>
            <td className="singleLocation__value">
              {mySingleLocation.language}
            </td>
          </tr>
          <tr>
            <td className="singleLocation__label">Symbol</td>
            <td className="singleLocation__value">{mySingleLocation.symbol}</td>
          </tr>
          {/* <tr>
            <td className="singleLocation__label">Citizens</td>
            <td className="singleLocation__value">
              {mySingleLocation.citizens.map((citizen, i) => {
                const { name } = citizen;
                return <li key={i}>{name}</li>;
              })}
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default SingleLocation;
