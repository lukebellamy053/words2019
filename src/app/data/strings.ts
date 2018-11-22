import { papers, submissions } from './submissions';
import { manea_bio, puzynina_bio, restivo_bio, richomme_bio, saarela_bio, vuskovic_bio } from './bios';

export const content = {
  'title': 'Words 2019',
  'subtitle': 'Some content here',
  'location': 'Loughborough University, England',
  'date': '2019 September 9-13',
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
        'img': '/assets/imgs/placeholder.png',
        'deceased': true,
        'name': 'Florin Manea',
        'title': 'content TBA',
        'website': 'http://flmanea.blogspot.com',
        'bio': manea_bio,
        'sections': [
          {
            'title': 'Test Title',
            'text': 'This is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\n'
          },
          {
            'title': 'Test Title 2',
            'text': 'This is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\n'
          }
        ]
      },
      {
        'img': '/assets/imgs/placeholder.png',
        'name': 'Svetlana Puzynina',
        'title': 'content TBA',
        'website': 'http://math.nsc.ru/~puzynina/',
        'bio': puzynina_bio,
        'sections': [
          {
            'title': 'Test Title',
            'text': 'This is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\nThis is some test content\n'
          }
        ]
      },
      {
        'img': '/assets/imgs/placeholder.png',
        'name': 'Antonio Restivo',
        'title': 'content TBA',
        'website': 'https://scholar.google.it/citations?user=QkUS2AwAAAAJ&hl=en',
        'bio': restivo_bio
      },
      {
        'img': '/assets/imgs/placeholder.png',
        'name': 'Gwenaël Richomme',
        'title': 'content TBA',
        'website': 'http://www.lirmm.fr/~richomme/',
        'bio': 'something to say'
      },
      {
        'img': '/assets/imgs/placeholder.png',
        'name': 'Aleksi Saarela',
        'title': 'content TBA',
        'website': 'http://users.utu.fi/amsaar/',
        'bio': saarela_bio
      },
      {
        'img': '/assets/imgs/placeholder.png',
        'name': 'Kristina Vušković',
        'title': 'content TBA',
        'website': 'https://engineering.leeds.ac.uk/staff/249/kristina_vuskovic',
        'bio': vuskovic_bio
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
      name: 'ATCS (European Association for Theoretical Computer Science)',
      logo: '/assets/imgs/sponsors/Eatcslogo.jpg'
    }
  ]
};
