import type { Issue } from '../types'
import { abby, yuval } from '../content/contributors'
import { professorsByIssue } from '../content/professors'
import readingLists from '../content/readingLists'

const firstIssue: Issue = {
  title: 'Berkeley University',
  date: '2012',
  number: 1,
  contributors: [abby],
  professors: professorsByIssue[0],
  intro: `The UC Berkeley Science Issue is by no means a complete picture of the best of UC Berkeley science! This is more of a cross-section, a sample of so-called distinguished scholars in this community who have been nominated by their peers as persons of interest, all of them working within the "traditional” sciences on somewhat untraditional science, and collectively touting hundreds of years of university experience. We'd like to bring career scholars into the competition for public attention in a much more substantial way. Why aren't they center-stage when the needs are so great, the politics are so thin, and the gadgets are so neat? We hope that you find worth in our mission and enjoy this display.<br />
  <hr />
  Specimen Magazine is a semi-annual publication featuring interviews with career scholars. Each issue highlights a different academic community. This is a conversational forum for technical issues along with related current affairs topics and commentary on the inner-workings of universities.<br />
  <p class="italic">Specimen Magazine is not affiliated with the University of California and does not claim authorship for any of the views expressed herein. Read at your own risk.</p>`,
  readingList: readingLists[0],
}

const secondIssue: Issue = {
  title: 'Stanford University',
  date: '2012',
  number: 2,
  contributors: [abby],
  professors: professorsByIssue[1],
  intro: `Welcome to the peephole to the future. Nowhere is it more evident than the super-charged 
  epicenter of Silicon Valley, Stanford University.<br /><br />
  What was striking as we recorded interviews for this issue was the degree to which specialists are specializing at new micro-levels. Micro-fields are multiplying. Just as they say, we're getting thrown into the deep end of messy and glorious information overload, and if we can figure out how to sift the glory from the mess, the big data movement is ready to blow our mind.<br />
  <hr />
  Specimen is a quarterly magazine featuring interviews with university professors across disciplines, nominated by their peers for doing exceptional work in their field. Interview material covers a range of topics like the ecstasy and the agony of cutting-edge research, not-so-new academic work that hasn't made it into the popular awareness, the changing landscape of higher education, related current affairs, and answers to the question, "How did you get here?”<br />
  <p class="italic">Specimen Magazine is not affiliated with Stanford University.</p>`,
  readingList: [],
}

const thirdIssue: Issue = {
  title: 'Twin Cities',
  date: '2012',
  number: 3,
  contributors: [abby],
  professors: professorsByIssue[2],
  intro: `In this issue, we set out to survey professors in the Twin Cities (St. Paul and Minneapolis), 
  searching for a group of professional thinkers who spend their days looking closely at the tantalizing questions that interest us. Should we be surprised to find that the psychologist is thinking about biology, the biologist is thinking about law, the legal theorist is thinking about love, the Romantic drama scholar is thinking about philosophy, and everyone seems to be thinking about sex? Across a range of disciplines, we found one big conversation. Specimen is asking the tough (and sometimes stupid) questions and getting not so stupid answers, bringing the debate to you so that you can connect the dots. Our featured legal theorist, Brian Bix, 
  captures the philosophical grappling that characterizes this issue: <br /><br />
  <strong>Dr. Bix:</strong> All that there is, is thinking deeply about the hard questions, and there are arguments to offer, and people do persuade each other over time, but whether you are changing your mind in the direction of truth or error, no one can be entirely sure.<br /><br />
  <em>Is that frustrating for you?</em><br /><br />
  <strong>Dr. Bix:</strong> Is it frustrating for <em>you</em>?<br /><br />
  Thank you for joining the conversation.
  <hr />
  Specimen is a quarterly magazine featuring candid, in-depth interviews with professors from different institutions around the nation, bringing the best of academic thinking into the realm of public consciousness. There's an unfortunate divide between academics in their ivory towers and the inquisitive public, and we aim to bridge that gap, distilling hundreds of pages of interview material down to one compelling and understandable issue. Why interviews? Interviews allow you to hear directly from the experts that live and breathe research, retaining their choice of words and their wonderful digressions. We believe that truth is, as they say, stranger (and more sensational) than fiction. Nowhere is truth more scrutinized, hotly debated, celebrated, more strange and wonderful than inside the mind of a fine specimen.<br />
  <p class="italic">Specimen Magazine is not affiliated with the featured institutions.</p>`,
  readingList: [],
}

const fourthIssue: Issue = {
  title: 'UCLA',
  date: '2012',
  number: 4,
  contributors: [abby, yuval],
  professors: professorsByIssue[3],
  intro: `We arrived in LA looking for the kind of celebrity that makes sense to us. We found more than a few at UCLA, quietly making history. The way things are going, they may never be household names, but they are dramatically changing the way we live.<br />
  <hr />
  Specimen is a quarterly magazine that features interviews with university professors for a popular audience. Hundreds of pages of first-hand accounts are distilled down to just the good stuff. Specimen interviews are not embedded in a written narrative. What you read is straight from the horse's mouth. We include all the great tangents about the frustrations and triumphs of charting a career path in the academic world, the inner workings of institutions, the peculiarities of different disciplines, and the future of higher education.<br />
  <p class="italic">Specimen Magazine is not affiliated with UCLA.</p>`,
  readingList: [],
}

const fifthIssue: Issue = {
  title: 'Interviews & You',
  date: '2013',
  number: 5,
  contributors: [abby, yuval],
  professors: professorsByIssue[4],
  intro: `With this issue, Specimen is breaking away from an institution-specific model. It has expanded to include contributions from citizen journalists, readers like yourself with a little curiosity, a little time, and a tape recorder. You may notice a global focus in this issue, and, as always, plenty of story-telling and armchair philosophizing.<br />
  <hr />
  Specimen is a quarterly magazine featuring candid, in-depth interviews with professors for a popular audience. We distill hundreds of pages of interview material, representing hundreds of years of university experience, down to one compelling and understandable issue. Specimen interviews are not embedded in written narratives. They are first-person accounts, because word choice matters.<br /><br />
  Specimen was born out of a disappointment with journalism that oversimplifies complex research, the broken political system that it relies on, a celebrity culture that elevates fluff over substance, and gripping academic research that is packaged as humorless, visually dead, and jargon-laden. Specimen celebrates geeking out, dorking around, and the kind of celebrity that makes sense to us.<br />
  <p class="italic">Specimen Magazine is not affiliated with the featured institutions.</p>`,
  readingList: [],
}

const sixthIssue: Issue = {
  title: 'Freedom and Information',
  date: '2013',
  number: 6,
  contributors: [abby, yuval],
  professors: professorsByIssue[5],
  intro: `In this issue of Specimen, we give new experts a platform to debunk “silly blather" (Claude Fischer), "tremendous misconceptions" (David Brauer), "confusions" (Manuel Vargas), “systematic errors" (Barbara Tversky), and downright "bullshit" (Aubrey De Grey). We are glad to be publishing our longest interview yet with veteran Stanford psychologist Barbara Tversky. She meanders through decades of cool studies and hot topics. A special thanks to superstar daredevil biogerontologist Aubrey De Grey. We support you! Like many of us, these experts have been thinking about American patriotism, freedom of information, aging, upward mobility, and ecological downward spirals.<br /><br />
  Finally, from here on out, Specimen will be showcasing interviews with various experts, including but not limited to university professors.<br /><br />
  Thank you for joining the conversation.<br /><br />
  Sincerely,<br />
  Abby McLean<br />
  Producer 
  <hr />
  Specimen is a quarterly magazine featuring candid, in-depth interviews with experts for a popular audience, with a focus on university research. We distill hundreds of pages of interview material, representing hundreds of years of experience, down to one compelling and understandable issue. Specimen interviews are not embedded in written narratives. They are first-person accounts, because word choice matters.<br /><br />
  Specimen was born out of a disappointment with journalism that oversimplifies complex research, the broken political system that it relies on, a celebrity culture that elevates fluff over substance, and gripping academic research that is packaged as humorless, visually dead, and jargon-laden. Specimen celebrates geeking out, dorking around, and the kind of American heroes that make sense to us.
  <p class="italic">Specimen Magazine is not affiliated with the featured institutions.</p>`,
  readingList: [],
}

const seventhIssue: Issue = {
  title: 'Debunking America',
  date: '2013',
  number: 7,
  contributors: [abby, yuval],
  professors: professorsByIssue[6],
  intro: `Dear Reader,<br /><br />
  We did not plan to feature 101 sad facts about the future of humanity, but let's face it, this issue is kind of a downer. Fortunately, it is also insightful and gripping, like a good murder mystery. Please know that the somber tone is not necessarily a reflection of the featured interview subjects, the general tone of their work, or any indication of how fun they are at a party. It may be a reflection of a collective sigh, as we all sense a shift from bad to worse — a shift in our fragile planet. social fabric, political system, and its healthcare websites. After the storm passes, Specimen will be looking for hopeful accounts to intrigue and inform you. For now, let's face these blue matters with brown linings and agree to do something more than watching our house burn.<br /><br />
  Sincerely,<br />
  Abby McLean<br />
  Editor 
  <hr />
  Specimen is a quarterly magazine featuring in-depth interviews with university professors and other experts for a general audience. Specimen interviews are not embedded in written narratives. What you read is transcript material from real conversations and monologues-straight from the horse's mouth — because word choice matters. Specimen celebrates dorking out, geeking out, and American heroes that make sense to us.<br />
  <p class="italic">Specimen Magazine is not affiliated with the featured institutions.</p>`,
  readingList: [],
}

const eighthIssue: Issue = {
  title: 'Math Meets Nature',
  date: '2014',
  number: 8,
  contributors: [abby, yuval],
  professors: professorsByIssue[7],
  intro: `We know them as computer scientists, physicists, astronomers, and engineers, but math is their game. In this issue, mathematical physicist Nicolai Reshetikhin dwells on the age old question, <em>what is math anyway?</em> Is it just a construction of our minds or did we discover these patterns in nature, already perfect and orderly? Is math more like "reading the book of life" (Bernd Sturmfels) or more like writing it?<br /><br />
  Computer scientist Umesh Vazirani describes the <em>computational lens</em>, a mathematical way of unlocking the secrets of nature, how we co-evolved with our math machines over just a few generations, and how quantum computing introduces complexity on a scale that we cannot fathom. Theoretical astrophysicist Eliot Quataert explains how simplifying the cosmos down to workable problems (numbers) is a tricky art, and "if you do it wrong, you will throw away the essential bit of the problem that is needed to understand the observations."<br /><br />
  There is also important concern about the impulse to quantify, and measure, and elevate data over other values. Biologist and 2013 Nobel laureate Randy Schekman explains how the number of citations generated by a paper in an academic journal, its “impact factor," has been elevated to the gold standard of worth in the sciences and how damaging that turn to flashy headlines has been. He is heading up a new journal to restore integrity to science publishing.<br /><br />
  The interviews also touch on the personal choice to pursue math and science in the first place. Why is math still so dominated by white guys when it's supposed to be the ultimate meritocracy? As Rob Kirby puts it, when you've got math skills, “there is no way to take you down.” If you think you know where you stand on affirmative action, dare to read on.<br /><br />
  The subtitle of this issue could be “the time I decided to become a mathematician." It is a familiar story about how hard I fall for the subject matter in the latest issue. I had written off math so long ago, like maybe you did, dear reader, but this issue left me genuinely conflicted: “where is the time for reporting when there is so much math to be done?!"<br /><br />
  I am now convinced that line has been said all along about other work we cover in Specimen. I only hope that the magical feeling of discovery is sprinkled onto the pages of these interviews and that this amateur coverage inspires more lasting, substantial work and its wider appreciation.<br /><br />
  Stay tuned for another colorful and politically-charged issue 9, featuring interviews with Heartland farmers of different backgrounds, political persuasions, and tanlines. Predictably, I will fall in love with farming and decide to be a farmer.<br /><br />
  Thank you for reading.<br /><br />
  Abby McLean
  <hr />
  Specimen is a quarterly magazine featuring candid, in-depth interviews with professors and other expert types for everyday people. Specimen interviews are not embedded in written narratives. What you read is transcript material from real conversations and monologues — straight from the horse's mouth — because word choice matters. Specimen celebrates dorking out, geeking around, and American heroes that make sense to us.<br />
  <p class="italic">Specimen Magazine is not affiliated with the featured institutions.</p>`,
  readingList: [],
}

const ninthIssue: Issue = {
  title: 'Certified Orgasmic',
  date: '2014',
  number: 9,
  contributors: [abby, yuval],
  professors: professorsByIssue[8],
  intro: `This issue is a brief survey of different perspectives on agriculture today. We started with some vague curiosity about the alternative farming movement and were quickly reminded that we know very little about mainstream farming practices. The quest to understand the bigger picture resulted in this collection of interviews.<br /><br />
  Our coverage is an overrepresentation of subjects who are part of the “farm movement” in the Midwest — what many of us still know of as a quaint, feel-good, foodie, niche market — and an underrepresentation of subjects who are part of the system of larger, industrial farms, the means by which most of us subsist these days.<br /><br />
  It is not our intention to frame the discussion as an either/or side-taking opportunity. You, dear reader, are encouraged to resist the urge and simply enjoy the fascinating and alarming foreignness of our food system — foreign like a chicken paw, like algal blooms, like sitting in a combine on Christmas Eve, like $.09/lb. pork, like buying lettuce from the Department of Defense.<br /><br /> 
  These interviews are journeys through dark, sad places and green pastures, rain storms, droughts, sunbursts and orgasmics. You will clearly understand, and then wonder at, and then understand again, why anyone would ever want to be a farmer.<br /><br />
  Thank you for reading.<br /><br />
  Abby McLean
  <hr />
  Specimen is a periodic magazine featuring candid, in-depth interviews with professors and other expert types for everyday people. Specimen interviews are not embedded in written narratives. What you read is transcript material from real conversations and monologues — straight from the horse's mouth — because word choice matters. Specimen celebrates dorking out, geeking around, and American heroes that make sense to us.<br />
  <p class="italic">Specimen Magazine is not affiliated with the featured institutions.</p>`,
  readingList: [],
}

export default [firstIssue, secondIssue, thirdIssue, fourthIssue, fifthIssue, sixthIssue, seventhIssue, eighthIssue, ninthIssue]
