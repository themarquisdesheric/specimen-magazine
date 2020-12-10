import type { Professor } from '../types'
import { abby } from './contributors'
// @ts-ignore suppressing this warning since the files are found and dev/build is unaffected
import interviews from './interviews/*.md'

// ============================ first issue ============================

const firstIssueProfessors: Professor[] = [
  {
    name: 'David Aldous',
    tags: ['math', 'statistics', 'probability theory'],
    slug: 'david-aldous',
    interview: {
      title: '',
      interviewers: [abby],
      date: '2011',
      html: '',
      quote: `"In some sense, everything interesting about the future is uncertain. You can predict the times of sunrise and sunset in 20 years. But those are boring things. What's going to happen to you and me personally, the state of the world in 20 or 30 years... all the interesting parts of that are uncertain."`,
    }
  },
  {
    name: 'Peter Duesberg',
    tags: ['biology', 'virology', 'cancer research'],
    slug: 'peter-duesberg',
    interview: {
      title: '',
      interviewers: [abby],
      date: '2012',
      html: '',
      quote: `“Here you try your best, at least you think, to say what's really going on. And AIDS would be… not like cancer, where I say maybe we have the truth but it's not going to be a picnic either. But with AIDS, it could be a stroke of a pen and AIDS would be gone."`,
    }
  },
  {
    name: 'John Letiche',
    tags: ['economics'],
    slug: 'john-letiche',
    interview: {
      title: 'Professor Emeritus of International Economics',
      interviewers: [abby],
      date: '2012',
      html: '',
      quote: '“I think that to a very substantial degree, the economics profession was trapped in the arrogance of the age itself, in the last 35 years.”',
    }
  },
  {
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
  },
  {
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
]

// ============================ second issue ============================

const secondIssueProfessors: Professor[] = [
  {
    name: 'Steven Kahn',
    tags: ['astrophysics'],
    slug: 'steven-kahn',
    interview: {
      title: 'Science to the People',
      interviewers: [abby],
      date: '2012',
      html: '',
      quote: `"I'm now the Deputy Director of the whole LSST project, and I am the lead scientist for the camera, which will be the largest digital camera ever build for astronomy when we finish constructing it."`,
    }
  },
  {
    name: 'Carole Robin',
    tags: ['organizational behavior'],
    slug: 'carole-robin',
    interview: {
      title: 'Getting Tough in Touch Feely',
      interviewers: [abby],
      date: '2012',
      html: '',
      quote: `"If you think that you're the one that has to provide all the best answers or that you hold all the best answers, you'll never build a high performing team. Everybody will always just wait for you."`,
    }
  },
  {
    name: 'Russ Altman',
    tags: ['informatics'],
    slug: 'russ-altman',
    interview: {
      title: "The Best Healthcare System You've Never Heard Of",
      interviewers: [abby],
      date: '2012',
      html: '',
      quote: `"I think people would like this because they would know that whenever they see a doctor, they'd be making a small contribution to the database of knowledge about medicine"`,
    }
  },
  {
    name: 'Mark Applebaum',
    tags: ['composition'],
    slug: 'mark-applebaum',
    interview: {
      title: "Play Time",
      interviewers: [abby],
      date: '2012',
      html: '',
      quote: `"I built these one of a kind instruments. You feel gratified that you're the world's greatest player, and that's a nice feeling for about 3 seconds because then you instantly recognize that you're also the world's worst player on this instrument. What would an intermediate and advanced level look like?"`,
    }
  },
  {
    name: 'Paul Ehrlich',
    tags: ['ecology'],
    slug: 'paul-ehrlich',
    interview: {
      title: "Watching the Ecological Toilet Swirl",
      interviewers: [abby],
      date: '2012',
      html: '',
      quote: `"In other words, they will trust a jet airplane designed by scientists, they'll trust a heart transplant designed by biologists, but they won't listen to climatologists or biologists about what we're doing to the planet!"`,
    }
  },
  {
    name: 'Stephen Quake',
    tags: ['biophysics'],
    slug: 'stephen-quake',
    interview: {
      title: "One Man Experiment",
      interviewers: [abby],
      date: '2012',
      html: '',
      quote: `"I go to talks sometimes and hear people talk about my genome and what they found in it. The marvelous thing about the technology we developed is that it made it easy to sequence the genome."`,
    }
  },
  {
    name: 'Paul Wise',
    tags: ['pediatrics and policy'],
    slug: 'paul-wise',
    interview: {
      title: "Kids Are Poor Because Their Parents Are Poor",
      interviewers: [abby],
      date: '2012',
      html: '',
      quote: `"These are very complicated environments within which to work. I get it. That's understandable. But that's not acceptable, because kids are dying in these places — in fact, they're concentrated in these places."`,
    }
  },
  {
    name: 'Jon Levin',
    tags: ['economics'],
    slug: 'jon-levin',
    interview: {
      title: "",
      interviewers: [abby],
      date: '2012',
      html: '',
      quote: `"Often people say, 'if only we had more detailed data about what was really going on, we could get to the bottom of this.' Sometimes it doesn't work out that way."`,
    }
  },
  {
    name: 'Brian Wandell',
    tags: ['visual neuroscience'],
    slug: 'brian-wandell',
    interview: {
      title: "",
      interviewers: [abby],
      date: '2012',
      html: '',
      quote: `"Algorithms are what we do. I wake up in the morning thinking about algorithms and go to bed thinking about algorithms"`,
    }
  },
// {
//     name: 'Jim Patell', // with stuart coulson?
//     tags: ['entrepreneurial design'],
//     slug: 'jim-patell',
//     interview: {
//       title: "",
//       interviewers: [jason],
//       date: '2012',
//       html: '',
//       quote: "",
//     }
//   },
]

// ============================ all professors ============================

const professors: Professor[] = [...firstIssueProfessors, ...secondIssueProfessors]

export const professorsByIssue: Professor[][] = [firstIssueProfessors, secondIssueProfessors]

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
