export type Contributor = {
  name: string,
  title: string,
  url?: string,
}

export type Professor = {
  name: string,
  tags: string[],
  slug: string,
  interview: Interview,
  url?: string,
}

type Interview  = {
  title: string,
  interviewers: Contributor[],
  date: string,
  html?: string,
  quote: string,
}

export type Issue = {
  title: string,
  date: string,
  number: number,
  contributors: Contributor[],
  professors: Professor[],
  intro: string,
  readingList?: ReadingListItem[],
}

export type ReadingListItem = {
  title: string,
  subtitle?: string,
  author: string,
  url: string,
}
