export type Contributor = {
  name: string,
  title: string,
  website?: string,
}

export type Professor = {
  name: string,
  tags: string[],
  slug: string,
  interview: Interview,
  website?: string,
}

type Interview  = {
  title: string,
  interviewers: Contributor[],
  date: string,
  html: string,
  quote: string,
}

export type Issue = {
  title: string,
  date: string,
  number: number,
  subjects: string[],
  contributors: Contributor[],
  professors: Professor[],
  intro: string,
}
