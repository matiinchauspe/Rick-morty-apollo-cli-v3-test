export interface Scroll {
  items: [];
  isLoading: boolean;
  canLoadMore: boolean;
  onLoadMore(): Promise<void>;
}
