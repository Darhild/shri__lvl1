module.exports.bemjson = {
  block: "page-product",
  mix: [
    {block: 'theme', mods: {'color': 'project-default', 'size': 'default', 'space': 'default', 'gap': 'small'}}
  ],
  content: [
    { block: 'header',
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
    },
    { block: 'page',
      elem: 'section',
      mix: [
        {block: 'layout'}
      ],
      content: [
        { block: 'layout',
          elem: 'container',
          elemMods: {'align': 'center', 'size': 'm', 'indent-b': 'xxxxl'},
          content: [
            { block: 'grid',
              mods: {'m-columns': '12', 'col-gap': 'full'},
              content: [
                { block: 'page-product',
                  elem: 'description',
                  mix: [
                    {block: 'grid', elem: 'fraction', elemMods: {'m-col': '8'}}
                  ],
                  content: [
                    { block: 'page-product',
                      elem: 'title',
                      mix: [
                        {block: 'text', mods: {'view': 'primary', 'size': 'xxl', 'type': 'h1'}}
                      ],
                      content: [
                        { block: 'text',
                          elem: 'word',
                          elemMods: {'width': 'l'}
                        }
                      ]
                    },
                    { block: 'page-product',
                      elem: 'text',
                      mix: [
                        {block: 'text', mods: {'view': 'primary', 'size': 'm', 'type': 'p'}}
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
                          elemMods: {'width': 'm'}
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
                          elemMods: {'width': 'm'}
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
                          elemMods: {'width': 'm'}
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
                          elemMods: {'width': 'm'}
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
                          elemMods: {'width': 'l'}
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
                          elemMods: {'width': 's'}
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
                          elemMods: {'width': 'm'}
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
                          elemMods: {'width': 'l'}
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
                          elemMods: {'width': 's'}
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
                          elemMods: {'width': 'l'}
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
                          elemMods: {'width': 's'}
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
                          elemMods: {'width': 'm'}
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
                          elemMods: {'width': 's'}
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
                          elemMods: {'width': 'm'}
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
                          elemMods: {'width': 'l'}
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
                          elemMods: {'width': 's'}
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
                          elemMods: {'width': 'm'}
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
                          elemMods: {'width': 's'}
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
                          elemMods: {'width': 'm'}
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
                          elemMods: {'width': 'l'}
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
                          elemMods: {'width': 's'}
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
                          elemMods: {'width': 'm'}
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
                        },
                        { block: 'text',
                          elem: 'word',
                          elemMods: {'width': 'm'}
                        }
                      ]
                    },
                    { block: 'page-product',
                      elem: 'title',
                      mix: [
                        {block: 'text', mods: {'view': 'primary', 'size': 'xl', 'type': 'h2'}}
                      ],
                      content: [
                        { block: 'text',
                          elem: 'word',
                          elemMods: {'width': 'l'}
                        }
                      ]
                    },
                    { block: 'page-product',
                      elem: 'text',
                      mix: [
                        {block: 'text', mods: {'view': 'primary', 'size': 'm'}}
                      ],
                      content: [
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
                          elemMods: {'width': 'l'}
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
                          elemMods: {'width': 's'}
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
                          elemMods: {'width': 'm'}
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
                          elemMods: {'width': 'm'}
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
                          elemMods: {'width': 'l'}
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
                          elemMods: {'width': 's'}
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
                          elemMods: {'width': 'm'}
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
                    }
                  ]
                },
                { block: 'page-product',
                  elem: 'cover',
                  mix: [
                    {block: 'cover'},
                    {block: 'grid', elem: 'fraction', elemMods: {'m-col': '4'}},
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
              ]
            }
          ]
        }
      ]
    },
    { block: 'page',
      elem: 'section',
      mods: {'color': 'inverse'},
      mix: [
        {block: 'layout'},
        {block: 'theme', mods: {'color': 'project-inverse'}}
      ],
      content: [
        { block: 'layout',
          elem: 'container',
          elemMods: {'align': 'center', 'size': 'm', 'space-v': 'xxxxl'},
          content: [
            { block: 'page-product',
              elem: 'products-title',
              mix: [
                {block: 'text', mods: {'view': 'primary', 'size': 'xl'}}
              ],
              content: [
                { block: 'text',
                  elem: 'word',
                  elemMods: {'width': 'l'}
                },
                { block: 'text',
                  elem: 'word',
                  elemMods: {'width': 'l'}
                }
              ]
            },
            { block: 'grid',
              mods: {'m-columns': '12', 'col-gap': 'half'},
              content: [
                { block: 'product',
                  mix: [
                    {block: 'grid', elem: 'fraction', elemMods: {'m-col': '3'}},
                    {block: 'card', mods: {'view': 'default','border': 'all'}}
                  ],
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
                            {block: 'theme', mods: {'color': 'project-default'}}
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
                },
                { block: 'product',
                  mix: [
                    {block: 'grid', elem: 'fraction', elemMods: {'m-col': '3'}},
                    {block: 'card', mods: {'view': 'default','border': 'all'}}
                  ],
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
                            {block: 'theme', mods: {'color': 'project-default'}}
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
                },
                { block: 'product',
                  mix: [
                    {block: 'grid', elem: 'fraction', elemMods: {'m-col': '3'}},
                    {block: 'card', mods: {'view': 'default','border': 'all'}}
                  ],
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
                            {block: 'theme', mods: {'color': 'project-default'}}
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
                },
                { block: 'product',
                  mix: [
                    {block: 'grid', elem: 'fraction', elemMods: {'m-col': '3'}},
                    {block: 'card', mods: {'view': 'default','border': 'all'}}
                  ],
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
                            {block: 'theme', mods: {'color': 'project-default'}}
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
              ]
            }
          ]
        }
      ]
    },
    { block: 'footer',
      content: [
        { block: 'footer',
          elem: 'content',
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
      ]
    }
  ]
}
