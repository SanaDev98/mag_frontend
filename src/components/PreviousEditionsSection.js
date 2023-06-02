import SubHeading from "./SubHeading";
import PreviousEditionsCarousel from "./PreviousEditionsCarousel";

import classes from "./PreviousEditionsSection.module.css";

const PreviousEditionsSection = () => {
  return (
    <div className={classes.section}>
      <SubHeading title="Previous Editions" />
      <PreviousEditionsCarousel />
    </div>
  );
};

export default PreviousEditionsSection;
