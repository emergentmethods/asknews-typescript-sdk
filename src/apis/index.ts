/* tslint:disable */
/* eslint-disable */
import * as runtime from "../runtime";
import { AlertsApi } from "./AlertsApi";
export * from './AlertsApi';
import { AnalyticsApi } from "./AnalyticsApi";
export * from './AnalyticsApi';
import { AutofilterApi } from "./AutofilterApi";
export * from './AutofilterApi';
import { ChatApi } from "./ChatApi";
export * from './ChatApi';
import { ForecastApi } from "./ForecastApi";
export * from './ForecastApi';
import { GraphApi } from "./GraphApi";
export * from './GraphApi';
import { NewsApi } from "./NewsApi";
export * from './NewsApi';
import { NewslettersApi } from "./NewslettersApi";
export * from './NewslettersApi';
import { PingApi } from "./PingApi";
export * from './PingApi';
import { ProfileApi } from "./ProfileApi";
export * from './ProfileApi';
import { RedditApi } from "./RedditApi";
export * from './RedditApi';
import { StoriesApi } from "./StoriesApi";
export * from './StoriesApi';
import { WebsearchApi } from "./WebsearchApi";
export * from './WebsearchApi';

export class AskNewsSDK {
  protected configuration: runtime.Configuration;
  public alerts: AlertsApi;
  public analytics: AnalyticsApi;
  public autofilter: AutofilterApi;
  public chat: ChatApi;
  public forecast: ForecastApi;
  public graph: GraphApi;
  public news: NewsApi;
  public newsletters: NewslettersApi;
  public ping: PingApi;
  public profile: ProfileApi;
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
    this.alerts = new AlertsApi(_configuration);
    this.analytics = new AnalyticsApi(_configuration);
    this.autofilter = new AutofilterApi(_configuration);
    this.chat = new ChatApi(_configuration);
    this.forecast = new ForecastApi(_configuration);
    this.graph = new GraphApi(_configuration);
    this.news = new NewsApi(_configuration);
    this.newsletters = new NewslettersApi(_configuration);
    this.ping = new PingApi(_configuration);
    this.profile = new ProfileApi(_configuration);
    this.reddit = new RedditApi(_configuration);
    this.stories = new StoriesApi(_configuration);
    this.websearch = new WebsearchApi(_configuration);
  }
}
