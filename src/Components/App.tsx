import * as React from "react";
import "./App.css";
import UseFetchData from "../hooks/UseFetchData";
import { ImageMetaData, VideoMetaData } from "../types";
import Filters from "./common/filters";
import AlbumCard from "./card";
import ErrorBoundary from "./common/error-boundaries";
import { Submit } from "./submit";

type AlbumData = ImageMetaData | VideoMetaData;

export default function App() {
  const [url, setUrl] = React.useState<string>("");
  const [data, setData] = React.useState<AlbumData[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isDev] = React.useState<boolean>(
    process.env.NODE_ENV === "development"
  );

  const isUrlDuplicated = (url: string) => {
    let isDuplicated = false;
    data.forEach((element) => {
      if (element.url === url) {
        isDuplicated = true;
      }
    });
    return isDuplicated;
  };

  const onDeleteElement = (index: number) => {
    setData(data.filter((_element, key) => key !== index));
  };

  const onUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  function HandleSubmit() {
    if (url.length > 0 && !isUrlDuplicated(url)) {
      setIsLoading(true);
      UseFetchData(url).then((response: AlbumData) => {
        setData([...data, response]);
        setIsLoading(false);
      });
    }
  }

  const onUrlSelect = (url: string) => {
    setUrl(url);
  };

  return (
    <div>
      <header className="App-header">
        <h1>My bookmarks : </h1>
        <div className="bar">
          <label>
            URL :
            <input
              type="text"
              name="url"
              onChange={onUrlChange}
              value={url}
              className="Url-input"
              placeholder="Copiez votre URL ici"
            />
          </label>
          <Submit onSubmit={HandleSubmit} isLoading={isLoading} />
        </div>

        <br />
        {isDev && <Filters onClick={onUrlSelect} />}
      </header>

      <div className="App-container">
        {data.map((element, index) => {
          return (
            <ErrorBoundary
              hasError={false}
              onDeleteElement={() => onDeleteElement(index)}
            >
              <AlbumCard
                album={element}
                index={index}
                onDelete={onDeleteElement}
              />
            </ErrorBoundary>
          );
        })}
      </div>
    </div>
  );
}
