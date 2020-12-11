import type { Issue, ReadingListItem } from '../types'
import { abby, yuval } from '../content/contributors'
import { professorsByIssue } from '../content/professors'

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
  {
    title: 'Crises and Compassion',
    subtitle: 'From Russia to the Golden Gate',
    author: 'John Letiche',
    url: 'https://www.mqup.ca/crises-and-compassion-products-9780773538207.php',
  },
  {
    title: "Turing's Vision",
    subtitle: 'The Birth of Computer Science',
    author: 'Chris Bernhardt',
    url: 'https://mitpress.mit.edu/books/turings-vision',
  },
  {
    title: 'Alan Turing',
    subtitle: 'The Enigma',
    author: 'Andrew Hodges',
    url: 'https://press.princeton.edu/books/paperback/9780691164724/alan-turing-the-enigma',
  },
  {
    title: 'Neuromancer',
    author: 'William Gibson',
    url: 'https://www.penguinrandomhouse.com/books/293994/neuromancer-by-william-gibson/',
  },
]

const firstIssue: Issue = {
  title: 'Berkeley University',
  date: '2012',
  number: 1,
  contributors: [abby],
  professors: professorsByIssue[0],
  intro: `Specimen Magazine is a semi-annual publication featuring interviews with career scholars. Each issue highlights a different academic community. This is a conversational forum for technical issues along with related current affairs topics and commentary on the inner-workings of universities. The UC Berkeley Science Issue is by no means a complete picture of the best of UC Berkeley science! This is more of a cross-section, a sample of so-called distinguished scholars in this community who have been nominated by their peers as persons of interest, all of them working within the "traditional” sciences on somewhat untraditional science, and collectively touting hundreds of years of university experience. We'd like to bring career scholars into the competition for public attention in a much more substantial way. Why aren't they center-stage when the needs are so great, the politics are so thin, and the gadgets are so neat? We hope that you find worth in our mission and enjoy this display.
  <p class="italic">Specimen Magazine is not affiliated with the University of California and does not claim authorship for any of the views expressed herein. Read at your own risk.</p>`,
  readingList,
}

const secondIssue: Issue = {
  title: 'Stanford University',
  date: '2012',
  number: 2,
  contributors: [abby],
  professors: professorsByIssue[1],
  intro: `<p class="italic">Specimen Magazine is not affiliated with Stanford University.</p>`,
  readingList: [],
}

const thirdIssue: Issue = {
  title: 'Sex, Love, and Philosophy',
  date: '2012',
  number: 3,
  contributors: [abby],
  professors: professorsByIssue[2],
  intro: `<p class="italic">Specimen Magazine is not affiliated with the featured institutions.</p>`,
  readingList: [],
}

const fourthIssue: Issue = {
  title: 'UCLA',
  date: '2012',
  number: 4,
  contributors: [abby, yuval],
  professors: professorsByIssue[3],
  intro: `<p class="italic">Specimen Magazine is not affiliated with UCLA.</p>`,
  readingList: [],
}

export default [firstIssue, secondIssue, thirdIssue, fourthIssue]
