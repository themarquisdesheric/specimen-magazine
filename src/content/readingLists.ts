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

const readingLists: ReadingListItem[][] = [firstList, secondList, thirdList, fourthList, fifthList]

export default readingLists
