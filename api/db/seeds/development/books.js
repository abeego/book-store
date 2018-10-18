exports.seed = function(knex, Promise) {
  return knex('books')
    .del()
    .then(function() {
      return knex('books').insert([
        {
          title: `In Search of Lost Time by Marcel Proust`,
          description: `Swann's Way, the first part of A la 
            recherche de temps perdu, Marcel Proust's seven-part cycle, 
            was published in 1913. In it, Proust introduces the themes 
            that run through the entire work. The narr...`,
          price: 29.2,
        },
        {
          title: `Don Quixote by Miguel de Cervantes`,
          description: `Alonso Quixano, a retired country gentleman in his 
            fifties, lives in an unnamed section of La Mancha with his niece 
            and a housekeeper. He has become obsessed with books of chivalry, 
            and believes their every word to be true, despite the fact that 
            many of the events in them are clearly impossible. Quixano eventually 
            appears to other people to have lost his mind from little 
            sleep and food and because of so much reading.`,
          price: 53.78,
        },
        {
          title: `The Great Gatsby by F. Scott Fitzgerald`,
          description: `The novel chronicles an era that Fitzgerald 
            himself dubbed the "Jazz Age". Following the shock and 
            chaos of World War I, American society enjoyed unprecedented 
            levels of prosperity during the "roaring" 1920s as the economy soared. 
            At the same time, Prohibition, the ban on the sale and manufacture 
            of alcohol as mandated by the Eighteenth Amendment, made millionaires 
            out of bootleggers and led to an increase in organized crime, 
            for example the Jewish mafia. Although Fitzgerald, like Nick Carraway 
            in his novel, idolized the riches and glamor of the age, he was uncomfortable 
            with the unrestrained materialism and the lack of morality that went with it, 
            a kind of decadence.`,
          price: 76.21,
        },
        {
          title: `The Odyssey by Homer`,
          description: `The Odyssey is one of two major ancient Greek epic poems attributed 
          to Homer. It is, in part, a sequel to the Iliad, the other work traditionally ascribed
          to Homer. The poem is fundamental to the modern Western canon. Indeed it is the 
          second—the Iliad being the first—extant work of Western literature. It was probably 
          composed near the end of the eighth century BC, somewhere in Ionia, the Greek-speaking 
          coastal region of what is now Turkey. The poem mainly centers on the Greek hero Odysseus 
          or Ulysses, as he was known in Roman myths) and his long journey home following the fall 
          of Troy. It takes Odysseus ten years to reach Ithaca after the ten-year Trojan War. In 
          his absence, it is assumed he has died, and his wife Penelope and son Telemachus must deal 
          th a group of unruly suitors, the Mnesteres or Proci, competing for Penelope's hand in 
          marriage.`,
          price: 98.12,
        },
        {
          title: `One Hundred Years of Solitude by Gabriel Garcia Marquez`,
          description: `One of the 20th century's enduring works, One Hundred Years of Solitude 
            is a widely beloved and acclaimed novel known throughout the world, and the ultimate 
            achievement in a Nobel Prize–winning career. The novel tells the story of the rise and 
            fall of the mythical town of Macondo through the history of the Buendía family. It 
            is a rich and brilliant chronicle of life and death, and the tragicomedy of humankind. 
            In the noble, ridiculous, beautiful, and tawdry story of the Buendía family, one sees 
            all of humanity, just as in the history, myths, growth, and decay of Macondo, one 
            sees all of Latin Ameri`,
          price: 43.78,
        },
        {
          title: `Madame Bovary by Gustave Flaubert`,
          description: `For daring to peer into the heart of an adulteress and enumerate its 
            contents with profound dispassion, the author of Madame Bovary was tried for "offenses 
            against morality and religion." What shocks us today about Flaubert's devastatingly 
            realized tale of a young woman destroyed by the reckless pursuit of her romantic dreams 
            is its pure artistry: the poise of its narrative structure, the opulence of its prose 
            (marvelously captured in the English translation of Francis Steegmuller), and its creation 
            of a world whose minor figures are as vital as its doomed heroine. In reading Madame Bovary, 
            one experiences a work that remains genuinely revolutionary almost a century and a half 
            after its creation.`,
          price: 120.25,
        },
        {
          title: `Lolita by Vladimir Nabokov`,
          description: `The book is internationally famous for its innovative style and infamous 
            for its controversial subject: the protagonist and unreliable narrator, middle aged 
              Humbert Humbert, becomes obsessed and sexually involved with a twelve-year-old girl 
              named Dolores Haze.`,
          price: 56.98,
        },
        {
          title: `Nineteen Eighty Four by George Orwell`,
          description: `The story follows the life of one seemingly insignificant man, Winston Smith, 
            a civil servant assigned the task of perpetuating the regime's propaganda by falsifying 
            records and political literature so that it appears that the government is always correct 
            in what it says. Smith grows disillusioned with his meager existence and so begins a rebellion 
            against the system that leads to his arrest, torture, and conversion.`,
          price: 76.39,
        },
        {
          title: `Invisible Man by Ralph Ellison`,
          description: `The novel addresses many of the social and intellectual issues facing 
            African-Americans in the early twentieth century, including black nationalism, the 
            relationship between black identity and Marxism, and the reformist racial policies of Booker T. 
            Washington, as well as issues of individuality and personal identity.`,
          price: 87.3,
        },
        {
          title: `Hamlet by William Shakespeare`,
          description: `The Tragedy of Hamlet, Prince of Denmark, or more simply Hamlet, 
            is a tragedy by William Shakespeare, believed to have been written between 1599 
            and 1601. The play, set in Denmark, recounts how Prince Hamlet exacts revenge 
            on his uncle Claudius, who has murdered Hamlet's father, the King, and then taken 
            the throne and married Gertrude, Hamlet's mother. The play vividly charts the 
            course of real and feigned madness—from overwhelming grief to seething rage—and 
            explores themes of treachery, revenge, incest, and moral corruption.`,
          price: 43.56,
        },
      ]);
    });
};
