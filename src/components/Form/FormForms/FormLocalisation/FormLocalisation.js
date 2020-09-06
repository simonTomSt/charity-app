import React, { useState, useEffect } from "react";
import "./FormLocalisation.scss";
import arrowDown from "../../../../assets/Icon-Arrow-Down.svg";
import arrowUp from "../../../../assets/Icon-Arrow-Up.svg";

const FormLocalisation = ({
  place,
  setplace,
  groupType,
  setgroupType,
  directPlace,
  setdirectPlace,
  setStep,
}) => {
  const [opened, setopened] = useState(false);
  const [locAlert, setlocAlert] = useState(false);
  const [groupAlert, setgroupAlert] = useState(false);

  const handleDirectPlace = (e) => {
    setdirectPlace(e.target.value);
  };

  const handleNext = () => {
    if (place === "wybierz" && !directPlace) {
      setlocAlert(true);
    }
    if (groupType.length === 0) {
      setgroupAlert(true);
    } else if ((place !== "wybierz" || directPlace) && groupType.length > 0) {
      setStep((prevState) => prevState + 1);
    }
  };
  const handleSelectItem = (e) => {
    setplace(e.target.id);
  };
  const handleClickedGroup = (e) => {
    const { id } = e.target;
    if (groupType.includes(id)) {
      setgroupType((prevState) => prevState.filter((group) => group !== id));
    } else {
      setgroupType((prevState) => [...prevState, id]);
    }
  };

  useEffect(() => {
    document
      .querySelectorAll(".localisation__groups li")
      .forEach((group) =>
        groupType.includes(group.id)
          ? (group.className = "selected")
          : (group.className = null)
      );
  }, [groupType]);

  return (
    <>
      <article className="main__warning">
        <div className="container">
          <h3 className="main__header">Ważne!</h3>
          <p className="main__warning-message">
            Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w
            wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji
            bądź celu ich pomocy.
          </p>
        </div>
      </article>
      <div className="main__screen">
        <div className="container">
          <p className="main__number">krok 3/4</p>
          <h3 className="main__header">Lokalizacja:</h3>

          <form
            className="main__form localisation"
            onSubmit={(e) => e.preventDefault()}
          >
            <label>
              <div
                className="custom-select"
                onClick={() => setopened((prevState) => !prevState)}
              >
                <p> {place} </p>
                {!opened ? (
                  <img src={arrowDown} alt="select down" />
                ) : (
                  <img src={arrowUp} alt="select up" />
                )}

                {opened && (
                  <ul>
                    <li onClick={handleSelectItem} id="Poznań">
                      Poznań
                    </li>
                    <li onClick={handleSelectItem} id="Warszawa">
                      Warszawa
                    </li>
                    <li onClick={handleSelectItem} id="Kraków">
                      Kraków
                    </li>
                    <li onClick={handleSelectItem} id="Wrocław">
                      Wrocław
                    </li>
                    <li onClick={handleSelectItem} id="Katowice">
                      Katowice
                    </li>
                  </ul>
                )}
              </div>
              {locAlert && <p className="main__alert "> Wybierz miasto! </p>}
            </label>
            <h4 className="localisation__title"> Komu chcesz pomóc? </h4>
            <ul className="localisation__groups">
              <li onClick={handleClickedGroup} id="dzieciom">
                dzieciom
              </li>
              <li onClick={handleClickedGroup} id="samotnym matkom">
                samotnym matkom
              </li>
              <li onClick={handleClickedGroup} id="bezdomnym">
                bezdomnym
              </li>
              <li onClick={handleClickedGroup} id="niepełnosprawnym">
                niepełnosprawnym
              </li>
              <li onClick={handleClickedGroup} id="osobom starszym">
                osobom starszym
              </li>
            </ul>
            {groupAlert && (
              <p className="main__alert "> Wybierz komu chcesz pomóc! </p>
            )}
            <label>
              <h4
                className="localisation__title"
                style={{ margin: " 50px 0 30px" }}
              >
                {" "}
                Wpisz nazwę konkretnej organizacji (opcjonalnie){" "}
              </h4>
              <input
                type="text"
                name="direct-place"
                value={directPlace}
                onChange={handleDirectPlace}
              />
            </label>
          </form>
        </div>
        <div className="main__buttons container">
          <button
            className="primary-btn"
            onClick={() => setStep((prevState) => prevState - 1)}
          >
            Wstecz
          </button>
          <button className="primary-btn" onClick={handleNext}>
            Dalej
          </button>
        </div>
      </div>
    </>
  );
};

export default FormLocalisation;
