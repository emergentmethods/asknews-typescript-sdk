/* tslint:disable */
/* eslint-disable */
import * as runtime from "../runtime";
import { AnalyticsApi } from "./AnalyticsApi";
export * from './AnalyticsApi';
import { ChatApi } from "./ChatApi";
export * from './ChatApi';
import { NewsApi } from "./NewsApi";
export * from './NewsApi';
import { PingApi } from "./PingApi";
export * from './PingApi';
import { StoriesApi } from "./StoriesApi";
export * from './StoriesApi';

export class AskNewsSDK {
  protected configuration: runtime.Configuration;
  protected analytics: AnalyticsApi;
  protected chat: ChatApi;
  protected news: NewsApi;
  protected ping: PingApi;
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
    this.news = new NewsApi(_configuration);
    this.ping = new PingApi(_configuration);
    this.stories = new StoriesApi(_configuration);
  }
}
