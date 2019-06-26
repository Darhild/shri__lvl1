module.exports.bemjson = {
  block: 'event',
  mix: [
    { block: 'card', mods: {'view': 'default'}},
    { block: 'theme', mods: {'color': 'project-inverse'}}
  ],
  content: [
    { block: 'event',
      elem: 'content',
      mix: [
        { block: 'card', elem: 'content', elemMods: {'vertical-align': 'center', 'distribute': 'center', 'space-a': 'xxl'}}
      ],
      content: [
        { block: 'event',
          elem: 'participant',
          content: [
            { block: 'event',
              elem: 'avatar',
              mix: [
                { block: 'avatar', mods: {'size': 'm'}}
              ]
            },
            { block: 'event',
              elem: 'brand',
              mix: [
                { block: 'brand-logo', mods: {'name': 'mts', 'size': 'm'}}
              ]
            }
          ]
        },
        { block: 'event',
          elem: 'title',
          mix: [
            {block: 'text', mods: {'view': 'primary', 'size': 'xxl', 'align': 'center'}}
          ],
          content: [
            { block: 'text',
              elem: 'word',
              elemMods: {'width': 'l'}
            }
          ]
        },
        { block: 'event',
          elem: 'description',
          mix: [
            {block: 'text', mods: {'view': 'primary', 'size': 'l', 'align': 'center'}}
          ],
          content: [
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
              elemMods: {'width': 'l'}
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
              elemMods: {'width': 'l'}
            },
            { block: 'text',
              elem: 'word',
              elemMods: {'width': 'l'}
            },
            { block: 'text',
              elem: 'word',
              elemMods: {'width': 'l'}
            }
          ]
        }
      ]
    },
    { block: 'event',
      elem: 'footer',
      mix: [
        { block: 'card', elem: 'footer', elemMods: {'vertical-align': 'center', 'distribute': 'center', 'space-a': 'xxl'}}
      ],
      content: [
        { block: 'event',
          elem: 'link',
          mix: [
            {block: 'text', mods: {'view': 'link', 'size': 'xl', 'align': 'center'}}
          ],
          content: [
            { block: 'text',
              elem: 'word',
              elemMods: {'width': 's'}
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