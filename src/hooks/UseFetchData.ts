import { ImageMetaData } from "../types";

export default async function UseFetchData(url: string): Promise<any> {
  const headers = { "content-type": "application/json" };
  const option = {
    method: "POST",
    headers,
  };

  const response = await fetch(
    `${process.env.REACT_APP_NOEMBED}/embed?url=${url}`,
    option
  );

  if (response.ok) {
    const resp: any = await response.json();
    return resp as ImageMetaData;
  }
  return { error: "the request failed" };
}
