module.exports.bemjson = {
  block: 'footer',
  content: [
    { block: 'footer',
      elem: 'text',
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
          elemMods: {'width': 's'}
        }
      ]
    },
    { block: 'footer',
      elem: 'text',
      mix: [
        {block: 'text', mods: {'view': 'primary', 'size': 'l'}}
      ],
      content: [
        { block: 'text',
          elem: 'word',
          elemMods: {'width': 'l'}
        }
      ]
    }
  ]
}