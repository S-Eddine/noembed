import { ImageMetaData } from "../types";

export default async function UseFetchData(url: string): Promise<any> {
  const headers = { "content-type": "application/json" };
  const option = {
    method: "POST",
    headers,
  };
  console.log("SEA env ", process.env.REACT_APP_NOEMBED);

  const response = await fetch(
    `${process.env.REACT_APP_NOEMBED}/embed?url=${url}`,
    option
  );

  if (response.ok) {
    const resp: any = await response.json();
    return resp as ImageMetaData;
  } else {
    return { error: "the request failed" };
  }
}
