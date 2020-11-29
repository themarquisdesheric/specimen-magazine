import type { Professor } from '../types'
import { abby } from './contributors'
// @ts-ignore suppressing this warning since the files are found and dev/build is unaffected
import interviews from './interviews/*.md'

const davidAldous: Professor = {
  name: 'David Aldous',
  tags: ['math', 'statistics', 'probability theory'],
  slug: 'david-aldous',
  interview: {
    title: '',
    interviewers: [abby],
    date: '2011',
    html: '',
    quote: `"In some sense, everything interesting about the future is uncertain. You can predict the times of sunrise and sunset in 20 years. But those are boring things. What's going to happen to you and me personally, the state of the world in 20 or 30 years.. all the interesting parts of that are uncertain."`,
  }
}

const peterDuesberg: Professor = {
  name: 'Peter Duesberg',
  tags: ['biology', 'virology', 'cancer research'],
  slug: 'peter-duesberg',
  interview: {
    title: '',
    interviewers: [abby],
    date: '2012',
    html: '',
    quote: '',
  }
}

const johnLetiche = {
  name: 'John Letiche',
  tags: ['economics'],
  slug: 'john-letiche',
  interview: {
    title: 'Professor Emeritus of International Economics',
    interviewers: [abby],
    date: '2012',
    html: '',
    quote: '',
  }
}

const christosPapadimitriou = {
  name: 'Christos Papadimitriou',
  tags: ['computer science', 'theory of algorithms', 'computational complexity', 'evolution', 'game theory', 'optimization', 'databases'],
  slug: 'christos-papadimitriou',
  interview: {
    title: '',
    interviewers: [abby],
    date: '2012',
    html: '',
    quote: '',
  }
}

const cJudKing = {
  name: 'C. Judson King',
  tags: ['chemistry', 'chemical engineering'],
  slug: 'c-judson-king',
  interview: {
    title: '',
    interviewers: [abby],
    date: '2012',
    html: '',
    quote: '',
  }
}

const professors = [davidAldous, peterDuesberg, johnLetiche, christosPapadimitriou, cJudKing]

export const professorsKeyedBySlug = professors.reduce((accumulator, professor) => {
  const professorSlug = professor.slug
  const foundInterview = interviews.find(interview => {
    const interviewSlug = interview.filename.replace('.md', '')

    return professorSlug === interviewSlug
  })

  // adds interview html to professor
  professor.interview.html = foundInterview?.html

  accumulator[professorSlug] = professor

  return accumulator
}, {})

export default professors
