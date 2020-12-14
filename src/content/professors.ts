import type { Professor } from '../types'
import { abby, yuval, peter, zainab, kevin, erica, katie, nadia } from './contributors'
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
      quote: '"It’s an amazing story how a few people in the seventies, visionary engineers who designed the basic protocols of the internet, how they created this wonderful artifact. I wish everybody could see how incredibly simple, how common-sense the basic principles of the internet are – its basic code. How ingeniously democratic, in a simple, common-sense way. Did the clever people who came up with those simple principles in the sixties and the seventies, did they realize how subversive those principles, those codes, were? Did they know that they were really spreading the germs of a revolution? Did they know, or did it just happen?"',
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

// ============================ third issue ============================

const thirdIssueProfessors: Professor[] = [
  {
    name: 'Brian Bix',
    tags: ['legal theory'],
    slug: 'brian-bix',
    interview: {
      title: 'Legal Advice to Live By',
      interviewers: [abby],
      date: '2012',
      html: '',
      quote: `"So you can make fun of the people who say, 'marriage is just the way it's always been,' or 'I looked it up in the dictionary.' That is sort of silly, but if you are just coming up with the definition of marriage yourself, there needs to be a thoughtfulness at a moral and policy level."`,
    }
  },
  {
    name: 'Amy Muse',
    tags: ['romantic drama', 'literature'],
    slug: 'amy-muse',
    interview: {
      title: "Great Precision is the Beauty",
      interviewers: [abby],
      date: '2012',
      html: '',
      quote: `"Hmmm... beauty. Well, some of these plays are filled with people being horribly cruel to one another. What I'd say is that there is a great precision of language. This great precision is the beauty of it."`,
    }
  },
  {
    name: 'Sehoya Cotner',
    tags: ['biology of sex'],
    slug: 'sehoya-cotner',
    interview: {
      title: '',
      interviewers: [abby],
      date: '2012',
      html: '',
      quote: `"I think science communication is one of those things. It's a cultural tragedy right now. We suck at it, and as scientists, we are in this little bubble of hubris and facts. I think that hasn't helped us."`,
    }
  },
  {
    name: 'Kiarina Kordela',
    tags: ['critical theory'],
    slug: 'kiarina-kordela',
    interview: {
      title: '',
      interviewers: [abby],
      date: '2012',
      html: '',
      quote: `"They want us to assess writing in quantifiable terms, cleanly separating form from content, mechanics from style, and assigning points to each 'rubric'. You are Kafka. Do you pass the assessment?"`,
    }
  },
  {
    name: 'Matt McGue',
    tags: ['behavioral genetics'],
    slug: 'matt-mcgue',
    interview: {
      title: "Nature and Nurture",
      interviewers: [abby],
      date: '2012',
      html: '',
      quote: `"You can see that adopted individuals will show greater similarity to their birth parents than to their adopted parents."`,
    }
  },
  {
    name: 'Amy Hilden',
    tags: ['philosophy', "women's studies"],
    slug: 'amy-hilden',
    interview: {
      title: "Detours in Philosophy",
      interviewers: [abby],
      date: '2012',
      html: '',
      quote: `"Tension is good. That's what we are supposed to do — take ideas, check them out with each other, revise, jettison some, give up some, strengthen others. That is what we are supposed to do, but I felt too vulnerable in that community."`,
    }
  },
]

// ============================ fourth issue ============================

const fourthIssueProfessors: Professor[] = [
  {
    name: 'Adriana Lleras-Muney',
    tags: ['economics'],
    slug: 'adriana-lleras-muney',
    interview: {
      title: 'The Health-Education Connection',
      interviewers: [abby],
      date: '2012',
      html: '',
      quote: `"They were arguing that, in some sense, education can be seen as a health instrument, but that was very controversial. I decided to go after that question, whether there is any causal evidence."`,
    }
  },
  {
    name: 'James Gelvin',
    tags: ['middle eastern history'],
    slug: 'james-gelvin',
    interview: {
      title: 'Real Time History',
      interviewers: [abby],
      date: '2012',
      html: '',
      quote: `"I can't seem to escape the Israel-Palestine conflict. Every time you think things can't get any worse, they do, and I dive in again."`,
    }
  },
  {
    name: 'Leonard Kleinrock',
    tags: ['computer science'],
    slug: 'leonard-kleinrock',
    interview: {
      title: '"This Thing Called the Internet"',
      interviewers: [yuval],
      date: '2012',
      html: '',
      quote: `"We were measuring the traffic statistics, and email suddenly took over the traffic of the network. I said, 'Wow. This isn't about machines. This is about people communicating!'"`,
    }
  },
  {
    name: 'Matthew Lieberman',
    tags: ['social cognitive neuroscience'],
    slug: 'matthew-lieberman',
    interview: {
      title: 'Leveraging the Social Brain',
      interviewers: [abby, yuval],
      date: '2012',
      html: '',
      quote: `"Early on, when I was going into neuroscience, people would often say, 'So now we know that gum chewing exists in the gum chewing center of the brain, and whatever other silly things you can just localize to some part of the brain. Who cares? So what? I am usually on the lookout for answers to that 'So what?'"`,
    }
  },
  {
    name: 'Aydogan Ozcan',
    tags: ['engineering'],
    slug: 'aydogan-ozcan',
    interview: {
      title: '',
      interviewers: [abby, yuval],
      date: '2012',
      html: '',
      quote: `"You can't wait for the super pathologists to come and save you, because there are not that many. You have to let them be as they may, poorly trained, and rely on smart algorithms that will make up for the lack of perfection."`,
    },
  },
  {
    name: 'Judea Pearl',
    tags: ['computer science'],
    slug: 'judea-pearl',
    interview: {
      title: '',
      interviewers: [abby, yuval],
      date: '2012',
      html: '',
      quote: `"Some people have fear of mathematics or going too deep into mathematics. They say, 'Oh, this is too abstract. A judge or jury will never listen to us!' So what?`,
    }
  },
  {
    name: 'Kal Raustiala',
    tags: ['international policy'],
    slug: 'kal-raustiala',
    interview: {
      title: 'Intellectual Property: Beyond Fairness',
      interviewers: [abby],
      date: '2012',
      html: '',
      quote: `"Tweakers are the ones who take little steps forward on an idea and refine, improve it. And pioneers have the big ideas. The point is that most innovation is of the tweaking type, and to engage in that, you often need to engage in some form of copying."`,
    }
  }
]

// ============================ fifth issue ============================

const fifthIssueProfessors: Professor[] = [
  {
    name: 'Andrew Jones',
    tags: ['chines language', 'media studies'],
    slug: 'andrew-jones',
    interview: {
      title: '',
      interviewers: [peter],
      date: '2013',
      html: '',
      quote: `"They said, 'Well, there's musical evolution. Western music is evolutionarily advanced, and Chinese music got evolutionarily stuck about a thousand years ago. Hence, we are a thousand years behind, hence we must jettison our entire musical culture, and modernize.' And to me, it's actually a very disturbing story to tell."`,
    }
  },
  {
    name: 'Esther Pasztory',
    tags: ['anthropology and art'],
    slug: 'esther-pasztory',
    interview: {
      title: '',
      interviewers: [zainab],
      date: '2013',
      html: '',
      quote: `"I like Michelangelo, but he has been idolized for many centuries, so he doesn't need me to idolize him anymore. So I don't need to find any treasures in the museum. In fact, by the time things are in a museum, I sort of lost interest. It's a part of me in a deep sort of way."`,
    }
  },
  {
    name: 'Chris Brooks',
    tags: ['computer science', 'artificial intelligence'],
    slug: 'chris-brooks',
    interview: {
      title: '',
      interviewers: [yuval],
      date: '2013',
      html: '',
      quote: `"They might meet someone who is 45 years old and has never used a mouse before. They've never had that opportunity. Our students don't often believe anyone like that exists, because it's so alien to their world. Then they sit down with someone who is maybe going through recovery for drug addiction or something like that. For whatever reason, they've been out of society for a long time, and they're just coming back in now and trying to figure out this whole Internet thing. And that really drives the point home."`,
    }
  },
  {
    name: 'Gayatri Chakravorty Spivak',
    tags: ['post-colonialism'],
    slug: 'gayatri-chakravorty-spivak',
    interview: {
      title: '',
      interviewers: [zainab],
      date: '2013',
      html: '',
      quote: `"Even with people who are not allowed to be touched by others (the 'untouchable' or 'Dalit' caste in India) - and certainly there is no greater disrespect — how do you teach even these groups not to be only interested in themselves?<br /><br />
      I think that is where good cultural studies should go.`,
    }
  },
  {
    name: 'Tayopa Mogilner',
    tags: ['cognitive science'],
    slug: 'tayopa-mogilner',
    interview: {
      title: '',
      interviewers: [kevin],
      date: '2013',
      html: '',
      quote: `"A lot of people think we work like a tape recorder. It's not true. You don't just have a memory, a fine representation somewhere. That's just what it feels like to a lot of people, but we are actively thinking ahead. We are active predictors. There's a lot of work out there about how much of memory is like imagining and how much isn't."`,
    }
  },
  {
    name: 'David Ogawa',
    tags: ['history of photography'],
    slug: 'david-ogawa',
    interview: {
      title: '',
      interviewers: [erica],
      date: '2013',
      html: '',
      quote: `"To me, being an outsider, it's easy enough to say, 'Just change it.' Get on the board of whatever, do this, do that, because it's your culture, it's your climate. You can change it. And I realize that it must be harder for students who are in it to actually feel like they have that kind of power. There's always that mythology that culture is created by other people who have been here longer or who seem to be more popular or those who are part of these privileged groups, of which there are several."`,
    }
  },
  {
    name: 'Stephen Hinshaw',
    tags: ['adolescent psychology'],
    slug: 'stephen-hinshaw',
    interview: {
      title: '',
      interviewers: [katie],
      date: '2013',
      html: '',
      quote: `"To make a long story short, we collected the largest sample of girls with ADHD in the world and we've been following them up over time."`,
    }
  },
  {
    name: 'Valerie Barr',
    tags: ['computer science'],
    slug: 'valerie-barr',
    interview: {
      title: '',
      interviewers: [erica],
      date: '2013',
      html: '',
      quote: `"The role of technology in our lives is one we should be much more critical about, and people don't want to be."`,
    }
  },
]

// ============================ sixth issue ============================

const sixthIssueProfessors: Professor[] = [
  {
    name: 'Aubrey De Grey',
    tags: ['biogerontologist'],
    slug: 'aubrey-de-grey',
    interview: {
      title: '',
      interviewers: [abby],
      date: '2013',
      html: '',
      quote: `"Essentially, the thing is that people have been taught what is a disease and what is not, and they don't like to think of the idea that you and I have got a disease, right? But you and I have got aging."`,
    }
  },
  {
    name: 'David Brauer',
    tags: ['agronomy'],
    slug: 'david-brauer',
    interview: {
      title: '',
      interviewers: [kevin],
      date: '2013',
      html: '',
      quote: `"If we could do the same with energy, create an energy supply that's relatively inexpensive, then we have this water issue whipped."`,
    }
  },
  {
    name: 'Claude Fischer',
    tags: ['sociology'],
    slug: 'claude-fischer',
    interview: {
      title: '',
      interviewers: [abby],
      date: '2013',
      html: '',
      quote: `"There has got to be some reason for, let's say, the never-ending claim that family life is disintegrating, which of course goes back to time immemorial, or the eons-long arguments about the country and city. They resonate for a reason, so it's not enough to just debunk them. If there is a misunderstanding behind those perceptions, where do they come from?"`,
    }
  },
  {
    name: 'Barbara Tversky',
    tags: ['psychology'],
    slug: 'barbara-tversky',
    interview: {
      title: '',
      interviewers: [abby],
      date: '2013',
      html: '',
      quote: `"So I have had this experience in conferences, where somebody from geology will come up to me and say, 'We are uniquely spatial among the scientists. That's why I want to talk to you.' And someone from chemistry will come and say the same thing, and someone in physics will do the same thing. And I am laughing inside. You're all spatial!"`,
    }
  },
  {
    name: 'Manuel Vargas',
    tags: ['philosophy'],
    slug: 'manuel-vargas',
    interview: {
      title: '',
      interviewers: [nadia],
      date: '2013',
      html: '',
      quote: `"They key, I think, is to acknowledge that we are part of the physical causal fabric of the world, but to also recognize that we are the part capable of acting with malicious intent.<br/>
      That's the hook of praise and blame."`,
    }
  },
]

// ============================ all professors ============================

const professors: Professor[] = [...firstIssueProfessors, ...secondIssueProfessors, ...thirdIssueProfessors, ...fourthIssueProfessors, ...fifthIssueProfessors, ...sixthIssueProfessors]

export const professorsByIssue: Professor[][] = [firstIssueProfessors, secondIssueProfessors, thirdIssueProfessors, fourthIssueProfessors, fifthIssueProfessors, sixthIssueProfessors]

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
