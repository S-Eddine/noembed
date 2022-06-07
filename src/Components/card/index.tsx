import { ImageMetaData, MetaData, VideoMetaData } from "../../types";
import ErrorBoundary from "../common/error-boundaries";
import "./UI.css";
import links from "./../../constants";
import { formatDate, getDuration, getUploadTime } from "./helper";
import React from "react";

type AlbumCardProps = {
  album: MetaData;
  index: number;
  onDelete: (index: number) => void;
};

export default function AlbumCard({
  album: Album,
  onDelete,
  index,
}: AlbumCardProps) {
  const handleDelete = () => {
    onDelete(index);
  };
  if (Album.type === "photo" && Album.url === links.FLICKS_PHOTO[2])
    throw new Error();

  return (
    <div className="container" key={index}>
      <div
        className={`card ${Album.type === "photo" ? "img-card" : "video-card"}`}
      >
        <div className="card-header">
          <div dangerouslySetInnerHTML={{ __html: Album.html }} />
        </div>
        <div className="card-body">
          <span className="tags">
            <span className="tag tag-teal">{Album.author_name}</span>
            <span className="tag delete" onClick={handleDelete}>
              delete
            </span>
          </span>
          <h3>{Album.title}</h3>
          <p>URL : {Album.url}</p>
          <ErrorBoundary
            hasError={false}
            message={"Oups, this information are not available for the moment."}
          >
            {Album.type === "video" ? (
              <div data-testid="bookmarks.card.video">
                <p>
                  Date d'ajout :{" "}
                  {getUploadTime((Album as VideoMetaData).upload_date)}
                </p>
                <p>Durée : {getDuration((Album as VideoMetaData).duration)}</p>
                <p>
                  Date de publication :{" "}
                  {formatDate((Album as VideoMetaData).upload_date)}
                </p>
              </div>
            ) : (
              <p className="size">
                {(Album as ImageMetaData).height} x{" "}
                {(Album as ImageMetaData).width}
              </p>
            )}
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}
