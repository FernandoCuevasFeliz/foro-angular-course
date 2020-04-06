export interface TopicI {
  _id: string;
  title: string;
  content: string;
  code: string;
  lang: string;
  user: any;
  comment: any;
  createAt: string;
}

export interface TopicResponseI {
  status: string;
  msg: string;
  topic: TopicI;
}

export interface getTopicsI {
  status: string;
  topics: TopicI[];
  totalDocs: number;
  totalPages: number;
}

export interface TopicResponseDelI {
  status: string;
  msg: string;
}
