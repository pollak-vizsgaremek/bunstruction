import { useState } from "react";
import classes from "./AuthForm.module.css";

function AuthForm(/*{ Title = "h2" }*/) {
  const [active, setActive] = useState("login");
  // const [mode, setMode] = useState("login"); // "login" | "register"
  // const isLogin = mode === "login";

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const data = Object.fromEntries(new FormData(event.currentTarget));
  //   console.log(mode, data); // később: fetch a backendre
  // }

  return (
    <div className={classes.container}>
      <div className={classes.buttons}>
        <button
          type="button"
          className={`${classes.logButton} ${active === "login" ? classes.selectedButton : null}`}
          onClick={() => setActive("login")}
        >
          <span
            className={`${classes.dot} ${active === "login" ? classes.selectedDot : null}`}
          ></span>
          Bejelentkezés
        </button>
        <button
          type="button"
          className={`${classes.regButton} ${active === "register" ? classes.selectedButton : null}`}
          onClick={() => setActive("register")}
        >
          <span
            className={`${classes.dot} ${active === "register" ? classes.selectedDot : null}`}
          ></span>
          Regisztráció
        </button>
      </div>
      {active === "login" ? (
        // LOGIN
        <div>
          <p>LOGIN</p>
        </div>
      ) : (
        // REGISTER
        <div>
          <p>REGISTER</p>
        </div>
      )}
    </div>
  );
}

export default AuthForm;
