import { httpRequest } from "../http-request";
import News from "../models/news";

export const getNews = async (): Promise<News> => {
  const news = await (await httpRequest.get(`/news`)).data;

  return news;
};

export const getNewsById = async (newsId: string) => {
  const news = await (await httpRequest.get(`news/${newsId}`)).data;

  return news;
};
