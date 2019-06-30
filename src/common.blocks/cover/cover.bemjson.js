module.exports.bemjson = {
  block: 'cover',
  mix: [
    {block: 'card', mods: {'view': 'default'}},
    {block: 'theme', mods: {'color': 'project-brand'}}
  ],
  content: [
    { block: 'cover',
      elem: 'info',
      mix: [
        {block: 'card', elem: 'content', elemMods: {'space-a': 'xxl'}}
      ],
      content: [
        { block: 'cover',
          elem: 'preview',
          mix: [
            { block: 'image'},
            { block: 'theme', mods: {'color': 'project-inverse'}}
          ],
        },
        { block: 'cover',
          elem: 'name',
          mix: [
            {block: 'text', mods: {'view': 'primary', 'size': 'xxl'}}
          ],
          content: [
            { block: 'text',
              elem: 'word',
              elemMods: {'width': 'l'}
            }
          ]
        },
        { block: 'cover',
          elem: 'price',
          mix: [
            {block: 'text', mods: {'view': 'primary', 'size': 'xxl'}}
          ],
          content: [
            { block: 'text',
              elem: 'word',
              elemMods: {'width': 'm'}
            }
          ]
        }
      ]
    },
    { block: 'cover',
      elem: 'footer',
      mix: [
        {block: 'card', elem: 'footer', elemMods: {'space-a': 'xxl'}}
      ],
      content: [
        { block: 'cover',
          elem: 'button',
          mix: [
            {block: 'button', mods: {'view': 'primary', 'size': 'l', 'width': 'full'}}
          ]
        }
      ]
    }
  ]
}
