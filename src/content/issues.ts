import type { Issue } from '../types'
import { abby } from '../content/contributors'
import { davidAldous, peterDuesberg, johnLetiche, christosPapadimitriou, cJudKing } from '../content/professors'

export const firstIssue: Issue = {
  slug: 'issue-1',
  title: 'Berkeley University',
  date: 'Winter/Spring 2012',
  number: 1,
  subjects: ['Math', 'Statistics', 'Probability Theory', 'Biology', 'Economics', 'Computer Science', 'Chemical Engineering & Upper Administration'],
  contributors: [abby],
  interviews: [davidAldous, peterDuesberg, johnLetiche, christosPapadimitriou, cJudKing],
}
