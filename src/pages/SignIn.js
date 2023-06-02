import classes from "./SignIn.module.css";

const SignIn = () => {
  return (
    <div className={classes.page}>
      <div className={classes.centerDiv}>
        <h2 className={classes.signIn}>Sign in</h2>
        <p className={classes.tagline}>
          Sign in and start managing your magazine
        </p>
        <div className={classes.inputDiv}>
          <input
            type="text"
            className={classes.userName}
            placeholder="User Name"
          />
        </div>
        <div className={classes.inputDiv}>
          <input
            type="password"
            className={classes.password}
            placeholder="Password"
          />
        </div>
        <div className={classes.checkDiv}>
          <div className={classes.checkInnerDiv}>
            <input type="checkbox" value="" className={classes.checkBox} />
            <p className={classes.label}>Remember Me</p>
          </div>
        </div>
        <button className={classes.btn}>
          <p className={classes.btnText}>Login</p>
        </button>
      </div>
    </div>
  );
};

export default SignIn;
