module.exports.bemjson = {
  block: 'product',
  mix: [{block: 'card', mods: {'view': 'default','border': 'all'}}],
  content: [
    { block: 'product',
      elem: 'content',
      mix: [
        {block: 'card', elem: 'content', elemMods: {'space-a': 'm'}}
      ],
      content: [
        { block: 'product',
          elem: 'image',
          mix: [
            {block: 'image'},
            {block: 'theme'},
          ]
        }
      ]
    },
    { block: 'product',
      elem: 'footer',
      mix: [
        {block: 'card', elem: 'footer', elemMods: {'space-a': 'm'}}
      ],
      content: [
        { block: 'text',
          mods: {'view': 'primary','size': 'm'},
          content: [
            { block: 'text',
              elem: 'word',
              elemMods: {'width': 'l'}
            }
          ]
        },
        { block: 'text',
          mods: {'view': 'primary','size': 's'},
          content: [
            { block: 'text',
              elem: 'word',
              elemMods: {'width': 'm'}
            }
          ]
        }
      ]
    }
  ]
}
