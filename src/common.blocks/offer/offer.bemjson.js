module.exports.bemjson = {
  block: 'offer',
  mix: [
    { block: 'theme', mods: {'color': 'megafon-brand'}},
    { block: 'card', mods: {'view': 'default'}}
  ],
  content: [
    { block: 'offer',
      elem: 'partner',
      mix: [{block: 'card', elem: 'content', elemMods: {'space-a': 'xl'}}
      ],
      content: [
        { block: 'offer',
          elem: 'logo',
          mix: [
           { block: 'brand-logo', mods: {'name': 'megafon', 'size': 'm'}}
          ]
        }
      ]
    },
    { block: 'offer',
      elem: 'footer',
      mix: [
      { block: 'card', elem: 'footer', mods: {'space-a': 'xl'}}
      ],
      content: [
       { block: 'offer',
         elem: 'discount',
         mix: [
           {block: 'text', mods: {'view': 'ghost', 'size': 's'}}
         ],
         content: [
           { block: 'text',
             elem: 'word',
             elemMods: {'width': 'm'}
           }
         ]
        },
        { block: 'offer',
         elem: 'name',
         mix: [
           {block: 'text', mods: {'view': 'primary', 'size': 'xxl'}}
         ],
         content: [
           { block: 'text',
             elem: 'word',
             elemMods: {'width': 'm'}
           }
         ]
        },
        { block: 'offer',
         elem: 'description',
         mix: [
           {block: 'text', mods: {'view': 'primary', 'size': 'm'}}
         ],
         content: [
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
             elemMods: {'width': 'm'}
           },
           { block: 'text',
             elem: 'word',
             elemMods: {'width': 's'}
           },
           { block: 'text',
             elem: 'word',
             elemMods: {'width': 'l'}
           }
         ]
        }
      ]
    }
  ]
}