import { ChangeEvent } from "react";
import "./UI.css";
import links from "./../../../constants";

type FiltersProps = {
  onClick: (url: string) => void;
};

const Filters = ({ onClick }: FiltersProps) => {
  const videos = links.VIMEO_VIDEO;

  const photos = links.FLICKS_PHOTO;

  const onSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    onClick(event.target.value);
  };

  return (
    <div className="Filter-container">
      <label htmlFor="pet-select">Choose a link:</label>

      <select name="pets" id="pet-select" onChange={onSelect} className="label">
        <option value="" disabled>
          - - Vimeo - -
        </option>
        {videos.map((videoLink, index) => (
          <option value={videoLink} key={index}>{`video ${index}`}</option>
        ))}
        <option value="" disabled>
          - - Flickr --
        </option>
        {photos.map((photoLink, index) => (
          <option value={photoLink} key={index}>{`image ${
            index !== 2 ? index : "error"
          }`}</option>
        ))}
      </select>
    </div>
  );
};
export default Filters;
