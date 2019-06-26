module.exports.bemjson = {
  block: 'collect',
  mix: [
    {block: 'card', mods: {'view': 'default','border': 'all'}},
    {block: 'theme', mods: {'color': 'project-inverse'}}
  ],
  content: [
    { block: 'collect',
      elem: 'image',
      mix: [
        { block: 'card', elem: 'content'},
        { block: 'image' }
      ]
    },
    { block: 'collect',
      elem: 'progressbar',
      content: [
        { block: 'collect',
          elem: 'progressbar-scale'
        }
      ]
    },
    { block: 'collect',
      elem: 'footer',
      mix: [
        { block: 'card', elem: 'footer', elemMods: {'space-a': 'l'}}
      ],
      content: [
        { block: 'collect',
          elem: 'title',
          mix: [
            {block: 'text', mods: {'view': 'primary', 'size': 'l'}}
          ],
          content: [
            { block: 'text',
              elem: 'word',
              elemMods: {'width': 'l'}
            },
            { block: 'text',
              elem: 'word',
              elemMods: {'width': 'm'}
            }
          ]
        },
        { block: 'collect',
          elem: 'description',
          mix: [
            {block: 'text', mods: {'view': 'secondary', 'size': 'm'}}
          ],
          content: [
            { block: 'text',
              elem: 'word',
              elemMods: {'width': 's'}
            },
            { block: 'text',
              elem: 'word',
              elemMods: {'width': 'l'}
            },
            { block: 'text',
              elem: 'word',
              elemMods: {'width': 'm'}
            },
            { block: 'text',
              elem: 'word',
              elemMods: {'width': 's'}
            },
            { block: 'text',
              elem: 'word',
              elemMods: {'width': 's'}
            },
            { block: 'text',
              elem: 'word',
              elemMods: {'width': 'l'}
            },
            { block: 'text',
              elem: 'word',
              elemMods: {'width': 'm'}
            },
            { block: 'text',
              elem: 'word',
              elemMods: {'width': 'm'}
            },
            { block: 'text',
              elem: 'word',
              elemMods: {'width': 'l'}
            },
            { block: 'text',
              elem: 'word',
              elemMods: {'width': 'l'}
            },
            { block: 'text',
              elem: 'word',
              elemMods: {'width': 's'}
            }
          ]
        }
      ]
    }
  ]
}