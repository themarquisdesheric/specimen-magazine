import type { Professor } from '../types'
import { abby } from './contributors'

export const davidAldous: Professor = {
  name: 'David Aldous',
  fields: ['Math', 'Statistics', 'Probability Theory'],
  interview: {
    title: '',
    interviewers: [abby],
    date: 'Winter/Spring 2012',
    slug: 'david-aldous',
    interview: '',
    quote: `"In some sense, everything interesting about the future is uncertain. You can predict the times of sunrise and sunset in 20 years. But those are boring things. What's going to happen to you and me personally, the state of the world in 20 or 30 years.. all the interesting parts of that are uncertain."`,
  }
}
