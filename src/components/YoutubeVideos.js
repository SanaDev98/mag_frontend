import classes from "./YoutubeVideos.module.css";

const YoutubeVideos = ({ embedId }) => {
  return (
    <div className={classes.videoDiv}>
      <iframe
        width="250"
        height="150"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default YoutubeVideos;
