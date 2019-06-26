module.exports.bemjson = {
  block: 'header',
  content: [
    { block: 'header',
      elem: 'logo'
    },
    { block: 'header',
      elem: 'onoswitch',
      mix: [
        {block: 'onoswitch'}
      ],
      content: [
       { block: 'onoswitch',
         elem: 'switcher'
       }
      ]
    }
  ]
}