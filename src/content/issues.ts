import type { Issue } from '../types'
import { abby } from '../content/contributors'
import professors from '../content/professors'

export const firstIssue: Issue = {
  title: 'Berkeley University',
  date: '2012',
  number: 1,
  subjects: ['Math', 'Statistics', 'Probability Theory', 'Biology', 'Economics', 'Computer Science', 'Chemical Engineering & Upper Administration'],
  contributors: [abby],
  professors,
}
