import { papers, submissions } from './submissions';
import { manea_bio, puzynina_bio, restivo_bio, richomme_bio, saarela_bio, vuskovic_bio } from './bios';
import { manea_abstract, puzynina_abstract, restivo_abstract, richomme_abstract, saarela_abstract, vuskovic_abstract } from './abstracts';

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
  },
  'dates': {
    'title': 'Important Dates',
    'groups': [
      {
        'name': 'Submissions',
        'dates': [
          {
            'name': 'Deadline For Submission',
            'date': 1555023600000
          },
          {
            'name': 'Notification To Authors',
            'date': 1558306800000
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
        'title': 'Title TBA',
        'website': 'http://flmanea.blogspot.com',
        'sections': [
          {
            'title': 'Bio',
            'text': manea_bio,
          },
          {
            'title': 'Abstract',
            'text': manea_abstract,
          }
        ]
      },
      {
        'img': '/assets/imgs/speakers/SP-small.jpg',
        'name': 'Svetlana Puzynina',
        'title': 'Title TBA',
        'website': 'http://math.nsc.ru/~puzynina/',
        'sections': [
          {
            'title': 'Bio',
            'text': puzynina_bio,
          },
          {
            'title': 'Abstract',
            'text': puzynina_abstract,
          }
        ]
      },
      {
        'img': '/assets/imgs/speakers/AR-small.jpg',
        'name': 'Antonio Restivo',
        'title': 'Title TBA',
        'website': 'https://scholar.google.it/citations?user=QkUS2AwAAAAJ&hl=en',
        'sections': [
          {
            'title': 'Bio',
            'text': restivo_bio,
          },
          {
            'title': 'Abstract',
            'text': restivo_abstract,
          }
        ]
      },
      {
        'img': '/assets/imgs/speakers/GR-small.jpg',
        'name': 'Gwenaël Richomme',
        'title': 'Title TBA',
        'website': 'http://www.lirmm.fr/~richomme/',
        'sections': [
          {
            'title': 'Bio',
            'text': richomme_bio,
          },
          {
            'title': 'Abstract',
            'text': richomme_abstract,
          }
        ]
      },
      {
        'img': '/assets/imgs/speakers/AS-small.jpg',
        'name': 'Aleksi Saarela',
        'title': 'Title TBA',
        'website': 'http://users.utu.fi/amsaar/',
        'sections': [
          {
            'title': 'Bio',
            'text': saarela_bio,
          },
          {
            'title': 'Abstract',
            'text': saarela_abstract,
          }
        ]
      },
      {
        'img': '/assets/imgs/speakers/KV-small.jpg',
        'name': 'Kristina Vušković',
        'title': 'Title TBA',
        'website': 'https://engineering.leeds.ac.uk/staff/249/kristina_vuskovic',
        'sections': [
          {
            'title': 'Bio',
            'text': vuskovic_bio,
          },
          {
            'title': 'Abstract',
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
            'name': 'Robert Mercas',
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
            'name': 'Robert Mercas',
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
            "name": "Robert Mercas",
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
  'sponsors': [
    {
      name: 'Institute of Advanced Studies at Loughborough University',
      logo: '/assets/imgs/sponsors/Lboro_logo.png'
    },
    {
      name: 'European Association for Theoretical Computer Science affiliated Conference',
      logo: '/assets/imgs/sponsors/EATCS_logo.jpg'
    },
    {
      name: 'Springer-Verlag',
      logo: '/assets/imgs/sponsors/Springer_logo.png'
    },
  ]
};
