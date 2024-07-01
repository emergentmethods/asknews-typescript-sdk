/* tslint:disable */
/* eslint-disable */
import * as runtime from "../runtime";
import { AnalyticsApi } from "./AnalyticsApi";
export * from './AnalyticsApi';
import { ChatApi } from "./ChatApi";
export * from './ChatApi';
import { ForecastApi } from "./ForecastApi";
export * from './ForecastApi';
import { NewsApi } from "./NewsApi";
export * from './NewsApi';
import { PingApi } from "./PingApi";
export * from './PingApi';
import { RedditApi } from "./RedditApi";
export * from './RedditApi';
import { StoriesApi } from "./StoriesApi";
export * from './StoriesApi';

export class AskNewsSDK {
  protected configuration: runtime.Configuration;
  protected analytics: AnalyticsApi;
  protected chat: ChatApi;
  protected forecast: ForecastApi;
  protected news: NewsApi;
  protected ping: PingApi;
  protected reddit: RedditApi;
  protected stories: StoriesApi;

  constructor(
    _configuration:
      | runtime.Configuration
      | { [key: string]: string | string[] } = runtime.DefaultConfig,
  ) {
    if (!(_configuration instanceof runtime.Configuration)) {
      _configuration = new runtime.Configuration(_configuration);
    }
    this.configuration = _configuration;
    this.analytics = new AnalyticsApi(_configuration);
    this.chat = new ChatApi(_configuration);
    this.forecast = new ForecastApi(_configuration);
    this.news = new NewsApi(_configuration);
    this.ping = new PingApi(_configuration);
    this.reddit = new RedditApi(_configuration);
    this.stories = new StoriesApi(_configuration);
  }
}
