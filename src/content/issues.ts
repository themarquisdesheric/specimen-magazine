import type { Issue, ReadingListItem } from '../types'
import { abby } from '../content/contributors'
import professors from '../content/professors'

const readingList: ReadingListItem[] = [
  {
    title: 'The Black Swan',
    subtitle: 'The Impact of the Highly Improbable',
    author: 'Nassim Nicholas Taleb',
    url: 'http://www.randomhousebooks.com/books/176226/',
  },
  {
    title: 'Bobos in Paradise',
    subtitle: 'The New Upper Class and How They Got There',
    author: 'David Brooks',
    url: 'https://www.simonandschuster.com/books/Bobos-in-Paradise/David-Brooks/9780684853789',
  },
  {
    title: 'Inventing the AIDS Virus',
    author: 'Peter Duesberg',
    url: 'https://www.goodreads.com/book/show/79375.Inventing_the_AIDS_Virus',
  },
]

const firstIssue: Issue = {
  title: 'Berkeley University',
  date: '2012',
  number: 1,
  subjects: ['Math', 'Statistics', 'Probability Theory', 'Biology', 'Economics', 'Computer Science', 'Chemical Engineering & Upper Administration'],
  contributors: [abby],
  professors,
  intro: `Specimen Magazine is a semi-annual publication featuring interviews with career scholars. Each issue highlights a different academic community. This is a conversational forum for technical issues along with related current affairs topics and commentary on the inner-workings of universities. The UC Berkeley Science Issue is by no means a complete picture of the best of UC Berkeley science! This is more of a cross-section, a sample of so-called distinguished scholars in this community who have been nominated by their peers as persons of interest, all of them working within the "traditional” sciences on somewhat untraditional science, and collectively touting hundreds of years of university experience. We'd like to bring career scholars into the competition for public attention in a much more substantial way. Why aren't they center-stage when the needs are so great, the politics are so thin, and the gadgets are so neat? We hope that you find worth in our mission and enjoy this display.
  <p class="italic">Specimen Magazine is not affiliated with the University of California and does not claim authorship for any of the views expressed herein. Read at your own risk.</p>`,
  readingList,
}

export default [firstIssue]
