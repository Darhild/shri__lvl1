module.exports.bemjson = {
  block: 'header',
  content: [
   { block: 'header',
     elem: 'content',
     content: [
       { block: 'header',
         elem: 'logo'
       },
       { block: 'header',
         elem: 'onoffswitch',
         mix: [
           {block: 'onoffswitch'}
         ],
         content: [
           { block: 'onoffswitch',
             elem: 'button'
            }
          ]
        }
      ]
    }
  ]
}
