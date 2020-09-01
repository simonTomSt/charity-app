import React, { useState } from "react";
import "./HomeActivity.scss";
import {
  fundations,
  organizations,
  collections,
} from "../../app/api/sampleOrganizations";

const HomeActivity = () => {
  const [groupType, setGroupType] = useState(fundations);
  const [currPage, setCurrPage] = useState(1);
  const activityItem = groupType.activities.find(({ id }) => id === currPage);

  const handleClick = (type) => {
    switch (type) {
      case "fundations":
        setGroupType(fundations);
        break;
      case "organizations":
        setGroupType(organizations);
        break;
      case "collections":
        setGroupType(collections);
        break;
      default:
        throw new Error("There is no such a type of activity");
    }
  };

  return (
    <section className="activity container" id="who-we-help">
      <h2 className="avctivity__header"> Komu pomagamy?</h2>
      <div className="activity__buttons">
        <button
          className={
            groupType === fundations ? "activity__btn active" : "activity__btn"
          }
          onClick={() => {
            setCurrPage(1);
            handleClick("fundations");
          }}
        >
          Fundacjom
        </button>
        <button
          className={
            groupType === organizations
              ? "activity__btn active"
              : "activity__btn"
          }
          onClick={() => {
            setCurrPage(1);
            handleClick("organizations");
          }}
        >
          Organizacjom pozarządowym
        </button>
        <button
          className={
            groupType === collections ? "activity__btn active" : "activity__btn"
          }
          onClick={() => {
            setCurrPage(1);
            handleClick("collections");
          }}
        >
          Lokalnym zbiórkom
        </button>
      </div>

      <div className="activity__message"> {groupType.message}</div>
      <ul className="activity__list">
        {activityItem.events.map(({ title, text, info }, index) => (
          <li className="activity__item" key={index}>
            <div className="activity__describtion">
              <h3 className="activity__title">
                {groupType.type} <span>“{title}” </span>
              </h3>
              <p className="activity__text">
                Cel i misja: <span> {text} </span>
              </p>
            </div>
            <p className="activity__info">{info}</p>
          </li>
        ))}
      </ul>
      <div className="activity__numbers">
        {groupType.activities.length > 1 &&
          groupType.activities.map(({ id }) => (
            <button
              className={
                id === currPage ? " activity__btn active" : "activity__btn"
              }
              key={id}
              onClick={() => {
                setCurrPage(id);
              }}
            >
              {id}
            </button>
          ))}
      </div>
    </section>
  );
};

export default HomeActivity;
