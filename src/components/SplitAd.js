import classes from "./SplitAd.module.css";

const SplitAd = ({imgLocation}) => {
  return (
    <div className={classes.splitAd}>
      <img src={imgLocation} alt="advertisement" className="adImg" />
    </div>
  );
};

export default SplitAd;
