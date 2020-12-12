<em class="interviewer">Will you talk a bit about your educational background?</em>

Yeah. So, I come from Greece. As an undergraduate, I studied electrical engineering. That was probably some of the unhappiest time of my life, my college years. It was the Greece of the colonels, the dictatorship. My subject did not interest me, and the parts that interested me were given to me in the most mundane way possible. I was motivated to learn interesting things but I was spinning my wheels, so you know, it was all frustration. Then it became worse, I went to the army for a year. I decided to get out of there. I applied to graduate schools in the United States basically to get out of Greece. Doing graduate studies was not in my culture or in my plans. I was not a great student. I was not motivated. I was more interested in politics at the time. And then I came to Princeton, very open minded. Pursuing my studies was one of the options, but it definitely wasn’t the dominant one.

But I came to Princeton. It was one of the two or three places that admitted me of all those that I had applied to. I don’t know why they did. They admitted me to the program that would be now called Computer Science. And that had me enchanted from day one. For all these years, I had been looking for something like this, perhaps exactly this. And I had not suspected that it existed, I sort of wished and prayed it existed. On top of this, I seemed to be very good at it. So, immediately it was sort of paradise. You know, sometimes you look at, or listen to, or read a piece of art and your mind is in denial of the existence of something so beautiful. So in the same way, I could not believe that I was so lucky, that this was happening to me. 

That was a very interesting time for my field. Computer science is a very very young field. It’s like 60 or 70 years old, as opposed to mathematics. Back then in the early 1970s, it was at a turning point, things were accelerating, technology was becoming more and more sophisticated. 

I remember this, that when I was at Princeton, late at night just before my qualifying exams, now I look back and I know that at that very moment I knew all of computer science, everything there was to know about computer science in those days, which is something that five years later was impossible. The field was at a turning point. Today, you are lucky if you know all of the tiny little corner of computer science you are working on. So, maybe I was the last person who knew all of computer science. After I graduated, I went to teach. I went to Harvard for a couple of years. I came to Berkeley as a post-doc, then I went back to MIT. Then the crazy idea came to me to go back to Greece and teach computer science in Greece. It was a foolish idea, perhaps. Anyway, it didn’t go well. It wasn’t a happy homecoming, and a few years later, I got an offer from Stanford, an offer I couldn’t refuse. I tried to split my time between Greece and Stanford. It didn’t work. And so I left Greece. I went to UCSD for a few years, and finally I came here… it’s almost 2 decades now. 

<em class="interviewer">Your work is quite technical for someone like myself. Would you mind talking a bit about computational complexity?</em>

Sure. Yeah. So, computation is about algorithms. Algorithms are the ways in which computers solve problems. Now, the point is that there are things called computational problems. They are the things that are supposed to be solved by a computer, ok? Some of them are easy. If enough people get their heads together and they devise the right method, they will do it, ok? They will finally accomplish the goal. Some others are hard. In fact, some are completely impossible. *The Birth of Computer Science* is a paper written by this English mathematician and philosopher, Alan Turing, in 1937, where he considered computational problems, problems that you would have liked a computer to solve. That was 1936, ten years before the first computer, but this guy was thinking about these problems. 

So there are problems that you would have liked a computer to solve but they cannot be solved. They are unsolvable.

<p class="highlight">This was one of the tough encounters, during the 20th century, of the human intellect with the limitations of science. To my mind, the most traumatic.</p>

Before that, science was progressing linearly. At the beginning of the 20th century, David Hilbert was saying that there are no unsolvable problems, all problems will be solved. 

<p class="highlight">Maybe you have to talk to someone more clever than you.</p>

Maybe you need to wait a couple of generations, but they will be solved. It was the 20th century that brought us things that cannot be done, ok? There can be no complete system that proves all mathematical theorems, that was Gödel’s theorem. Or you cannot measure both the position and the velocity of things. Or you cannot run as fast as you want, ok? Or there are simple to state problems that are unsolvable. You cannot solve them mechanically.

<p class="highlight">Computer science was born with a dire awareness of its own limitations, whereas physics and mathematics encountered them in their middle age like the rest of us.</p>

So, computer science had absorbed this trauma. We knew from the beginning there are problems that you cannot solve. Incidentally, the problem that Turing pointed out that is unsolvable, it has to do with software. It is essentially the problem of certifying that software is correct, safe for you. He proved that this is impossible. What software engineers are trying to do are clever compromises, because they know they cannot do it in general. So they are trying to find domains in which it can be done, with luck, very broad domains, but still a compromise of what one would have liked to do. 

In any event, we knew that there were impossible things, but 

<p class="highlight">Complexity Theory is about the realization that came to us later, 30 years later: that no matter how fast computers become, there are problems that can be solved in principle but take exponential time. Astronomical time.</p>

So, to solve any decent-sized problem of this sort, it would take humongous amounts of time, in fact, many lifetimes of the universe sometimes, ok? And so complexity theory is an intellectual effort to look at computational problems and try to classify them into those that you can solve in a satisfactory way and those that in principle you can do but you really can’t do because time is limited. Of course technology is galloping, but it’s not galloping fast enough for this. I mean, it will never conquer those problems, ok? Now, these are sort of definite limitations… exponential algorithms are beyond our reach, will forever be beyond our reach. It’s just that, maybe we are going to shave off a little more… as technology progresses, maybe we will be able to solve slightly bigger sized problems but we will never get where we want, where we need to be. Am I being dense and obscure? 

<em class="interviewer">“Problems” is sort of an open-ended sort of thing.</em>

Sure, sure, sure. So… the traveling salesman problem. It’s very simple to state. Suppose I give you 50 cities. What you have to do is visit them, that’s what the traveling salesman you are consulting for has to do. And you know the distances, the airline fares or something, between any two cities, and you want to find the shortest, the best way to visit all of them. Of course it can be solved. You can essentially, in principle, check every single one of the rearrangements of the orders in which you could visit the cities. The trouble is that this is way way too much. For 50 cities, this is a number that has, I don’t know, 70 digits or so. So, no matter how fast computers become, even if all molecules of the earth became computers and they operate at the speed of light, it would never happen. 

<em class="interviewer">That’s hard to understand. It seems like something that could be worked out in a matter of minutes.</em>

Computers are very fast, but even the fastest computers today, they could not do more than a few billion of those a second, ok? And then there are about 100,000 seconds in the day, ok? And this means there are less than forty million seconds in a year. All right? And we, so far, we only have 10 digits. 60 digits to go. So we need a number of years which is much bigger than the expected lifetime of the universe to do this. 

<em class="interviewer">On one computer.</em>

On one computer. Excellent. So now imagine that we mastered all the computers of the world, in fact, we build… 

<em class="interviewer">If all the molecules [on earth were computers]</em>

That’s another, I don’t know, 10, 20 digits? 

<em class="interviewer">Wow. Huh. Ok. I would never have guessed. I probably watch too many movies.</em>

Right. So, the question is, all right, going through all rearrangements of cities, one by one, is out. But that’s the stupid way. Maybe there is a more clever way. People have been trying to find a more clever way for this and other problems, more clever than rote enumeration of all possible solutions. I mean, they have been able to find clever ways to do it in practice, even though they don’t quite find the best but they find a good one. They find a decent solution. 

I mean, it’s not like traveling salesmen in the world are out of business, you know? But this is actually a problem that occasionally you have to solve, for machine drilling, for many things. It’s important to solve this problem, and yet the algorithm that you will find efficiently, in a reasonable amount of time, the optimum solution has eluded us. We don’t know how to do it. This is one of thousands of problems of this sort, problems that you would have liked to have solved by a computer. There is this software that is supposed to get your data and compute your taxes. Is it correct? Will it always give you the right answer? This problem cannot be solved. That we already knew. But now we are saying that even in domains as benign as geography, you have problems that are impossible because of this kind of exponential growth, astronomical time requirements. So people in the 60s started observing that such problems were coming up. And when in the early 70s, I was starting my work, they had already identified the issue, which was the following: these problems that seem to require exhaustive enumeration, one after the other, over a lot of solutions, are they really… is there a way to solve them, a more clever way than exhaustive search, or not? And still we haven’t been able to answer it 45 years later, but at least we have identified it as a problem. 

Have you heard of the P vs. NP problem? It’s a big thing. It asks you exactly this. P is the class of problems that we know how to solve. NP is the class of problems that we’d like to solve. The question is, are they the same? This is one of the deepest problems in mathematics. I’m not working on it anymore, but a lot of clever people are. 

<em class="interviewer">What are the implications? Once we know that or if we do?</em>

I’ll tell you what I think. This one will end up having a lot of implications, all right? If it’s proven that it can’t be done, which everybody believes, the implications are that we will have to resign to another imperfection of the world, ok? We’d have another cruel fact of science to deal with. If it can be done, then the implications go much further. But my interest in the matter goes beyond that. I mean, there are a few questions that are so fundamental, of such panhuman interest, that trying to answer them is a duty to our humanity. 

<p class="highlight">I mean, if we manage to find out how to stay on this planet for another few thousand years, and we don’t answer those questions, what’s the point?</p>

Questions like, where did life come from? Are there problems where an exhaustive search is necessary? Is there a single equation that explains all forces in the world? I think it’s on the level of those questions. 

<em class="interviewer">I see that you are getting into questions of evolution. That’s interesting, how it intersects with computer science.</em>

I’ll tell you. Evolution was my second or third transgression since I came to Berkeley. Since I came here in ’96, I started working on something else that could be called economics, game theory. I am still working on algorithms and complexity, but since I came to Berkeley, I started thinking about other things. 1996 was the time when the internet and the web became real, and they had to be reckoned with. In some sense these artifacts were as important as the first computer. Even more. 

<p class="highlight">In my opinion, computer science is no longer about the computer, ok? Computer science — it’s about the internet.</p>

The computer happened to be the gadget that brought us the internet. And now this is our object of study. Now, the internet has sort of completely transformed computer science. It has made it, in some sense, into a natural science. Because, 

<p class="highlight">
 The way a neuroscientist looks at the brain, the way economists look at the market, the way a physicist looks at the universe, or a biologist at the cell, the same way computer scientists now look at the internet: puzzled, bewildered admiration.
</p>

It’s mind boggling, it’s grand, and I need to understand it. And I need to understand it, by the way, the same way that a natural science understands its object: through falsifiable hypotheses, experiments, observations. It’s not like in the old days when you construct something and then you study it, like computer science had been doing. The internet was something that emerged, ok? It emerged through the interaction of a lot of entities. Service providers, companies, users, hardware manufacturers, content providers. So these are the entities. Each one of these entities, they are basically trying to advance their station, advance their own good. In other words, there is no single entity like in the old days when a computer was designed by IBM, actually by these 3 engineers, so we knew what was going on. In this way, computer science has become much more like a social science. Computer scientists are studying social networks now. They are sociologists. In some sense, they are the most relevant kind of sociologists. 

<em class="interviewer">I can see that.</em>

It’s a complete transformation… the last 15 years have been an incredible evolution for computer science. So my work is trying to understand this. Game theory studies rational behavior in situations of conflict where individual agents, seeking their own interest, create something called an equilibrium. Scott Shenker is a great internet researcher, a colleague of mine here at Berkeley, one of the great thinkers about the internet, and he says that the internet is an equilibrium. Equilibrium basically is what participants in the game are supposed to do. The internet is an equilibrium. We just have to identify the game. 

<em class="interviewer">Like an ecosystem has equilibrium.</em>

Precisely. An ecosystem where everybody does what’s written on its DNA, adapted in response to what everybody else does. Yeah. 

<em class="interviewer">So you are looking at the rules of the game?</em>

Trying to. Actually, what I’m doing is a little more mathematical and less empirical. I’m trying to revisit game theory in view of its role in the new world of computation. Maybe I can tell you the result that I am most proud of. 

<em class="interviewer">Please.</em>

So, this is something that I’ve been working on for 15 years, more than 15 years, since the late 1980s, and we solved it in 2006. Frankly, I never thought that I would see it solved. It has to do with *A Beautiful Mind*. Have you seen that movie? Ok. Nash’s theorem. John F. Nash, 1995 Nobel Prize winner for this theorem. The theorem says the following: every game has an equilibrium. Ok? It’s a beautiful reassuring theorem. He tells you that in every situation of conflict, there is a combination of behaviors that will end up in equilibrium. Quiescent. Extremely rational. In some sense, we can predict what will happen. We know what will happen.

<em class="interviewer">One of these.</em>

One of these equilibria. Basically, this theorem propelled game theory into a science. Its message is one of universality, it reassures us there is an equilibrium in every game. No matter what situation of conflict you concoct, there is always a way for people to be have that will be sort of mutually quiescent. Given what everybody else does, what I’m doing is fine, ok? And so this had a lot of impact. Roger Myerson, a great game theorist who won the Nobel Prize 13 years after Nash, for something completely different, in 1999, he wrote about Nash’s theorem. He basically said that Nash’s theorem lies at the foundation of modern economic thought. Because it gave such prestige to the modern point of view of homo economicus, of economic agents who are deeply rational, seeking the best for themselves. So the Nash equilibrium has been extremely influential, not because Nash proposed it – the concept had been around – but because Nash’s theorem gave it such prestige. And the technique used to prove the theorem immediately inspired two other great economists, Arrow and Debreu, to come up with the famous price equilibrium theorem, which basically says: in any market, you can find prices so that everybody is happy. They will sell what they have. They will buy what they need. It’s one of those magical things that says, ok, the world is a nice place. I guess this work was the beginning of modern economics, of post-war economics. 

So, trouble is, Nash’s theorem says that in any situation there is an equilibrium but it doesn’t quite tell you how to find it. It tells you: there is at least one, but beats me how to find it, ok? They give you a convincing argument that, assuming it doesn’t exist, it leads to absurd things. But where is it, man? I don’t know, ok? And people, all over the next half century, they have been trying to come up with algorithms, computer programs where you give them a game, a situation of conflict, and they try to find for you the equilibrium. None of these were good in a sense. 

<p class="highlight">All of them smacked of exponentiality.</p>

And so we were suspecting that this is an intractable problem, intractable in the sense that inherently it cannot be solved in less than exponential time. But the Nash equilibrium was a very special specimen. It was a very special kind of problem. We had to find, to invent new kinds of intractability to deal with it, and I told you, that was almost 20 years of work. But it ended up being 2006 when we proved it with my student Costis Daskalakis — he’s now a professor at MIT, and Paul Goldberg from Liverpool. We proved it. We proved that if the world is as we understand it, the equilibrium promised by Nash’s theorem will be inaccessible in some cases. You need exponential time to reach it, and we know that’s a resource that we don’t have. So, the universality of Nash’s theorem is suspect, false. 

To put it dramatically, there is a computational hole at the foundations of modern economic thought. It’s a result that brings the computer science point of view and mindset center stage at another field, at a great other field, one that I admire immensely, economics. And I think this is sort of the other development of the past 20 years. Computer science has sort of invaded, has affected, has changed the game in many other fields, not only through the use of powerful computers, not only through instrumentation, but through offering a different point of view. 

Computer scientists, in order to understand their own problems have developed a specialized point of view, a sort of a new kind of scientific thinking, which can be useful – often crucial – in understanding other fields. Because in almost every object of study, there are some latent computational aspects. There is some hidden computation underfoot, and the computer science point of view sort of grabs that. 

<em class="interviewer">The need to falsify things if we can?</em>

No, not falsify... how should I say it? Proving limitations is definitely one thing we can do. But, more generally, the computer science worldview points out the computational nature of what is going on in other fields, finds a new way of looking at the field, a computational way of looking at its problems. This sometimes reveals new structure, brings up gems. I’ll give you another example. Down the corridor is my colleague, Umesh Vazirani, who works in quantum computing. The quest for quantum computers started in the 1970s with Richard Feynman, the great physicist, the quest to build computers based on quantum mechanics that would outperform exponentially today’s computers, and so, for example, they might someday solve some of these problems like the traveling salesman problem we discussed earlier. Actually, now we know this is not in the cards. But that was the dream. And over the years, people tried hard to formulate mathematically what a quantum computer would be like, and Vazirani was one of the pioneers of this. There are many people around the world now trying to build quantum computers after this blueprint. But almost 15 years, 20 years later, this quest has morphed from a constructive thrust to build powerful computers into a very incisive point of view on quantum mechanics. It has become, if you wish, a computational critique of quantum mechanics. So, you understand what I’m saying? It’s a completely new way of understanding quantum mechanics. It has profoundly changed and informed quantum physics. So this is the kind of thing I’m talking about. You asked me about my work on evolution. 

<em class="interviewer">Yeah.</em>

It started 5 years ago. God I’m glad, I’m glad I didn’t miss this phone call. Somebody called me from the Miller Institute. We have a beautiful institution here in Berkeley. It’s called the Miller Institute for research in science. Somebody gave a big chunk of money to the university and endowed it in the most beautiful possible way: bring every year a dozen or so young scientists to Berkeley to stay for three years and do anything they want. So, they hand-pick the best of the best from all over the world and they bring them here. This adds a lot to the campus life and to the lives of these young people who later go on to become famous scientists. At any rate, somebody from the Miller Institute called me and asked me, ‘There is guy, this biologist, but he says that he wants to learn mathematics and computer science because this is what he needs to study evolution, and this is confusing the hell out of everybody in the biology department, and so they don’t want to touch him, ok? So, would you be interested in talking with him?’ I said, ‘Sure.’ 

So when you want to solve these hard problems, like the traveling salesman problem, you can start playing games, like saying sort of, imagine that the solution to the traveling salesman problem is an organism that has an environment, and let’s see how evolution will change it. So, you start with the solution and then you change it a little and see how good the mutation is, and then you change it again and again, and you keep the good mutations only. Random mutations, a few are bound to improve the solution. And these heuristics often work well. They give you decent solutions to the difficult problems, ok? And then somebody said, wait a minute, maybe we can do something better. And they came up with what they call genetic algorithms, which is basically even more faithful to the reality of nature. They started to do sex, recombination. So, you have two solutions, and let’s see what their offspring are going to look like. Take some ideas from that one and some ideas from this one. Maybe it gets the bad ideas of both, in which case it dies, but maybe it gets the good ideas and in which case it’s better than its parents. If it’s good then it will procreate more, and so on and so forth, plus mutations, of course. This is a genre of programs called genetic algorithms. They do evolution by sex, recombination. The amazing thing is that the asexual evolution algorithms do very well, while the sex ual algorithms don’t. You know, they do worse then their asexual counterpart, in practice. 

<em class="interviewer">As far as...</em>

Producing good solutions. In the soup, in the population after many generations, you want to find fantastic solutions. Really good solutions. And you don’t. You don’t see that. Even though the primitive mutation-only counterparts do.

<p class="highlight">So how come nature’s favorite trick, recombination, sex, falls on its face when programmed in a computer? How come sex works in evolution and it doesn’t work on a computer?</p>

You know, the point is that in order to solve the problem by the genetic algorithm, the program does the following. It says, all right. There is something called the fitness of an individual. The fitness of an individual is basically its potential for producing a lot of offspring, a measure of how able, clever, robust, strong, fertile, an individual is. And they identify this fitness with how good the solution is. So it assumes that evolution’s purpose is to optimize fitness, which seems rather obvious for anyone who has read Darwin. Everybody had been accepting this. 

When I first met this new biologist, this new Miller Fellow whose name was Adi Livnat (he is now a professor at Virginia Tech), we were discussing all this. I told him about my puzzlement about the failure of sex in optimizing fitness when programmed on a computer. Then we looked at each other and we said, what if evolution’s purpose is not to optimize fitness? 

<em class="interviewer">Isn’t it strange to give it a purpose at all?</em>

It’s not only strange, it’s patently wrong. Strike that. What I’m saying is, what if evolution does not optimize fitness? 

<em class="interviewer">Yeah, just looking around. You wonder, don’t you?</em>

I’ve now studied evolution enough to know that a lot of strange things go on all the time. It’s slow and subtle and has reversals that are apparent and reversals that are true. But there is the neo Darwinian thought about evolution, the last 80 years. It’s called the modern synthesis, meaning put ting together Mendelism and Darwinism with a little math. Its basic premise is a bunch of mathematical equations about the fitness of populations, and the standard interpretation of the equations is that fitness is what is optimized in the process, ok? Well, it’s not. We proved it in black and white. The scientific establishment has yet to take it to heart. But they will. 

<em class="interviewer">Tell me more. Explain.</em>

So, that natural selection under sex… it turns out that it’s not the survival of the fittest. It’s something else. Subtly different. Natural selection without sex, it does optimize fitness, nobody is disputing that. The fittest individuals will basically take over, and ultimately all of the population is going to look like them, ok? But natural selection under sex does not promote fitness. It promotes mixability. What is mixability? Our genes come in many variants. They are called alleles. Maybe we have some alleles of two genes which, when combined, they create a very fit individual. The liver is in perfect condition, it will outlast everybody’s liver. In an asexual species, this will be selected. All right? 

But with sex, it turns out that what matters is not so much the allele combination that will perform best, but rather alleles with the property that they perform adequately over a broad range of other alleles. Mixable alleles. They will perform well with a wide variety of genetic partners. And this is what natural selection under sex favors. Some biologists I talk to slap their forehead. It’s something that everybody should have thought in the second year of graduate school but somehow they haven’t. It’s not a new mathematical model, it's a simple mathematical observation about the model everybody had been using the past 80 years. 

<em class="interviewer">I was noticing that you talk in terms of proofs and proving things.</em>

Mathematical biologists want to use mathematics in order to explore the truth in biology. The mathematical part of biology is not as developed as, say, the mathematical part of physics, but also other scientists and engineers… the tradition is that they are impatient with biology. 

<p class="highlight">Biology looks like a bunch of details. The point is, life is lots of details.</p>

I have an immense respect now for the practice of biology, the way it’s done. I think mathematical biologists, of which I am vaguely one, they should approach their craft with humility, because the truth is dirty and full of details. And the more clever you become, the more details come out. 

<em class="interviewer">Yeah. I was thinking of the difference between like induction and deduction and how the sciences are more inductive, and math is different that way</em>

But physics, for example, takes in math much more easily, and so does chemistry, economics. You know what I’m saying? These are disciplines that are thirsty for math. Biology… always it’s a little tougher going I feel. 


As you’ve noticed, I have been to other places before Berkeley. Harvard, MIT, Stanford, a few more. I now know that I am never going to leave this place, ok? There is no other intellectual environment like this. I have a lot of other things to criticize it for. I’m not a chauvinist, praising my home, but I will tell you what attracts me most about it. Before I came to Berkeley, I was a good computer scientist. I was doing very mainstream computer science work. And I’m grateful to Berkeley because coming here and living in this very open and alive place, a place that is exactly how a university should be. Well, I believe that this environment… not exactly inspired me, but it gave me the impetus, the chutzpah, the courage to… it made me realize it’s possible to do the crazy things I’ve been doing since then. Like economics, biology, and so on. 

<em class="interviewer">Freedom.</em>

Freedom. Precisely. A very, very aggressive form of academic freedom. I mean, Stanford is fine, and so is Princeton and Harvard and MIT. So, you know, I’m not putting down those great places… but I really find Berkeley is different. 

<em class="interviewer">Is it less administrative work here do you think? That’s not it?</em>

No no no. If anything it’s worse. Much worse. At a rich school you get all the help you can hire. My colleagues are always complaining that they have to do a lot of things. The point is… your real creative work, if you are lucky, it’s half an hour a day, or an hour. You know what I’m saying. If you can find this hour, and everything else is conducive to it being really productive, really sort of high quality, who knows what can happen during that hour? I mean, when I was at Stanford, that was another very productive period of my life, and I was essentially a single parent of a baby, so I had really no time. But I liked my situation. I loved my baby, and she inspired me, so taking care of her made me want to do great things. 

<em class="interviewer">So what’s next for you? Looking ahead, what kind of projects do you see coming up here? Or what are you doing now?</em>

I want to continue everything I’m doing. But I am looking for something else. I don’t  know what it’s going to be. I’m very interested in neuroscience. I see it as another field that can be scrutinized, productively looked at from the computer science point of view. 

<em class="interviewer">It’s important work.</em>

So, I don’t know if you want to talk about the other crazy thing that I do, which is write novels. 

<em class="interviewer">Yeah. I know about that.</em>

It never would have occurred to me in another place, but when I came here, I guess, a few years later, I started writing fiction. 

<em class="interviewer">What is it about Turing?</em>

In some sense, I’ve been working on Turing’s legacy. My work had always been on Tur ing’s intellectual legacy. That’s what theoretical computer science is. He started it. But frankly, I knew practically nothing about him. Then I read the book by Andrew Hodges. There’s a wonderful, very powerful biography, *Turing, the Enigma*, and then I really got into Turing. 

Do you want to hear the story? I was reading this book, *Neuromancer*, a novel very much like a film noir, it certainly recalls Dashiell Hammond, some kind of hapless op trying to sort of figure out something. It’s a climactic point in the book, the end of part 3. He comes back to his hotel room and he finds it full of cops. And they tell him, “Turing, you are under arrest.” And that’s a very strange sentence. I mean, for me it was a very powerful sentence. It turns out, in this book’s world there is the Turing police. It’s a force that’s making sure that there is no artificial intelligence, because it’s a dangerous thing. 

<em class="interviewer">Do you think it is dangerous?</em>

No. This is an echo from an old tired debate. No. Frankly, you know what I think? 

<p class="highlight">Those who live in fear that one day we’ll be ruled by machines are probably not paying enough attention to those who are ruling us now.</p>

It can’t get much worse; I guarantee you. So don’t be afraid of machines, really. 

<em class="interviewer">If I learn one thing today...</em>

So, I took from that book this sentence, “Turing, you are under arrest.” It stayed with me for years. What if it’s all lies and Turing is alive? He’d be in his seventies or eighties. What if you bump into him? What if he turned up unbidden somewhere? So this is essentially the plot of my book. Essentially, Tur ing is a program that likes to teach math and computer science. My book is a love story between two people, and then there is a character that is Turing. It’s a modern love story set in the year 2007, back then it was the future. So it’s a love story and one of the other characters is Turing, the program. It wants to turn people around and stuff. 

<em class="interviewer">What did this do for you?</em>

Oh, it completely changed my life. I will tell you what happened. I had never written a poem. I had never written a short story. It had never occurred to me that I would ever write anything. I mean, I wrote textbooks and I wrote papers. Then, it was probably 97, 98, I forget. I was in Greece and I went to see… do you know this poet Cavafy? One of the great poets in the 20th century. He’s not well known. A Greek poet, born in Alexandria, Egypt. So I went to see a movie, a Greek movie titled *Cavafy*. I liked it so-so, but coming out of the movie, I remember I was really interested in the gesture of the director, to create a piece of art and to give it the name of your intellectual hero. I had never thought about it, but that night, the plot came to me. I started to write it. I wrote it for two and a half years. 

I mean, it completely changed my life. It so happened that I’ve never been analyzed. I’ve never done psycho analysis, ok? I have nothing against it, but it just didn’t happened to me. I’ve talked to many people who’ve had it, and writing this book, it sounded like, you know, it seemed to me, like it was indistinguishable in terms of the effects it had from a few dozen of extremely successful sessions. A lot of crying, a lot of sort of finding inside of me things that I never would have suspected before. Really, I think I would be half a man, I would be half what I am, if I had not done this… worse than half.

<p class="highlight">I would be missing a dimension. You know what I’m saying? Missing a dimension is worse than half. Compare the square with the segment or the cube.</p>

<em class="interviewer">It’s hard to know what you mean when you say that. It’s just the impossibility of knowing really what you’re talking about.</em>

Yes. Definitely. You are saying that you sense that my experience was so profound that’s it’s hard for somebody else to understand? 

<em class="interviewer">It’s so individual. It’s fascinating that something like writing a novel can do that.</em>

It completely changed my mind. So I just finished my third novel. There have been some profound experiences, but nothing like *Turing*, the first one. Right now, I think I would have written my first novel in a completely different way. I love it. I’m proud of it, and so on, but it has flaws. 

<em class="interviewer">What kind of privacy issues are we dealing with on the internet? Should we be concerned about that?</em>

Listen, ok. Privacy will always be a problem, like freedom, decent pay, health care, you know what I’m saying. It’s always going to be a problem. 

<em class="interviewer">Is open access the bigger problem then?</em>

It’s always going to be a problem. And it’s always going to be a struggle between people that want privacy and forces that want to take privacy away. I think that the ideological battle has been won, and the issue is on the table, at least everybody pays lip service to that. I think that ultimately, the healthiest way to deal with privacy is… I don’t want to be economistic, but it’s economic. You say, you want my data? Sure. It’s yours. I charge that much. I think that’s the healthiest thing to do, but it requires volumes of legislation and much new technology. In other words, it cannot be done in a vacuum. It needs a society that is mature enough to recognize that this is the way to go, and a benevolent state that would provide the tools, provide the legal framework. I think it would require an incredible change. I will tell you what I think in general. 

I am a reasonably sunny person, an optimist, ok? But the state of the world is not good. I look around and I see black, and I think that the only huge great positive force in the world today is the internet. And of course there are issues. 

<em class="interviewer">Do we need a police force for the internet?</em>

No, no! (wild laughter) The cliché is that the internet wants to be free, which means free of government intervention, free of oppression, and I guess free of charge. No no no no. We don’t… listen… 

<em class="interviewer">We don’t need people to keep people honest?</em>

I think the internet will make and keep people honest, ok? Here is how I think of it. Basically, I think the internet is the greatest threat to the power of governments. Ok? Look at WikiLeaks. WikiLeaks for me is the promise of the internet. It’s sort of the generous injection of humility to those who believed that they were omnipotent. Ok? They are not. Their time has come. The internet has been eroding, constantly, the power of the state. And the state is fighting back. There is so much legislation…in conjunction with terrorism, in conjunction with the completely evil issue of intellectual property rights, and copyrights, and the way it’s being handled by governments, the issue of patents and so on, all these sort of forceful malicious interven tions of governments. Of course the oppressive governments in places like China, Iran, Saudi Arabia are fighting the internet, but so do the governments and parliaments of alleged democracies like the European Union and the United States. Iran and China are just thugs who hack away. But the dangerous assaults come from the parliaments. But I think the internet has the resilience needed to survive this and more. When the people of Egypt arose, the first thing Mubarak did, was shut off the internet. I bet you that all governments would love to do that. But the point is that it is also the aorta of the economy. The economy would collapse without it. 

<em class="interviewer">There’s no going back. It will be interesting to see where it all goes.</em>

It’s an amazing story how a few people in the seventies, visionary engineers who designed the basic protocols of the internet, how they created this wonderful artifact. I wish everybody could see how incredibly simple, how common-sense the basic principles of the internet are – its basic code. How ingeniously democratic, in a simple, common-sense way. Did the clever people who came up with those simple principles in the sixties and the seventies, did they realize how subversive those principles, those codes, were? Did they know that they were really spreading the germs of a revolution? Did they know, or did it just happen? 

I’m really curious. 
