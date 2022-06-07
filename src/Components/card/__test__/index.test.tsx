import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AlbumCard from "..";
import { MetaData } from "../../../types";
import React from "react";

export const mocked_album_photo: MetaData = {
  author_name: "author_name",
  html: "html",
  title: "title",
  type: "photo",
  url: "url",
};

describe("Card", () => {
  it("Display information", () => {
    render(
      <AlbumCard album={mocked_album_photo} index={1} onDelete={jest.fn()} />
    );

    expect(
      screen.getByText(mocked_album_photo.author_name)
    ).toBeInTheDocument();

    expect(screen.getByText(mocked_album_photo.html)).toBeInTheDocument();

    expect(screen.getByText(mocked_album_photo.title)).toBeInTheDocument();

    expect(
      screen.getByText(`URL : ${mocked_album_photo.url}`)
    ).toBeInTheDocument();

    expect(
      screen.queryByTestId("bookmarks.card.video")
    ).not.toBeInTheDocument();
  });
});
