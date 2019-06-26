module.exports.bemjson = {
  block: 'commercial',
  mix: [
    {block: 'card', mods: {'view': 'default'}},
    {block: 'theme', mods: {'color': 'project-brand'}}
  ],
  content: [
    { block: 'commercial',
      elem: 'pic',
      mix: [
        {block: 'card', elem: 'content', elemMods: {'space-a': 'xxl'}}
      ],
      content: [
        { block: 'commercial',
          elem: 'image',
          mix: [
            {block: 'image'},
            {block: 'theme', mods: {'color': 'project-inverse'}}
          ]
        },
        
      ]
    },
    { block: 'commercial',
      elem: 'info',
      mix: [
        {block: 'card', elem: 'footer', elemMods: {'space-a': 'xxl'}}
      ],
      content: [
        { block: 'commercial',
          elem: 'text',
          mix: [
            {block: 'text', mods: {'view': 'primary', 'size': 's'}}
          ],
          content: [
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
              elemMods: {'width': 'l'}
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
              elemMods: {'width': 'm'}
            },
            { block: 'text',
              elem: 'word',
              elemMods: {'width': 'l'}
            },
            { block: 'text',
              elem: 'word',
              elemMods: {'width': 'm'}
            },
          ]
        },
        { block: 'commercial',
          elem: 'navigation-wrapper',
          content: [
            { block: 'commercial',
              elem: 'navigation'
            },
            { block: 'commercial',
              elem: 'navigation'
            },
            { block: 'commercial',
              elem: 'navigation'
            }
          ]
        }
      ]
    }
  ]
}