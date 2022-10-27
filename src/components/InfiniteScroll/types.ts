export interface Scroll {
  items: [];
  isLoading: boolean;
  canLoadMore: boolean;
  next(): Promise<void>;
}
