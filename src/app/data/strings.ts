import { papers, submissions } from './submissions';
import { manea_bio, puzynina_bio, richomme_bio, saarela_bio, vuskovic_bio } from './bios';

export const content = {
  'title': 'Words 2019',
  'subtitle': 'Some content here',
  'location': 'Loughborough University, England',
  'date': 'Coming Soon',
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
            'start': 1567983600000,
            'end': 1568329200000
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
        'name': 'Florin Manea',
        'title': 'content TBA',
        'website': 'http://flmanea.blogspot.com',
        'bio': manea_bio
      },
      {
        'img': '/assets/imgs/placeholder.png',
        'name': 'Svetlana Puzynina',
        'title': 'content TBA',
        'website': 'http://math.nsc.ru/~puzynina/',
        'bio': puzynina_bio
      },
      {
        'img': '/assets/imgs/placeholder.png',
        'name': 'Gwenaël Richomme',
        'title': 'content TBA',
        'website': 'http://www.lirmm.fr/~richomme/',
        'bio': richomme_bio
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
            'position': 'co-chair'
          },
          {
            'name': 'Daniel Reidenbach',
            'location': 'Loughborough',
            'position': 'co-chair'
          }
        ],
        'members': [
          {
            'name': 'Marie-Pierre BÃ©al',
            'location': 'Paris'
          },
          {
            'name': 'Srecko Brlek',
            'location': 'Montreal'
          },
          {
            'name': 'Ã‰milie Charlier',
            'location': 'LiÃ¨ge'
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
            'name': 'Å tÄ›pÃ¡n Holub',
            'location': 'Prague'
          },
          {
            'name': 'Shunsuke Inenaga',
            'location': 'Kyushu'
          },

          {
            'name': 'Dirk Nowotka',
            'location': 'Kiel'
          },
          {
            'name': 'Jarkko PeltomÃ¤ki',
            'location': 'Turku'
          },
          {
            'name': 'Edita PelantovÃ¡',
            'location': 'Prague'
          },
          {
            'name': 'Narad Rampersad',
            'location': 'Winnipeg'
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
        "chairs":[
            {
            "name": "Juhani KarhumÃ¤ki",
            "location": "Turku, Finland",
            "position": "Chair"
          }
        ],
        "members": [
          {
            "name": "ValÃ©rie BerthÃ©",
            "location": "Paris, France"
          },
          {
            "name": "SreÄko Brlek",
            "location": "Montreal, Canada"
          },
          {
            "name": "Julien Cassaigne",
            "location": "Marseille, France"
          },
          {
            "name": "Maxime Crochemore",
            "location": "London, United Kingdom"
          },
          {
            "name": "Aldo de Luca",
            "location": "Naples, Italy"
          },
          {
            "name": "Anna Frid",
            "location": "Marseille, France"
          },
          {
            "name": "Jean NÃ©raud",
            "location": "Rouen, France"
          },
          {
            "name": "Dirk Nowotka",
            "location": "Kiel, Germany"
          },
          {
            "name": "Edita PelantovÃ¡",
            "location": "Prague, Czech Republic"
          },
          {
            "name": "Dominique Perrin",
            "location": "Marne-la-VallÃ©e, France"
          },
          {
            "name": "Antonio Restivo",
            "location": "Palermo, Italy"
          },
          {
            "name": "Christophe Reutenauer",
            "location": "Montreal, Canada"
          },
          {
            "name": "Jeffrey Shallit",
            "location": "Waterloo, Canada"
          },
          {
            "name": "Mikhail Volkov",
            "location": "Yekaterinburg, Russia"
          }
        ]
      }
    ]
  }
};
