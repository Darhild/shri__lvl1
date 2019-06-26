module.exports.bemjson = {
  block: 'subscription',
  mix: [
    { block: 'card', mods: {'view': 'default'}},
    { block: 'theme', mods: {'color': 'project-brand'}}
  ],
  content: [
    { block: 'subscription',
      elem: 'info',
      mix: [
        { block: 'card', elem: 'content', mods: {'space-a': 'xl'}}
      ],
      content: [
        { block: 'subscription',
          elem: 'title',
          mix: [
           { block: 'text', mods: {'view': 'primary', 'size': 'xxl'}}
          ],
          content: [
            { block: 'text',
              elem: 'word',
              elemMods: {'width': 'l'}
            }
          ]
        },
        { block: 'subscription',
          elem: 'item',
          mix: [
           { block: 'text', mods: {'view': 'primary', 'size': 'l'}}
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
              elemMods: {'width': 's'}
            }
          ]
        },
        { block: 'subscription',
          elem: 'item',
          mix: [
           { block: 'text', mods: {'view': 'primary', 'size': 'l'}}
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
              elemMods: {'width': 's'}
            }
          ]
        },
        { block: 'subscription',
          elem: 'item',
          mix: [
           { block: 'text', mods: {'view': 'primary', 'size': 'l'}}
          ],
          content: [
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
            }
          ]
        },
        { block: 'subscription',
          elem: 'item',
          mix: [
           { block: 'text', mods: {'view': 'primary', 'size': 'l'}}
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
              elemMods: {'width': 's'}
            }
          ]
        },
        { block: 'subscription',
          elem: 'item',
          mix: [
           { block: 'text', mods: {'view': 'primary', 'size': 'l'}}
          ],
          content: [
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
            }
          ]
        }
      ]
    },
    { block: 'subscription',
      elem: 'footer',
      mix: [
        { block: 'card', elem: 'footer', mods: {'space-a': 'xl'}}
      ],
      content: [
        { block: 'subscription',
          elem: 'control',
          mix: [
           { block: 'list', elem: 'item', mods: {'space-b': 's'}}
          ],
          content: [
            { block: 'subscription',
              elem: 'input',
              mix: [
                { block: 'input', mods: {'size': 'l'}}
              ]
            }
          ]
        },
        { block: 'subscription',
          elem: 'button',
          mix: [
            { block: 'button', mods: {'size': 'l', 'width': 'full'}}
          ]
        }
      ]
    }
  ]
}