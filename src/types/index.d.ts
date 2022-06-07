type MetaData = {
  url: string;
  title: string;
  author_name: string;
  type: string;
  html: string;
};

export interface VideoMetaData extends MetaData {
  publicationDate: string;
  duration: number;
  html: string;
  video_id: string;
  thumbnail_url_with_play_button: string;
  upload_date: string;
}

export interface ImageMetaData extends MetaData {
  height: number;
  width: number;
}
