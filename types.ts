
export enum ArticleStatus {
  ORIGINAL = 'Original',
  UPDATED = 'Updated'
}

export interface Reference {
  id: string;
  title: string;
  url: string;
}

export interface Article {
  id: string;
  title: string;
  content: string;
  publishedDate: string;
  source: string;
  status: ArticleStatus;
  references?: Reference[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
