import YoutubeVideoCarousel from "./YoutubeVideoCarousel";
import SubHeading from "./SubHeading";

import classes from "./YoutubeVideoSection.module.css";

const YoutubeVideoSection = () => {
  return (
    <div className={classes.section}>
      <SubHeading title="Related Youtube Videos" />
      <YoutubeVideoCarousel />
    </div>
  );
};

export default YoutubeVideoSection;
