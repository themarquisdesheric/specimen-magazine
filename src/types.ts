export type Contributor = {
  name: string,
  title: string,
  website?: string,
}

export type Professor = {
  name: string,
  fields: string[],
  interview: Interview,
  website?: string,
}

type Interview  = {
  title: string,
  interviewers: Contributor[],
  date: string,
  slug: string,
  interview: string,
  quote: string,
}

export type Issue = {
  slug: string,
  title: string,
  date: string,
  number: number,
  subjects: string[],
  contributors: Contributor[],
  interviews: Professor[],
}
