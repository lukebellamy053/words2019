import { papers, submissions, extra } from './submissions';
import { manea_bio, puzynina_bio, restivo_bio, richomme_bio, saarela_bio, vuskovic_bio } from './bios';
import { manea_abstract, puzynina_abstract, restivo_abstract, richomme_abstract, saarela_abstract, vuskovic_abstract } from './abstracts';
import { registration, location } from './conference_info';

export const content = {
  'title': 'Words 2019',
  'subtitle': '12th International Conference on Words',
  'location': 'Loughborough University, England',
  'date': '2019 September 9-13th',
  'images' : {
    'welcome': ['/assets/imgs/lboro_1.jpg'],
    'dates': []
  },
  'submissions': {
    'papers': {
      'title': 'Call For Papers',
      'content': papers
    },
    'submission': {
      'title': 'Paper Submissions',
      'content': submissions
    },
    'extra': {
      'title': 'Conference Posters',
      'content': extra
    },
    'accepted_papers': {
      'title': 'Accepted Papers',
      'papers': [
        
        {
          'authors': [
      'Adrian Atanasiu',
      'Ghajendran Poovanandran',
      'Wen Chean Teh '
    ],
    'title': 'Parikh Determinants'
    },

{
          'authors': [
      'Aseem Baranwal',
      'Jeffrey Shallit '
    ],
    'title': 'Critical exponent of infinite balanced words via the Pell number system'
  },

{
          'authors': [
      'Aseem Baranwal',
      'Jeffrey Shallit '
    ],
    'title': 'Repetitions in infinite palindrome-rich words'
  },

{
          'authors': [
      'Amanda Burcroff',
      'Eric Winsor '
    ],
    'title': 'Generalized Lyndon Factorizations of Infinite Words'
  },

{
          'authors': [
      'Arturo Carpi',
      'Flavio Dalessandro '
    ],
    'title': 'On the commutative equivalence of bounded semi-linear codes'
  },

{
          'authors': [
      'Trevor Clokie',
      'Daniel Gabric',
      'Jeffrey Shallit '
    ],
    'title': 'Circularly squarefree words and unbordered conjugates: a new approach'
  },

{
          'authors': [
      'James D. Currie',
      'Lucas Mol '
    ],
    'title': 'The undirected repetition threshold'
  },

{
          'authors': [
      'Alessandro De Luca',
      'Alma D\'Aniello '
    ],
    'title': 'Characteristic parameters and special trapezoidal words'
  },

{
          'authors': [
      'Francesco Dolce',
      'Dominique Perrin '
    ],
    'title': 'Return words and bifix codes in eventually dendric sets'
  },

{
          'authors': [
      'Marisa Gaetz',
      'Caleb Ji '
    ],
    'title': 'Enumeration and Extensions of Word-representable Graphs'
  },

{
          'authors': [
      'Cyril Gavoille',
      'Ghazal Kachigar',
      'Gilles Zémor '
    ],
    'title': 'Localisation-Resistant Random Words with Small Alphabet'
  },

{
          'authors': [
      'Vladimir Gusev',
      'Elena Pribavkina '
    ],
    'title': 'On codeword lengths guaranteeing synchronization'
  },

{
          'authors': [
      'Štěpán Holub '
    ],
    'title': 'Binary intersection revisited'
  },

{
          'authors': [
      'Václav Košík',
      'Štěpán Starosta '
    ],
    'title': 'On substitutions closed under derivation: examples'
  },

{
          'authors': [
            'Marie Lejeune',
            'Michel Rigo',
            'Matthieu Rosenfeld '
          ],
          'title': 'Templates for the k-binomial complexity of the Tribonacci word'
        },

{
          'authors': [
      'Kateřina Medková '
    ],
    'title': 'Derivated sequences of Arnoux--Rauzy sequences'
  },

{
          'authors': [
      'Tim Ng',
      'Pascal Ochem',
      'Jeffrey Shallit',
      'Narad Rampersad '
    ],
    'title': 'New results on pseudosquare avoidance'
  },

{
          'authors': [
      'Jarkko Peltomäki',
      'Markus Whiteland '
    ],
    'title': 'Every nonnegative real number is a critical abelian exponent'
  },

{
          'authors': [
      'Josef Rukavicka '
    ],
    'title': 'Construction Of A Rich Word Containing Given Two Factors'
  },

{
          'authors': [
      'Andrew Ryzhikov '
    ],
    'title': 'Mortality and Synchronization of Unambiguous Finite Automata'
  },

{
          'authors': [
      'Luigi Santocanale '
    ],
    'title': 'On discrete idempotent paths'
  },
        
      ]
    }
  },
  'dates': {
    'title': 'Important Dates',
    'groups': [
      {
        'name': 'Submissions',
        'dates': [
          {
            'name': 'Deadline For Submission',
            'date': 1556013599000
          },
          {
            'name': 'Notification To Authors',
            'date': 1558569599000
          },
          {
            'name': 'Camera-ready Version',
            'date': 1559516400000
          }
        ]
      },
      {
        'name': 'Other',
        'dates': [
          {
            'name': 'Conference',
            'text': '9-13th September 2019'
          }
        ]
      }
    ]
  },
  'speakers': {
    'title': 'Invited Speakers',
    'speakyBois': [
      {
        'img': '/assets/imgs/speakers/FM-small.jpg',
        'name': 'Florin Manea',
        'website': 'http://flmanea.blogspot.com',
        'sections': [
          {
            'title': 'Bio',
            'text': manea_bio,
          },
          {
            'title': 'Matching Patterns with Variables',
            'text': manea_abstract,
          }
        ]
      },
      {
        'img': '/assets/imgs/speakers/SP-small.jpg',
        'name': 'Svetlana Puzynina',
        'website': 'http://math.nsc.ru/~puzynina/',
        'sections': [
          {
            'title': 'Bio',
            'text': puzynina_bio,
          },
          {
            'title': 'Abelian properties of words',
            'text': puzynina_abstract,
          }
        ]
      },
      {
        'img': '/assets/imgs/speakers/AR-small.jpg',
        'name': 'Antonio Restivo',
        'website': 'https://scholar.google.it/citations?user=QkUS2AwAAAAJ&hl=en',
        'sections': [
          {
            'title': 'Bio',
            'text': restivo_bio,
          },
          {
            'title': 'On Sets of Words of Rank Two',
            'text': restivo_abstract,
          }
        ]
      },
      {
        'img': '/assets/imgs/speakers/GR-small.jpg',
        'name': 'Gwenaël Richomme',
        'website': 'http://www.lirmm.fr/~richomme/',
        'sections': [
          {
            'title': 'Bio',
            'text': richomme_bio,
          },
          {
            'title': 'S-adicity and property preserving morphisms',
            'text': richomme_abstract,
          }
        ]
      },
      {
        'img': '/assets/imgs/speakers/AS-small.jpg',
        'name': 'Aleksi Saarela',
        'website': 'http://users.utu.fi/amsaar/',
        'sections': [
          {
            'title': 'Bio',
            'text': saarela_bio,
          },
          {
            'title': 'Independent Systems of Word Equations: From Ehrenfeucht to Eighteen',
            'text': saarela_abstract,
          }
        ]
      },
      {
        'img': '/assets/imgs/speakers/KV-small.jpg',
        'name': 'Kristina Vušković',
        'website': 'https://engineering.leeds.ac.uk/staff/249/kristina_vuskovic',
        'sections': [
          {
            'title': 'Bio',
            'text': vuskovic_bio,
          },
          {
            'title': 'Structure of graph classes and algorithms',
            'text': vuskovic_abstract,
          }
        ]
      }
    ],
    'abstract': [
      {
        'title': 'A header',
        'text': 'This is a large amount of text that talks about something or other'
      },
      {
        'title': 'A header 2',
        'text': 'This is a second large amount of text that talks about something or other'
      }
    ]
  },
  'committees': {
    'title': 'Committees',
    'groups': [
      {
        'name': 'Programme Committee',
        "chairs": [
          {
            'name': 'Robert Mercaș',
            'location': 'Loughborough',
            'position': 'Co-Chair'
          },
          {
            'name': 'Daniel Reidenbach',
            'location': 'Loughborough',
            'position': 'Co-Chair'
          }
        ],
        'members': [
          {
            'name': 'Marie-Pierre Béal',
            'location': 'Paris'
          },
          {
            'name': 'Srecko Brlek',
            'location': 'Montreal'
          },
          {
            'name': 'Émilie Charlier',
            'location': 'Liège'
          },
          {
            'name': 'Volker Diekert',
            'location': 'Stuttgart'
          },
          {
            'name': 'Gabriele Fici',
            'location': 'Palermo'
          },
          {
            'name': 'Anna Frid',
            'location': 'Marseille'
          },
          {
            'name': 'Amy Glen',
            'location': 'Murdoch'
          },
          {
            'name': 'Štěpán Holub',
            'location': 'Prague'
          },
          {
            'name': 'Shunsuke Inenaga',
            'location': 'Kyushu'
          },
          {
            'name': 'Robert Mercaș',
            'location': 'Loughborough',
            'position': 'Co-Chair'
          },
          {
            'name': 'Dirk Nowotka',
            'location': 'Kiel'
          },
          {
            'name': 'Jarkko Peltomäki',
            'location': 'Turku'
          },
          {
            'name': 'Edita Pelantová',
            'location': 'Prague'
          },
          {
            'name': 'Narad Rampersad',
            'location': 'Winnipeg'
          },
          {
            'name': 'Daniel Reidenbach',
            'location': 'Loughborough',
            'position': 'Co-Chair'
          },
          {
            'name': 'Jeffrey Shallit',
            'location': 'Waterloo'
          },
          {
            'name': 'Arseny Shur',
            'location': 'Yekaterinburg'
          }
        ]
      },
      {
        "name": "Steering Committee",
        "members": [
          {
            "name": "Valérie Berthé",
            "location": "Paris"
          },
          {
            "name": "Srečko Brlek",
            "location": "Montreal"
          },
          {
            "name": "Julien Cassaigne",
            "location": "Marseille"
          },
          {
            "name": "Maxime Crochemore",
            "location": "London"
          },
          {
            'deceased': true,
            "name": "Aldo de Luca",
            "location": "Naples"
          },
          {
            "name": "Anna Frid",
            "location": "Marseille"
          },
          {
            "name": "Juhani Karhumäki",
            "location": "Turku",
            "position": "Chair"
          },
          {
            "name": "Jean Néraud",
            "location": "Rouen"
          },
          {
            "name": "Dirk Nowotka",
            "location": "Kiel"
          },
          {
            "name": "Edita Pelantová",
            "location": "Prague"
          },
          {
            "name": "Dominique Perrin",
            "location": "Marne-la-Vallée"
          },
          {
            "name": "Antonio Restivo",
            "location": "Palermo"
          },
          {
            "name": "Christophe Reutenauer",
            "location": "Montreal"
          },
          {
            "name": "Jeffrey Shallit",
            "location": "Waterloo"
          },
          {
            "name": "Mikhail Volkov",
            "location": "Yekaterinburg"
          }
        ]
      },
      {
        "name": "Organising Committee",
        "members": [
          {
            "name": "Joel D. Day",
            "location": "Loughborough"
          },
          {
            "name": "Laura K. Hutchinson",
            "location": "Loughborough"
          },
          {
            "name": "Manfred Kufleitner",
            "location": "Loughborough"
          },
          {
            "name": "Robert Mercaș",
            "location": "Loughborough",
            "position": "Co-Chair"
          },
          {
            "name": "Daniel Reidenbach",
            "location": "Loughborough",
            "position": "Co-Chair"
          },
          {
            "name": "Alex M. Smith",
            "location": "Loughborough"
          }
        ]
      }
    ]
  },
  'conference_info': {
    title: 'Conference Information',
    groups: [
      {
        id: 'registration',
        title: 'Registration',
        content: registration
      },
      {
        id: 'location',
        title: 'Location',
        content: location
      },
/*
      {
        id: 'schedule',
        title: 'Schedule',
        schedule: [
          {
            day: 'Monday',
            date: '20/05/2019',
            times: [
              {
                startTime: '9:00',
                endTime: '11:00',
                event: 'Some Event'
              },
              {
                startTime: '11:00',
                endTime: '13:00',
                event: 'Reading a document'
              },
            ]
          },
          {
            day: 'Tuesday',
            date: '21/05/2019',
            times: [
              {
                startTime: '9:00',
                endTime: '11:00',
                event: 'Some Event'
              },
              {
                startTime: '11:00',
                endTime: '13:00',
                event: 'Reading a document'
              },
            ]
          }
        ]
      }
*/
    ]
  },
  'sponsors': [
    {
      name: 'Institute of Advanced Studies at Loughborough University',
      logo: '/assets/imgs/sponsors/IAS_COL.png'
    },
    {
      name: 'Springer-Verlag',
      logo: '/assets/imgs/sponsors/Springer_logo.png'
    },
    {
      name: 'Algorithms',
      logo: '/assets/imgs/sponsors/Algorithms_logo.png'
    },
    {
      name: 'European Association for Theoretical Computer Science',
      logo: '/assets/imgs/sponsors/EATCS_logo.jpg'
    },
  ]
};
