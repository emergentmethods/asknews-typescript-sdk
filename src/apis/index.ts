/* tslint:disable */
/* eslint-disable */
import * as runtime from "../runtime";
import { AnalyticsApi } from "./AnalyticsApi";
export * from './AnalyticsApi';
import { ChatApi } from "./ChatApi";
export * from './ChatApi';
import { ForecastApi } from "./ForecastApi";
export * from './ForecastApi';
import { GraphApi } from "./GraphApi";
export * from './GraphApi';
import { NewsApi } from "./NewsApi";
export * from './NewsApi';
import { PingApi } from "./PingApi";
export * from './PingApi';
import { RedditApi } from "./RedditApi";
export * from './RedditApi';
import { StoriesApi } from "./StoriesApi";
export * from './StoriesApi';
import { WebsearchApi } from "./WebsearchApi";
export * from './WebsearchApi';

export class AskNewsSDK {
  protected configuration: runtime.Configuration;
  public analytics: AnalyticsApi;
  public chat: ChatApi;
  public forecast: ForecastApi;
  public graph: GraphApi;
  public news: NewsApi;
  public ping: PingApi;
  public reddit: RedditApi;
  public stories: StoriesApi;
  public websearch: WebsearchApi;

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
    this.graph = new GraphApi(_configuration);
    this.news = new NewsApi(_configuration);
    this.ping = new PingApi(_configuration);
    this.reddit = new RedditApi(_configuration);
    this.stories = new StoriesApi(_configuration);
    this.websearch = new WebsearchApi(_configuration);
  }
}
