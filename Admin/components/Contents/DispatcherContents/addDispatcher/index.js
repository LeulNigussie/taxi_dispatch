import React, { useEffect, useState, useRef } from "react";
import classes from "./main.module.css";
import { DataUsage } from "@material-ui/icons";
import { Button } from "@material-ui/core";

import Image from "next/image";
import loading from "../../../icons/loading.gif";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import dynamic from "next/dynamic";
const Map = dynamic(() => import("../../../Map"));

export default function index() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(38.7595);
  const [lat, setLat] = useState(9.0234);
  const [zoom, setZoom] = useState(14.3);

  const image = useRef();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const [passwordError, setPasswordError] = useState("");
  const [conPasswordError, setConPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [addressError, setAddressError] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const [showLoading, changeLoadingStatus] = useState(false);
  const [imageStatus, ChangeImageStatus] = useState(true);

  const passwordValidator = (password) => {
    var strongRegex = new RegExp(
      "^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})"
    );
    const conditions = strongRegex.test(password);
    return conditions;
  };
  const validateEmail = (email) => {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  const formValidator = (Name) => {
    if (Name.length === 0) {
      return false;
    } else {
      return true;
    }
  };
  const phoneValidator = (phone) => {
    const regEx = "^[09][0-9]{8}$";
    let correctBeginning = phone.startsWith("09");
    let correctLength = phone.length === 10;

    if (correctBeginning && correctLength) {
      return true;
    } else {
      return false;
    }
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (password !== conPassword) {
      setConPasswordError("Password should be similar");
      setTimeout(() => {
        setConPasswordError("");
      }, 6000);
    } else if (!passwordValidator(password)) {
      setPasswordError(
        "Password Should contains letter, number & character and minimum of length 6"
      );
      setTimeout(() => {
        setPasswordError("");
      }, 6000);
    } else if (!formValidator(address)) {
      setAddressError("Please fill in the address");
      setTimeout(() => {
        setAddressError("");
      }, 6000);
    } else if (!validateEmail) {
      setEmailError("Incorrect email format");
      setTimeout(() => {
        setEmailError("");
      }, 6000);
    } else if (!formValidator(firstName)) {
      setFirstNameError("First Name shouldn't be empty");
      setTimeout(() => {
        setFirstNameError("");
      }, 6000);
    } else if (!formValidator(lastName)) {
      setLastNameError("Last Name shouldn't be empty");
      setTimeout(() => {
        setLastNameError("");
      }, 6000);
    } else if (!phoneValidator(phoneNumber)) {
      setPhoneError("Incorrect Phone Number format");
      setTimeout(() => {
        setPhoneError("");
      }, 6000);
    } else {
      changeLoadingStatus(true);
      const name = firstName + " " + lastName;
      // const imagePath = document.getElementById("raised-button-file").files[0].name;

      // document.getElementById('file-id').value

      const reqBody = {
        name: name,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
        profileImage: image.current.value,
        address: address,
      };

      fetch("/api/dispatchers", {
        method: "POST",
        body: JSON.stringify(reqBody),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.stat === "OK") {
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setConPassword("");
            setPhoneNumber("");
            setAddress("");
            map.current.setLng(38.7595);
            map.current.setLng(9.0234);
          }
          changeLoadingStatus(false);
        })
        .catch((error) => {
          changeLoadingStatus(false);
        });
    }
  };
  const saveAddress = (placeName) => {
    setAddress(placeName);
  };

  return (
    <div className={classes.mainContent}>
      <div className={classes.titleDivision}>
        <p className={classes.labler}>Adding New Dispatcher</p>
      </div>
      <div className={classes.otherDivision}>
        <div className={classes.formDiv}>
          <div className={classes.titleDivisions}>
            <div className={classes.insider}></div>
            <div className={classes.titleIcon}>
              <DataUsage />
            </div>
            <p className={classes.title}>Adding Dispatcher</p>
          </div>
          <form onSubmit={submitFormHandler} className={classes.form}>
            <div className={classes.formControl}>
              <label className={classes.label} htmlFor="firstName">
                First Name:{" "}
                <span className={classes.alert}>* {firstNameError}</span>
              </label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={classes.input}
                type="text"
                id="firstName"
                required
              />
            </div>
            <div className={classes.formControl}>
              <label className={classes.label} htmlFor="lastName">
                Last Name:{" "}
                <span className={classes.alert}>* {lastNameError}</span>
              </label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={classes.input}
                type="text"
                id="lastName"
                required
              />
            </div>
            <div className={classes.formControl}>
              <label className={classes.label} htmlFor="email">
                Email: <span className={classes.alert}>* {emailError}</span>
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={classes.input}
                type="email"
                id="email"
                required
              />
            </div>
            <div className={classes.formControl}>
              <label className={classes.label} htmlFor="password">
                Password:{" "}
                <span className={classes.alert}>* {passwordError}</span>
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={classes.input}
                type="password"
                id="password"
                required
              />
            </div>
            <div className={classes.formControl}>
              <label className={classes.label} htmlFor="conPassword">
                Confirm Password:{" "}
                <span className={classes.alert}>* {conPasswordError}</span>
              </label>
              <input
                value={conPassword}
                onChange={(e) => setConPassword(e.target.value)}
                className={classes.input}
                type="password"
                id="conPassword"
                required
              />
            </div>
            <div height="300px" className={classes.formControls}>
              <label className={classes.label} htmlFor="profileImage">
                profile Image:
              </label>

              {/* <input ref={image} className={classes.input} type="file" id='upload' /> */}
              <div height="300px" className={classes.inputDivision}>
                <input
                  accept="image/*"
                  className={classes.inputer}
                  style={{ display: "none", height: "300px" }}
                  id="raised-button-file"
                  multiple
                  type="file"
                  ref={image}
                />
                <label
                  height="300px"
                  className={classes.uploadLabel}
                  htmlFor="raised-button-file"
                >
                  <Button
                    style={{ padding: "100px", height: "300px" }}
                    variant="raised"
                    component="span"
                    className={classes.buttoner}
                  >
                    <CloudUploadIcon
                      style={{ transform: "scale(8.0)" }}
                      width="200px"
                    />
                  </Button>
                </label>
              </div>
            </div>

            <div className={classes.formControl}>
              <label className={classes.label} htmlFor="phoneNumber">
                Phone Number:{" "}
                <span className={classes.alert}>* {phoneError}</span>
              </label>
              <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className={classes.input}
                type="text"
                id="phoneNumber"
                required
              />
            </div>
            <div className={classes.formControl}>
              <label className={classes.label} htmlFor="adress">
                Address: <span className={classes.alert}>* {addressError}</span>
              </label>
              <div className="mapDivision">
                <Map onSettingPlace={saveAddress} />
              </div>
            </div>
            <div className={classes.loadingImage}>
              {showLoading && <Image src={loading} />}
            </div>
            <div className={classes.buttons}>
              <button type="submit" className={classes.save}>
                Save
              </button>
              <button type="reset" className={classes.save}>
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
