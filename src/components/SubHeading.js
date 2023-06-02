import classes from "./SubHeading.module.css";

const SubHeading = ({ title }) => {
  return <h4 className={classes.subHeading}>{title}</h4>;
};

export default SubHeading;
