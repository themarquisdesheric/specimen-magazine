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
  intro: `Specimen Magazine is a semi-annual publication featuring interviews with career scholars. Each issue highlights a different academic community. This is a conversational forum for technical issues along with related current affairs topics and commentary on the inner-workings of universities. The UC Berkeley Science Issue is by no means a complete picture of the best of UC Berkeley science! This is more of a cross-section, a sample of so-called distinguished scholars in this community who have been nominated by their peers as persons of interest, all of them working within the "traditional” sciences on somewhat untraditional science, and collectively touting hundreds of years of university experience. We'd like to bring career scholars into the competition for public attention in a much more substantial way. Why aren't they center-stage when the needs are so great, the politics are so thin, and the gadgets are so neat? We hope that you find worth in our mission and enjoy this display.`
}
