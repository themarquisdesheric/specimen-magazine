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
  intro: `Specimen Magazine is a semi-annual publication featuring interviews with career scholars. Each issue highlights a different academic community. This is a conversational forum for technical issues along with related current affairs topics and commentary on the inner-workings of universities.<br /><br />
  The UC Berkeley Science Issue is by no means a complete picture of the best of UC Berkeley science! This is more of a cross-section, a sample of so-called distinguished scholars in this community who have been nominated by their peers as persons of interest, all of them working within the "traditional” sciences on somewhat untraditional science, and collectively touting hundreds of years of university experience. We'd like to bring career scholars into the competition for public attention in a much more substantial way. Why aren't they center-stage when the needs are so great, the politics are so thin, and the gadgets are so neat? We hope that you find worth in our mission and enjoy this display.
  <p class="italic">Specimen Magazine is not affiliated with the University of California and does not claim authorship for any of the views expressed herein. Read at your own risk.</p>`,
  readingList,
}

const secondIssue: Issue = {
  title: 'Stanford University',
  date: '2012',
  number: 2,
  contributors: [abby],
  professors: professorsByIssue[1],
  intro: `Specimen is a quarterly magazine featuring interviews with university professors across disciplines, nominated by their peers for doing exceptional work in their field. Interview material covers a range of topics like the ecstasy and the agony of cutting-edge research, not-so-new academic work that hasn't made it into the popular awareness, the changing landscape of higher education, related current affairs, and answers to the question, "How did you get here?”<br /><br />
  Welcome to the peephole to the future. Nowhere is it more evident than the super-charged 
  epicenter of Silicon Valley, Stanford University.<br /><br />
  What was striking as we recorded interviews for this issue was the degree to which specialists are specializing at new micro-levels. Micro-fields are multiplying. Just as they say, we're getting thrown into the deep end of messy and glorious information overload, and if we can figure out how to sift the glory from the mess, the big data movement is ready to blow our mind.
  <p class="italic">Specimen Magazine is not affiliated with Stanford University.</p>`,
  readingList: [],
}

const thirdIssue: Issue = {
  title: 'Sex, Love, and Philosophy',
  date: '2012',
  number: 3,
  contributors: [abby],
  professors: professorsByIssue[2],
  intro: `Specimen is a quarterly magazine featuring candid, in-depth interviews with professors from different institutions around the nation, bringing the best of academic thinking into the realm 
  of public consciousness. There's an unfortunate divide between academics in their ivory towers and the inquisitive public, and we aim to bridge that gap, distilling hundreds of pages of interview material down to one compelling and understandable issue. Why interviews? Interviews allow you to hear directly from the experts that live and breathe research, retaining their choice of words and their wonderful digressions. We believe that truth is, as they say, stranger (and more sensational) than fiction. Nowhere is truth more scrutinized, hotly debated, celebrated, more strange and wonderful than inside the mind of a fine specimen. 
  <h2 class="text-left">Let's get philosophical</h2>
  In this issue, we set out to survey professors in the Twin Cities (St. Paul and Minneapolis), 
  searching for a group of professional thinkers who spend their days looking closely at the tantalizing questions that interest us. Should we be surprised to find that the psychologist is thinking about biology, the biologist is thinking about law, the legal theorist is thinking about love, the Romantic drama scholar is thinking about philosophy, and everyone seems to be thinking about sex? Across a range of disciplines, we found one big conversation. Specimen is asking the tough (and sometimes stupid) questions and getting not so stupid answers, bringing the debate to you so that you can connect the dots. Our featured legal theorist, Brian Bix, 
  captures the philosophical grappling that characterizes this issue: <br /><br />
  <strong>Dr. Bix:</strong> All that there is, is thinking deeply about the hard questions, and there are arguments to offer, and people do persuade each other over time, but whether you are changing your mind in the direction of truth or error, no one can be entirely sure.<br /><br />
  <em>Is that frustrating for you?</em><br /><br />
  <strong>Dr. Bix:</strong> Is it frustrating for <em>you</em>?<br /><br />
  Thank you for joining the conversation.
  <p class="italic">Specimen Magazine is not affiliated with the featured institutions.</p>`,
  readingList: [],
}

const fourthIssue: Issue = {
  title: 'UCLA',
  date: '2012',
  number: 4,
  contributors: [abby, yuval],
  professors: professorsByIssue[3],
  intro: `We arrived in LA looking for the kind of celebrity that makes sense to us. We found more than a few at UCLA, quietly making history. The way things are going, they may never be household names, but they are dramatically changing the way we live.<br /><br />
  Specimen is a quarterly magazine that features interviews with university professors for a popular audience. Hundreds of pages of first-hand accounts are distilled down to just the good stuff. Specimen interviews are not embedded in a written narrative. What you read is straight from the horse's mouth. We include all the great tangents about the frustrations and triumphs of charting a career path in the academic world, the inner workings of institutions, the peculiarities of different disciplines, and the future of higher education.
  <p class="italic">Specimen Magazine is not affiliated with UCLA.</p>`,
  readingList: [],
}

const fifthIssue: Issue = {
  title: 'Professors, Interviews, and You',
  date: '2012',
  number: 5,
  contributors: [abby, yuval],
  professors: professorsByIssue[4],
  intro: `<p class="italic">Specimen Magazine is not affiliated with the featured institutions.</p>`,
  readingList: [],
}

export default [firstIssue, secondIssue, thirdIssue, fourthIssue, fifthIssue]
