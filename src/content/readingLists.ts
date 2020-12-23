import type { ReadingListItem } from '../types'

const firstList: ReadingListItem[] = [
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

const secondList: ReadingListItem[] = []

const thirdList: ReadingListItem[] = [
  {
    title: 'Supereditor or Translator',
    subtitle: 'Comments on Coleman',
    author: 'Guido Calabresi',
    url: 'https://www.researchgate.net/publication/325970092_Law_and_economics_and_the_role_of_explanation_A_comment_of_Guido_CalabresiThe_Future_of_Law_and_Economics',
  },
  {
    title: 'The Common Law',
    author: 'Oliver Wendell Holmes, Jr.',
    url: 'https://www.hup.harvard.edu/catalog.php?isbn=9780674034020',
  },
  {
    title: 'The Second Sex',
    author: 'Simone de Beauvoir',
    url: 'https://www.penguinrandomhouse.com/books/10379/the-second-sex-by-simone-de-beauvoir-newly-translated-by-constance-borde-and-sheila-malovany/',
  },
  {
    title: "Wilhelm Meister's Apprenticeship",
    author: 'Johann Wolfgang von Goethe',
    url: 'https://press.princeton.edu/books/paperback/9780691043449/goethe-volume-9',
  },
  {
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    url: 'https://www.penguinrandomhouse.com/books/18823/jane-eyre-by-charlotte-bronte/',
  },
  {
    title: 'Capital, Volume 1',
    author: 'Karl Marx',
    url: 'https://www.lwbooks.co.uk/book/capital-volume-1',
  },
  {
    title: 'Ethics',
    author: 'Benedict de Spinoza',
    url: 'https://www.penguinrandomhouse.com/books/286292/ethics-by-benedict-de-spinoza/',
  },
  {
    title: 'Welcome to the Desert of the Real',
    subtitle: 'Five Essays on September 11 and Related Dates',
    author: 'Slavoj Žižek',
    url: 'https://www.penguinrandomhouse.com/books/232631/welcome-to-the-desert-of-the-real-by-slavoj-zizek/',
  },
  {
    title: 'Cargo Cult Science',
    subtitle: 'Remarks on Science and Pseudoscience',
    author: 'Richard P. Feynman',
    url: 'http://calteches.library.caltech.edu/51/2/CargoCult.htm',
  },
  {
    title: 'Lies, Damned Lies, and Medical Science',
    author: 'David Freedman',
    url: 'https://www.theatlantic.com/magazine/archive/2010/11/lies-damned-lies-and-medical-science/308269/',
  },
  {
    title: 'Why Marry At All?',
    author: 'Marge Piercy',
    url: 'https://apoemaday.tumblr.com/post/113613786211/why-marry-at-all',
  },
  {
    title: 'Groundwork for the Metaphysics of Morals',
    author: 'Immanuel Kant',
    url: 'https://yalebooks.yale.edu/book/9780300227437/groundwork-metaphysics-morals',
  },
]

const fourthList: ReadingListItem[] = [
  {
    title: 'The Future of the Wireless Art',
    subtitle: 'In Wireless Telegraphy and Telephony',
    author: 'Nikola Tesla',
    url: 'https://teslauniverse.com/nikola-tesla/articles/future-wireless-art',
  },
  {
    title: 'Why Women Still Can’t Have It All',
    author: 'Anne-Marie Slaughter',
    url: 'https://www.theatlantic.com/magazine/archive/2012/07/why-women-still-cant-have-it-all/309020/',
  },
  {
    title: 'Social',
    subtitle: 'Why Our Brains Are Wired to Connect',
    author: 'Matthew Lieberman',
    url: 'https://www.penguinrandomhouse.com/books/212681/social-by-matthew-d-lieberman/',
  },
  {
    title: 'Minority Report',
    subtitle: 'And Other Classic Stories',
    author: 'Philip K. Dick',
    url: 'https://www.kensingtonbooks.com/9780806537955/the-minority-report-and-other-classic-stories-by-philip-k-dick/',
  },
  {
    title: 'The Knockoff Economy',
    subtitle: 'How Imitation Sparks Innovation',
    author: 'Kal Raustiala and Christopher Sprigman',
    url: 'https://global.oup.com/academic/product/the-knockoff-economy-9780195399783?cc=us&lang=en&',
  },
  {
    title: 'The Advancement of Learning',
    author: 'Francis Bacon',
    url: 'https://www.penguinrandomhouse.com/books/7013/the-advancement-of-learning-by-francis-bacon/',
  },
  {
    title: 'The Arab Uprisings',
    subtitle: 'What Everyone Needs to Know',
    author: 'James L. Gelvin',
    url: 'https://global.oup.com/academic/product/the-arab-uprisings-9780190222758?cc=us&lang=en&',
  },
  {
    title: 'Why Syria Is Unlikely to be Next',
    subtitle: '(For Now)',
    author: 'Bassam Haddad',
    url: 'https://carnegieendowment.org/sada/42936',
  },
  {
    title: 'The Mathematical Theory of Communication',
    author: 'Claude E. Shannon',
    url: 'https://www.press.uillinois.edu/books/catalog/67qhn3ym9780252725463.html',
  },
  {
    title: 'Creating a Mathematical Theory of Computer Networks',
    author: 'Leonard Kleinrock',
    url: 'https://www.researchgate.net/publication/220244226_Creating_a_Mathematical_Theory_of_Computer_Networks',
  },
  {
    title: 'The Glass Bead Game',
    author: 'Hermann Hesse',
    url: 'https://www.penguin.com.au/books/the-glass-bead-game-9780099283621',
  },
  {
    title: 'Tubes',
    subtitle: 'A Journey to the Center of the Internet',
    author: 'Andrew Blum',
    url: 'https://www.harpercollins.com/products/tubes-andrew-blum?variant=32206301003810',
  },
  {
    title: 'Toward an interactive model of reading',
    author: 'David E. Rumelhart',
    url: 'https://www.semanticscholar.org/paper/Toward-an-interactive-model-of-reading.-Rumelhart/5828f6e9baf5727e37968a43957e6b9405e6887a',
  },
  {
    title: "Stanford Researchers Discover the 'Anternet'",
    author: 'Bjorn Carey',
    url: 'https://news.stanford.edu/pr/2012/pr-ants-mimic-internet-082312.html',
  },
]

const fifthList: ReadingListItem[] = [
  {
    title: 'The Story of the Stone',
    author: 'Cao Xueqin',
    url: 'https://www.penguinrandomhouse.com/books/268049/the-story-of-the-stone-volume-i-by-cao-xueqin-translated-with-an-introduction-by-david-hawkes/',
  },
  {
    title: 'Phantoms in the Brain',
    subtitle: 'Probing the Mysteries of the Human Mind',
    author: 'V S. Ramachandran and Sandra Blakeslee',
    url: 'https://www.harpercollins.com/products/phantoms-in-the-brain-v-s-ramachandran?variant=32130994110498',
  },
  {
    title: 'The Mark of Shame',
    subtitle: 'Stigma of Mental Illness and an Agenda for Change',
    author: 'Stephen P. Hinshaw',
    url: 'http://stephenhinshawauthor.com/books/the-mark-of-shame/',
  },
  {
    title: 'The Triple Bind',
    subtitle: 'Saving Our Teenage Girls from Today’s Pressures',
    author: 'Stephen P. Hinshaw and Rachel Kranz',
    url: 'https://www.penguinrandomhouse.com/books/80356/the-triple-bind-by-stephen-hinshaw-phd-with-rachel-kranz/',
  },
  {
    title: 'The Years of Silence Are Past',
    subtitle: "My Father's Life with Bipolar Disorder",
    author: 'Stephen P. Hinshaw',
    url: "https://www.researchgate.net/publication/268261955_The_Years_of_Silence_Are_Past_My_Father's_Life_with_Bipolar_Disorder",
  },
  {
    title: 'Yellow Music',
    subtitle: 'Media Culture and Colonial Modernity in the Chinese Jazz Age',
    author: 'Andrew F. Jones',
    url: 'https://www.dukeupress.edu/yellow-music',
  },
  {
    title: 'Like a Knife',
    subtitle: 'Ideology and Genre in Contemporary Chinese Popular Music',
    author: 'Andrew F. Jones',
    url: 'https://www.cornellpress.cornell.edu/book/9780939657575/like-a-knife/#bookTabs=1',
  },
  {
    title: 'Inka Cubism',
    subtitle: 'Reflections on Andean Art',
    author: 'Esther Pasztory',
    url: 'http://www.columbia.edu/~ep9/Inka-Cubism.pdf',
  },
  {
    title: 'Aliens and Fakes',
    subtitle: 'Popular Theories About the Origins of Ancient Americans',
    author: 'Esther Pasztory',
    url: 'https://polarbearandco.com/aliens-and-fakes-popular-theories-about-the-origins-of-ancient-americans/',
  },
  {
    title: 'Can the Subaltern Speak?',
    subtitle: 'Reflections on the History of an Idea',
    author: 'Gayatri Chakravorty Spivak',
    url: 'https://cup.columbia.edu/book/can-the-subaltern-speak/9780231143851',
  },
  {
    title: 'Death of a Discipline',
    author: 'Gayatri Chakravorty Spivak',
    url: 'https://cup.columbia.edu/book/death-of-a-discipline/9780231129459',
  },
  {
    title: 'The Politics of Friendship',
    author: 'Jacques Derrida',
    url: 'https://www.penguinrandomhouse.com/books/232810/the-politics-of-friendship-by-jacques-derrida/',
  },
  {
    title: 'Orientalism',
    author: 'Edward W. Said',
    url: 'https://www.penguinrandomhouse.com/books/159783/orientalism-by-edward-w-said/',
  },
]

const sixthList: ReadingListItem[] = [
  {
    title: 'Life',
    subtitle: "A User's Manual",
    author: 'Georges Perec',
    url: 'https://www.penguin.co.uk/books/102/1028585/life/9780099449256.html',
  },
  {
    title: 'Understanding Comics',
    author: 'Scott McCloud',
    url: 'https://www.harpercollins.com/products/understanding-comics-scott-mccloud?variant=32122752565282',
  },
  {
    title: 'The Mind of a Mnemonist',
    subtitle: 'A Little Book about a Vast Memory',
    author: 'A.R. Luria',
    url: 'https://www.hup.harvard.edu/catalog.php?isbn=9780674576223',
  },
  {
    title: 'Microbe Hunters',
    author: 'Paul de Kruif',
    url: 'https://www.biolchem.ucla.edu/library/microbe-hunters/',
  },
  {
    title: 'Building Better Beings',
    subtitle: 'A Theory of Moral Responsibility',
    author: 'Manuel Vargas',
    url: 'https://global.oup.com/academic/product/building-better-beings-9780199697540?cc=us&lang=en&',
  },
  {
    title: 'Ending Aging',
    subtitle: 'The Rejuvenation Breakthroughs That Could Reverse Human Aging in Our Lifetime',
    author: 'Aubrey de Grey and Michael Rae',
    url: 'https://us.macmillan.com/books/9780312367077',
  },
  {
    title: 'The Mitochondrial Free Radical Theory of Aging',
    author: 'Aubrey de Grey',
    url: 'https://books.google.com/books/about/The_Mitochondrial_Free_Radical_Theory_of.html?id=peEGAAAACAAJ',
  },
  {
    title: 'Tractatus Logico-Philosophicus',
    author: 'Ludwig Wittgenstein',
    url: 'https://broadviewpress.com/product/tractatus-logico-philosophicus/#tab-description',
  },
  {
    title: 'Made in America',
    subtitle: 'A Social History of American Culture and Character',
    author: 'Claude S. Fischer',
    url: 'https://academic.oup.com/jsh/article-abstract/45/2/515/1238922?redirectedFrom=fulltext',
  },
  {
    title: 'Is Facebook Making Us Lonely?',
    author: 'Stephen Marche',
    url: 'https://www.theatlantic.com/magazine/archive/2012/05/is-facebook-making-us-lonely/308930/',
  },
  {
    title: 'Cadillac Desert',
    subtitle: 'The American West and Its Disappearing Water',
    author: 'Marc Reisner',
    url: 'https://www.penguinrandomhouse.com/books/323685/cadillac-desert-by-marc-reisner/',
  },
]

const seventhList: ReadingListItem[] = [
  {
    title: 'The Fable of the Bees',
    subtitle: 'Or Private Vices, Publick Benefits',
    author: 'Bernard Mandeville',
    url: 'https://www.penguinrandomhouse.com/books/261065/the-fable-of-the-bees-by-bernard-mandeville/',
  },
  {
    title: 'The Design of Everyday Things',
    author: 'Donald A. Norman',
    url: 'https://mitpress.mit.edu/books/design-everyday-things',
  },
  {
    title: 'States of Injury',
    subtitle: 'Power and Freedom in Late Modernity',
    author: 'Wendy Brown',
    url: 'https://press.princeton.edu/books/paperback/9780691029894/states-of-injury',
  },
  {
    title: 'Republic',
    author: 'Plato',
    url: 'https://www.simonandschuster.com/books/Republic/Plato/Enriched-Classics/9781416599708#:~:text=Republic%20%7C%20Book%20by%20Plato%20%7C%20Official%20Publisher%20Page%20%7C%20Simon%20%26%20Schuster',
  },
  {
    title: "What Money Can't Buy",
    subtitle: 'The Moral Limits of Markets',
    author: 'Michael J. Sandel',
    url: 'https://scholar.harvard.edu/sandel/publications/what-money-cant-buy-moral-limits-markets',
  },
  {
    title: 'Overheated',
    subtitle: 'The Human Cost of Climate Change',
    author: 'Andrew T. Guzman',
    url: 'https://global.oup.com/academic/product/overheated-9780199933877?cc=us&lang=en&',
  },
  {
    title: 'A Discourse on Inequality',
    author: 'Jean-Jacques Rousseau',
    url: 'https://www.penguinrandomhouse.com/books/322673/a-discourse-on-inequality-by-jean-jacques-rousseau/',
  },
]

const eighthList: ReadingListItem[] = [
  {
    title: 'Algebraic Statistics for Computational Biology',
    author: 'Bernd Sturmfels and Lior Pachter',
    url: 'https://academic.oup.com/bib/article/8/2/138/221528',
  },
  {
    title: 'One Two Three... Infinity',
    subtitle: 'Facts and Speculations of Science',
    author: 'George Gamow',
    url: 'https://store.doverpublications.com/0486256642.html',
  },
  {
    title: 'Algorithms',
    author: 'Sanjoy Dasgupta, Christos Papadimitriou, and Umesh Vazirani',
    url: 'https://www.mheducation.com/highered/product/algorithms-dasgupta-papadimitriou/M9780073523408.html',
  },
  {
    title: 'How journals like Nature, Cell and Science are damaging science',
    author: 'Randy Schekman',
    url: 'https://www.theguardian.com/commentisfree/2013/dec/09/how-journals-nature-science-cell-damage-science',
  },
  {
    title: 'Seeker, Doer, Giver, Ponderer',
    subtitle: "A Billionaire Mathematician's Life of Ferocious Curiosity",
    author: 'William J. Broad',
    url: 'https://www.nytimes.com/2014/07/08/science/a-billionaire-mathematicians-life-of-ferocious-curiosity.html',
  },
  {
    title: 'AdWords and Generalized On-line Matching',
    author: 'Aranyak Mehta, Amin Saberi, Umesh Vazirani, Vijay Vazirani',
    url: 'https://dl.acm.org/doi/abs/10.1109/SFCS.2005.12',
  },
  {
    title: 'QED',
    subtitle: 'The Strange Theory of Light and Matter',
    author: 'Richard P. Feynman',
    url: 'https://press.princeton.edu/books/paperback/9780691164090/qed',
  },
  {
    title: 'The Master and Margarita',
    author: 'Mikhail Bulgakov',
    url: 'https://www.penguinrandomhouse.com/books/531360/the-master-and-margarita-by-mikhail-bulgakov-a-newly-revised-translation-by-richard-pevear-and-larissa-volokhonsky-introduction-by-richard-pevear-foreword-by-boris-fishman/9780143108276/readers-guide/',
  },
  {
    title: "Science Faculty's Subtle Gender Biases Favor Male Students",
    author: 'Moss-Racusin, Dovidio, Brescoll, Graham, and Handelsman',
    url: 'https://www.pnas.org/content/109/41/16474',
  },
  {
    title: 'Study Fails to Confirm Existence of Arsenic-Based Life',
    author: 'Erika Check Hayden',
    url: 'https://www.scientificamerican.com/article/study-fails-to-confirm-existence/',
  },
  {
    title: 'Molecular Biology of the Cell',
    author: 'Alberts, Bray, Lewis, Raff, Roberts, and Watson',
    url: 'ncbi.nlm.nih.gov/books/NBK20684/',
  },
  {
    title: 'Understanding Physics',
    author: 'Isaac Asimov',
    url: 'https://encantobooks.com/product/understanding-physics-asimov-isaac/',
  },
  {
    title: 'A Beautiful Mind',
    author: 'Sylvia Nasar',
    url: 'https://www.simonandschuster.com/books/A-Beautiful-Mind/Sylvia-Nasar/9781451628425',
  },
  {
    title: 'The Cyberiad',
    subtitle: 'Fables for the Cybernectic Age',
    author: 'Stanislaw Lem',
    url: 'https://www.penguin.com.au/books/the-cyberiad-9780241467992',
  },
]

const readingLists: ReadingListItem[][] = [firstList, secondList, thirdList, fourthList, fifthList, sixthList, seventhList, eighthList]

export default readingLists
