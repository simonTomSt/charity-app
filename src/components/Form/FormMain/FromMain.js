import React, { useState } from "react";
import "./FormMain.scss";
import FormDonation from "../FormForms/FormDonation/FormDonation";
import FormAmount from "../FormForms/FormAmount/FormAmount";
import FormLocalisation from "../FormForms/FormLocalisation/FormLocalisation";
import FormConsignor from "../FormForms/FormConsignor/FormConsignor";
import FormSummary from "../FormForms/FormSummary/FormSummary";
import FormGreetings from "../FormForms/FormGreetings/FormGreetings";

const FromMain = () => {
  const [currStep, setcurrStep] = useState(1);
  const [typeDonation, settypeDonation] = useState(null);
  const [amount, setamount] = useState("wybierz");
  const [place, setplace] = useState("wybierz");
  const [groupType, setgroupType] = useState([]);
  const [directPlace, setdirectPlace] = useState("");

  const [consignor, setconsignor] = useState({
    street: "",
    city: "",
    postcode: "",
    phone: "",
    date: "",
    time: "",
    comment: "",
  });

  const renderSwitch = (param) => {
    switch (param) {
      case 1:
        return (
          <FormDonation
            typeDonation={typeDonation}
            setType={settypeDonation}
            setStep={setcurrStep}
          />
        );
      case 2:
        return (
          <FormAmount
            amount={amount}
            setAmount={setamount}
            setStep={setcurrStep}
          />
        );
      case 3:
        return (
          <FormLocalisation
            place={place}
            setplace={setplace}
            groupType={groupType}
            setgroupType={setgroupType}
            directPlace={directPlace}
            setdirectPlace={setdirectPlace}
            setStep={setcurrStep}
          />
        );
      case 4:
        return (
          <FormConsignor
            setStep={setcurrStep}
            setconsignor={setconsignor}
            consignor={consignor}
          />
        );
      case 5:
        return (
          <FormSummary
            setStep={setcurrStep}
            typeDonation={typeDonation}
            amount={amount}
            place={place}
            groupType={groupType}
            directPlace={directPlace}
            consignor={consignor}
            settypeDonation={settypeDonation}
            setamount={setamount}
            setplace={setplace}
            setgroupType={setgroupType}
            setdirectPlace={setdirectPlace}
            setconsignor={setconsignor}
          />
        );
      case 6:
        return <FormGreetings setStep={setcurrStep} />;
      default:
        throw new Error("There is no such a form");
    }
  };

  return <section className="main">{renderSwitch(currStep)}</section>;
};

export default FromMain;
