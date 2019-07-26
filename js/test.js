import createHTML from "./template-engine-test.js";

const pages = {
  pageProduct: {
    "block": "page-product",
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
  },
  pageCollect: {
    "block": "page-collect",
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
        mods: {'color': 'inverse', 'size': 'indent-b'},
        mix: [
          {block: 'layout'},
          {block: 'theme', mods: {'color': 'project-inverse'}}
        ],
        content: [
          { block: 'layout',
            elem: 'container',
            elemMods: {'align': 'center', 'size': 'm', 'space-v': 'xxxxxl'},
            content: [
              { block: 'grid',
                mods: {'m-columns': '12', 'col-gap': 'half', 'row-gap': 'full'},
                content: [
                  { block: 'collect',
                    mix: [
                      {block: 'grid', elem: 'fraction', elemMods: {'m-col': '3'}},
                      {block: 'card', mods: {'view': 'default','border': 'all'}},
                      {block: 'theme', mods: {'color': 'project-inverse'}}
                    ],
                    content: [
                      { block: 'collect',
                        elem: 'image',
                        mix: [
                          { block: 'card', elem: 'content'},
                          { block: 'image' },
                          { block: 'theme', mods: {'color': 'project-default'}}
                        ]
                      },
                      { block: 'collect',
                        elem: 'progress',
                        content: [
                          { block: 'collect',
                            elem: 'done',
                            elemMods: {'size': 'two-third'}
                          }
                        ]
                      },
                      { block: 'collect',
                        elem: 'footer',
                        mix: [
                          { block: 'card', elem: 'footer', elemMods: {'space-a': 'l'}}
                        ],
                        content: [
                          { block: 'collect',
                            elem: 'title',
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
                                elemMods: {'width': 'm'}
                              }
                            ]
                          },
                          { block: 'collect',
                            elem: 'description',
                            mix: [
                              {block: 'text', mods: {'view': 'secondary', 'size': 'm'}}
                            ],
                            content: [
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
                                elemMods: {'width': 'l'}
                              },
                              { block: 'text',
                                elem: 'word',
                                elemMods: {'width': 'l'}
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
                  },
                  { block: 'collect',
                    mix: [
                      {block: 'grid', elem: 'fraction', elemMods: {'m-col': '3'}},
                      {block: 'card', mods: {'view': 'default','border': 'all'}},
                      {block: 'theme', mods: {'color': 'project-inverse'}}
                    ],
                    content: [
                      { block: 'collect',
                        elem: 'image',
                        mix: [
                          { block: 'card', elem: 'content'},
                          { block: 'image' },
                          { block: 'theme', mods: {'color': 'project-default'}}
                        ]
                      },
                      { block: 'collect',
                        elem: 'progress',
                        content: [
                          { block: 'collect',
                            elem: 'done',
                            elemMods: {'size': 'one-third'}
                          }
                        ]
                      },
                      { block: 'collect',
                        elem: 'footer',
                        mix: [
                          { block: 'card', elem: 'footer', elemMods: {'space-a': 'l'}}
                        ],
                        content: [
                          { block: 'collect',
                            elem: 'title',
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
                                elemMods: {'width': 'm'}
                              }
                            ]
                          },
                          { block: 'collect',
                            elem: 'description',
                            mix: [
                              {block: 'text', mods: {'view': 'secondary', 'size': 'm'}}
                            ],
                            content: [
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
                                elemMods: {'width': 'l'}
                              },
                              { block: 'text',
                                elem: 'word',
                                elemMods: {'width': 'l'}
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
                  },
                  { block: 'collect',
                    mix: [
                      {block: 'grid', elem: 'fraction', elemMods: {'m-col': '3'}},
                      {block: 'card', mods: {'view': 'default','border': 'all'}},
                      {block: 'theme', mods: {'color': 'project-inverse'}}
                    ],
                    content: [
                      { block: 'collect',
                        elem: 'image',
                        mix: [
                          { block: 'card', elem: 'content'},
                          { block: 'image' },
                          {block: 'theme', mods: {'color': 'project-default'}}
                        ]
                      },
                      { block: 'collect',
                        elem: 'progress',
                        content: [
                          { block: 'collect',
                            elem: 'done',
                            elemMods: {'size': 'half'}
                          }
                        ]
                      },
                      { block: 'collect',
                        elem: 'footer',
                        mix: [
                          { block: 'card', elem: 'footer', elemMods: {'space-a': 'l'}}
                        ],
                        content: [
                          { block: 'collect',
                            elem: 'title',
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
                                elemMods: {'width': 'm'}
                              }
                            ]
                          },
                          { block: 'collect',
                            elem: 'description',
                            mix: [
                              {block: 'text', mods: {'view': 'secondary', 'size': 'm'}}
                            ],
                            content: [
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
                                elemMods: {'width': 'l'}
                              },
                              { block: 'text',
                                elem: 'word',
                                elemMods: {'width': 'l'}
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
                  },
                  { block: 'collect',
                    mix: [
                      {block: 'grid', elem: 'fraction', elemMods: {'m-col': '3'}},
                      {block: 'card', mods: {'view': 'default','border': 'all'}},
                      {block: 'theme', mods: {'color': 'project-inverse'}}
                    ],
                    content: [
                      { block: 'collect',
                        elem: 'image',
                        mix: [
                          { block: 'card', elem: 'content'},
                          { block: 'image' },
                          { block: 'theme', mods: {'color': 'project-default'}}
                        ]
                      },
                      { block: 'collect',
                        elem: 'progress',
                        content: [
                          { block: 'collect',
                            elem: 'done',
                            elemMods: {'size': 'two-third'}
                          }
                        ]
                      },
                      { block: 'collect',
                        elem: 'footer',
                        mix: [
                          { block: 'card', elem: 'footer', elemMods: {'space-a': 'l'}}
                        ],
                        content: [
                          { block: 'collect',
                            elem: 'title',
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
                                elemMods: {'width': 'm'}
                              }
                            ]
                          },
                          { block: 'collect',
                            elem: 'description',
                            mix: [
                              {block: 'text', mods: {'view': 'secondary', 'size': 'm'}}
                            ],
                            content: [
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
                                elemMods: {'width': 'l'}
                              },
                              { block: 'text',
                                elem: 'word',
                                elemMods: {'width': 'l'}
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
                ]
              }
            ]
          }
        ]
      },
      { block: 'page',
        elem: 'section',
        elemMods: {'space-t': 'xxl'},
        mix: [
          {block: 'layout'}
        ],
        content: [
          { block: 'layout',
            elem: 'container',
            elemMods: {'align': 'center', 'size': 'm'},
            content: [
              { block: 'grid',
                mods: {'m-columns': '12', 'col-gap': 'full', 'row-gap': 'full'},
                content: [
                  { block: 'articles',
                    mix: [
                      {block: 'grid', elem: 'fraction', elemMods: {'m-col': '5'}},
                      { block: 'list', mods: {'view': 'default'}}
                    ],
                    content: [
                      { block: 'articles',
                        elem: 'article',
                        mix: [
                          { block: 'list', elem: 'item', elemMods: {'indent-b': 'xl'}}
                        ],
                        content: [
                          { block: 'articles',
                            elem: 'unit',
                            mix: [
                              { block: 'icon-plus', mods: {'vertical-align': 'center'}}
                            ],
                            content: [
                              { block: 'articles',
                                elem: 'pic',
                                mix: [
                                  { block: 'theme', mods: {'color': 'project-inverse'}},
                                  { block: 'icon-plus', elem: 'icon', elemMods: {'indent-r': 'm'}},
                                  { block: 'image'}
                                ]
                              },
                              { block: 'articles',
                                elem: 'content',
                                mix: [
                                  { block: 'icon-plus', elem: 'block'}
                                ],
                                content: [
                                  { block: 'articles',
                                    elem: 'data',
                                    mix: [
                                      {block: 'text', mods: {'view': 'secondary', 'size': 'l'}}
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
                                      },
                                      { block: 'text',
                                        elem: 'word',
                                        elemMods: {'width': 'm'}
                                      }
                                    ]
                                  },
                                  { block: 'articles',
                                    elem: 'title',
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
                                        elemMods: {'width': 'm'}
                                      }
                                    ]
                                  },
                                  { block: 'articles',
                                    elem: 'hashtag',
                                    mix: [
                                      {block: 'text', mods: {'view': 'link', 'size': 'm'}}
                                    ],
                                    content: [
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
                              }
                            ]
                          }
                        ]
                      },
                      { block: 'articles',
                        elem: 'article',
                        mix: [
                          { block: 'list', elem: 'item', elemMods: {'indent-b': 'xl'}}
                        ],
                        content: [
                          { block: 'articles',
                            elem: 'unit',
                            mix: [
                              { block: 'icon-plus', mods: {'vertical-align': 'center'}}
                            ],
                            content: [
                              { block: 'articles',
                                elem: 'pic',
                                mix: [
                                  { block: 'theme', mods: {'color': 'project-inverse'}},
                                  { block: 'icon-plus', elem: 'icon', elemMods: {'indent-r': 'm'}},
                                  { block: 'image'}
                                ]
                              },
                              { block: 'articles',
                                elem: 'content',
                                mix: [
                                  { block: 'icon-plus', elem: 'block'}
                                ],
                                content: [
                                  { block: 'articles',
                                    elem: 'data',
                                    mix: [
                                      {block: 'text', mods: {'view': 'secondary', 'size': 'l'}}
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
                                      },
                                      { block: 'text',
                                        elem: 'word',
                                        elemMods: {'width': 'm'}
                                      }
                                    ]
                                  },
                                  { block: 'articles',
                                    elem: 'title',
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
                                        elemMods: {'width': 'm'}
                                      }
                                    ]
                                  },
                                  { block: 'articles',
                                    elem: 'hashtag',
                                    mix: [
                                      {block: 'text', mods: {'view': 'link', 'size': 'm'}}
                                    ],
                                    content: [
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
                              }
                            ]
                          }
                        ]
                      },
                      { block: 'articles',
                        elem: 'article',
                        mix: [
                          { block: 'list', elem: 'item'}
                        ],
                        content: [
                          { block: 'articles',
                            elem: 'unit',
                            mix: [
                              { block: 'icon-plus', mods: {'vertical-align': 'center'}}
                            ],
                            content: [
                              { block: 'articles',
                                elem: 'pic',
                                mix: [
                                  { block: 'theme', mods: {'color': 'project-inverse'}},
                                  { block: 'icon-plus', elem: 'icon', elemMods: {'indent-r': 'm'}},
                                  { block: 'image'}
                                ]
                              },
                              { block: 'articles',
                                elem: 'content',
                                mix: [
                                  { block: 'icon-plus', elem: 'block'}
                                ],
                                content: [
                                  { block: 'articles',
                                    elem: 'data',
                                    mix: [
                                      {block: 'text', mods: {'view': 'secondary', 'size': 'l'}}
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
                                      },
                                      { block: 'text',
                                        elem: 'word',
                                        elemMods: {'width': 'm'}
                                      }
                                    ]
                                  },
                                  { block: 'articles',
                                    elem: 'title',
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
                                        elemMods: {'width': 'm'}
                                      }
                                    ]
                                  },
                                  { block: 'articles',
                                    elem: 'hashtag',
                                    mix: [
                                      {block: 'text', mods: {'view': 'link', 'size': 'm'}}
                                    ],
                                    content: [
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
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  { block: 'offer',
                    mix: [
                      {block: 'grid', elem: 'fraction', elemMods: {'m-col': '3'}},
                      { block: 'theme', mods: {'color': 'megafon-brand'}},
                      { block: 'card', mods: {'view': 'default'}}
                    ],
                    content: [
                      { block: 'offer',
                        elem: 'partner',
                        mix: [
                          {block: 'card', elem: 'content', elemMods: {'space-a': 'xl'}}
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
                        { block: 'card', elem: 'footer', elemMods: {'space-a': 'xl'}}
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
                  },
                  { block: 'subscription',
                    mix: [
                      { block: 'grid', elem: 'fraction', elemMods: {'m-col': '4'}},
                      { block: 'card', mods: {'view': 'default'}},
                      { block: 'theme', mods: {'color': 'project-brand'}}
                    ],
                    content: [
                      { block: 'subscription',
                        elem: 'info',
                        mix: [
                          { block: 'card', elem: 'content', elemMods: {'space-a': 'xl'}}
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
                          { block: 'card', elem: 'footer', elemMods: {'space-a': 'xl'}}
                        ],
                        content: [
                          { block: 'subscription',
                            elem: 'control',
                            mix: [
                             { block: 'list', elem: 'item', elemMods: {'space-b': 's'}}
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
  },
  pageIndex: {
    "block": 'page-index',
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
      { block: 'page-index',
        elem: 'layout',
        mix: [
          {block: 'layout'}
        ],
        content: [
          { block: 'layout',
            elem: 'container',
            elemMods: {'align': 'center', 'size': 'm', 'indent-b': 'xxl'},
            content: [
              { block: 'grid',
                mods: {'m-columns': '10', 'col-gap': 'full', 'row-gap': 'xxl'},
                content: [
                  { block: 'payment',
                    mix: [
                      {block: 'form', mods: {'border': 'all'}},
                      {block: 'grid', elem: 'fraction', elemMods: {'m-col': '5'}}
                    ],
                    content: [
                      { block: 'payment',
                        elem: 'header',
                        mix: [
                          {block: 'form', elem: 'item', elemMods: {'space-v': 'l', 'space-h': 'xl', 'border': 'bottom'}}
                        ],
                        content:
                          { block: 'text',
                            mix: [
                              {block: 'text', mods: {'view': 'primary', 'size': 'xxl'}}
                            ],
                             content:
                              { block: 'text',
                                elem: 'word',
                                elemMods: {'width': 'l'}
                              }
                          },
                      },
                      { block: 'payment',
                        elem: 'content',
                        mix: [
                          {block: 'form', elem: 'item', elemMods: {'space-v': 'xxxl', 'space-h': 'xl', 'border': 'bottom'}},
                        ],
                        content: [
                          { block: 'payment',
                            elem: 'item',
                            mix: [
                              {block: 'form', elem: 'item', elemMods: {'indent-b': 'xl', 'distribute': 'between', 'vertical-align': 'center'}}
                            ],
                            content: [
                              { block: 'payment',
                                elem: 'label',
                                mix: [
                                  {block: 'form', elem: 'label', elemMods: {'width': 'default'}},
                                  {block: 'text', mods: {'view': 'primary', 'size': 'l'}}
                                ],
                                content: [
                                  { block: 'text', elem: 'word', elemMods: {'width': 'l'}
                                  }
                                ]
                              },
                              { block: 'payment',
                                elem: 'control',
                                mix: [
                                  {block: 'form', elem: 'control'},
                                ],
                                content:
                                  {block: 'input', mods: {'size': 'l'}}
                              }
                            ]
                          },
                          { block: 'payment',
                            elem: 'item',
                            mix: [
                              {block: 'form', elem: 'item', elemMods: {'distribute': 'between', 'vertical-align': 'center'}}
                            ],
                            content: [
                              { block: 'payment',
                                elem: 'label',
                                mix: [
                                  {block: 'form', elem: 'label', elemMods: {'width': 'default'}},
                                  {block: 'text', mods: {'view': 'primary', 'size': 'l'}}
                                ],
                                content: [
                                  { block: 'text', elem: 'word', elemMods: {'width': 'l'}
                                  }
                                ]
                              },
                              { block: 'payment',
                                elem: 'control',
                                mix: [
                                  {block: 'form', elem: 'control'},
                                ],
                                content:
                                  {block: 'input', mods: {'size': 'l'}}
                              }
                            ]
                          }
                        ]
                      },
                      { block: 'payment',
                        elem: 'footer',
                        mix: [
                          {block: 'form', elem: 'item', elemMods: {'distribute': 'between', 'border': 'bottom', 'vertical-align': 'center', 'space-v': 'l', 'space-h': 'xl'}}
                        ],
                        content: [
                          { block: 'text',
                            mix: [
                              {block: 'text', mods: {'view': 'primary', 'size': 'l'}},
                            ],
                            content:
                              { block: 'text',
                                elem: 'word',
                                elemMods: {'width': 'l'}
                              }
                          },
                          { block: 'button',
                            mods: {'size': 'l'}}
                        ]
                      }
                    ]
                  },
                  { block: 'warning',
                    mix: [
                      {block: 'informer', mods: {'view': 'default', 'border': 'all'}},
                      {block: 'theme', mods: {'color': 'project-warning'}},
                      {block: 'grid', elem: 'fraction', elemMods: {'m-col': '5'}}
                    ],
                    content: [
                      { block: 'warning',
                        elem: 'content',
                        mix: [
                          {block: 'informer', elem: 'content', elemMods: {'distribute': 'center', 'space-a': 'xxl'}},
                        ],
                        content: [
                          { block: 'warning',
                            elem: 'placeholder',
                            mix: [
                              {block: 'placeholder', mods: {'view': 'primary', 'size': 'm'}}
                            ]
                          },
                          { block: 'warning',
                            elem: 'text',
                            mix: [
                              {block: 'text', mods: {'view': 'primary', 'size': 'xl'}}
                            ],
                            content: [
                              {
                                block: 'text',
                                elem: 'word',
                                elemMods: {
                                    width: 's'
                                }
                              },
                              {
                                block: 'text',
                                elem: 'word',
                                elemMods: {
                                    width: 'l'
                                }
                              },
                              {
                                block: 'text',
                                elem: 'word',
                                elemMods: {
                                    width: 'm'
                                }
                              },
                              {
                                block: 'text',
                                elem: 'word',
                                elemMods: {
                                    width: 'm'
                                }
                              },
                              {
                                block: 'text',
                                elem: 'word',
                                elemMods: {
                                    width: 's'
                                }
                              },
                              {
                                block: 'text',
                                elem: 'word',
                                elemMods: {
                                    width: 'm'
                                }
                              },
                              {
                                block: 'text',
                                elem: 'word',
                                elemMods: {
                                    width: 'l'
                                }
                              },
                              {
                                block: 'text',
                                elem: 'word',
                                elemMods: {
                                    width: 's'
                                }
                              },
                              {
                                block: 'text',
                                elem: 'word',
                                elemMods: {
                                    width: 'm'
                                }
                              }
                            ]
                          }
                        ]
                      },
                      { block: 'warning',
                        elem: 'button-wrapper',
                        mix: [
                          {block: 'informer', elem: 'action', elemMods: {'distribute': 'center', 'space-a': 'xl'}}
                        ],
                        content: [
                          { block: 'button',
                            mods: {'size': 'l'}
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          { block: 'layout',
            elem: 'container',
            elemMods: {'align': 'center', 'size': 'm', 'indent-b': 'xxl'},
            content: [
              { block: 'grid',
                mods: {'m-columns': '10', 'col-gap': 'half', 'row-gap': 'xxl'},
                content: [
                  { block: 'product',
                    mix: [
                      {block: 'grid', elem: 'fraction', elemMods: {'m-col': '2'}},
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
                              {block: 'theme', mods: {'color': 'project-inverse'}}
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
                      {block: 'grid', elem: 'fraction', elemMods: {'m-col': '2'}},
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
                              {block: 'theme', mods: {'color': 'project-inverse'}}
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
                      {block: 'grid', elem: 'fraction', elemMods: {'m-col': '2'}},
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
                              {block: 'theme', mods: {'color': 'project-inverse'}}
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
                      {block: 'grid', elem: 'fraction', elemMods: {'m-col': '2'}},
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
                              {block: 'theme', mods: {'color': 'project-inverse'}}
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
                      {block: 'grid', elem: 'fraction', elemMods: {'m-col': '2'}},
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
                              {block: 'theme', mods: {'color': 'project-inverse'}}
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
          },
          { block: 'layout',
            elem: 'container',
            elemMods: {'align': 'center', 'size': 'm'},
            content: [
              { block: 'grid',
                mods: {'m-columns': '12', 'col-gap': 'full', 'row-gap': 'xxl'},
                content: [
                  { block: 'history',
                    mix: [
                     {block: 'list', mods: {'view': 'default','border': 'all'}},
                     {block: 'grid', elem: 'fraction', elemMods: {'m-col': '8'}}
                    ],
                    content: [
                      { block: 'history',
                        elem: 'transaction',
                        mix:[{block: 'list', elem: 'item', elemMods: {'border': 'bottom','space-a': 'l'}}],
                        content: [
                          { block: 'history',
                            elem: 'show',
                            mix: [
                              {block: 'e-accordion', elem: 'short'},
                              {block: 'list', elem: 'item', elemMods: {'vertical-align': 'center', 'indent-t': 'm'}}
                            ],
                            content: [
                              { block: 'history',
                                elem: 'details',
                                content: [
                                  { block: 'history',
                                    elem: 'time',
                                    content: [
                                      { block: 'text',
                                        mods: {'view': 'ghost', 'size': 's'},
                                        content: [
                                          { block: 'text',
                                            elem: 'word',
                                            elemMods: {'width': 'm'}
                                          }
                                        ]
                                      },
                                      { block: 'text',
                                        mods: {'view': 'ghost', 'size': 's'},
                                        content: [
                                          { block: 'text',
                                            elem: 'word',
                                            elemMods: {'width': 'm'}
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  { block: 'history',
                                    elem: 'destination',
                                    mix: [
                                      {block: 'icon-plus', mods: {'vertical-align': 'center'}}
                                    ],
                                    content: [
                                      { block: 'history',
                                        elem: 'pic',
                                        mix: [
                                          {block: 'icon-plus', elem: 'icon', elemMods: {'indent-r': 's','indent-l': 'l'}}
                                        ],
                                        content: [
                                          { block: 'brand-logo',
                                            mods: {'name': 'yota','size': 'm'}
                                          }
                                        ]
                                      },
                                      { block: 'history',
                                        elem: 'label',
                                        mix: [
                                          {block: 'icon-plus', elem: 'block'}
                                        ],
                                        content: [
                                          { block: 'text',
                                            mods: {'view': 'primary', 'size': 'l'},
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
                              },
                              { block: 'history',
                                elem: 'sum',
                                content: [
                                  { block: 'text',
                                    mods: {'view': 'primary', 'size': 'l'},
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
                          { block: 'history',
                            elem: 'hide',
                            mix: [
                              {block: 'e-accordion', elem: 'more', elemMods: {'view': 'default'}},
                              {block: 'list', elem: 'item', elemMods: {'indent-t': 'm'}}
                            ],
                            content: [
                              { block: 'history',
                                elem: 'description',
                                mix: [
                                  {block: 'list', elem: 'item', elemMods: {'indent-b': 'm'}}
                                ],
                                content: [
                                  { block: 'text',
                                    mods: {'view': 'primary', 'size': 'l'},
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
                                      }
                                    ]
                                  },
                                  { block: 'text',
                                    mods: {'view': 'primary', 'size': 'l'},
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
                                      }
                                    ]
                                  }
                                ]
                              },
                              { block: 'history',
                                elem: 'actions',
                                mix: [
                                  {block: 'list', elem: 'item', elemMods: {'distribute': 'between','indent-b': 'l'}}
                                ],
                                content: [
                                  { block: 'text',
                                    mods: {'view': 'primary', 'size': 'l'},
                                    content: [
                                      { block: 'text',
                                        elem: 'word',
                                        elemMods: {'width': 'l'}
                                      }
                                    ]
                                  },
                                  { block: 'text',
                                    mods: {'view': 'primary', 'size': 'l'},
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
                      },
                      { block: 'history',
                        elem: 'transaction',
                        mix:[{block: 'list', elem: 'item', elemMods: {'border': 'bottom','space-a': 'l'}}],
                        content: [
                          { block: 'history',
                            elem: 'show',
                            mix: [
                              {block: 'e-accordion', elem: 'short'},
                              {block: 'list', elem: 'item', elemMods: {'vertical-align': 'center', 'indent-t': 'm'}}
                            ],
                            content: [
                              { block: 'history',
                                elem: 'details',
                                content: [
                                  { block: 'history',
                                    elem: 'time',
                                    content: [
                                      { block: 'text',
                                        mods: {'view': 'ghost', 'size': 's'},
                                        content: [
                                          { block: 'text',
                                            elem: 'word',
                                            elemMods: {'width': 'm'}
                                          }
                                        ]
                                      },
                                      { block: 'text',
                                        mods: {'view': 'ghost', 'size': 's'},
                                        content: [
                                          { block: 'text',
                                            elem: 'word',
                                            elemMods: {'width': 'm'}
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  { block: 'history',
                                    elem: 'destination',
                                    mix: [
                                      {block: 'icon-plus', mods: {'vertical-align': 'center'}}
                                    ],
                                    content: [
                                      { block: 'history',
                                        elem: 'pic',
                                        mix: [
                                          {block: 'icon-plus', elem: 'icon', elemMods: {'indent-r': 's','indent-l': 'l'}}
                                        ],
                                        content: [
                                          { block: 'brand-logo',
                                            mods: {'name': 'mts','size': 'm'}
                                          }
                                        ]
                                      },
                                      { block: 'history',
                                        elem: 'label',
                                        mix: [
                                          {block: 'icon-plus', elem: 'block'}
                                        ],
                                        content: [
                                          { block: 'text',
                                            mods: {'view': 'primary', 'size': 'l'},
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
                              },
                              { block: 'history',
                                elem: 'sum',
                                content: [
                                  { block: 'text',
                                    mods: {'view': 'primary', 'size': 'l'},
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
                          { block: 'history',
                            elem: 'hide',
                            mix: [
                              {block: 'e-accordion', elem: 'more', elemMods: {'view': 'default'}},
                              {block: 'list', elem: 'item', elemMods: {'indent-t': 'm'}}
                            ],
                            content: [
                              { block: 'history',
                                elem: 'description',
                                mix: [
                                  {block: 'list', elem: 'item', elemMods: {'indent-b': 'm'}}
                                ],
                                content: [
                                  { block: 'text',
                                    mods: {'view': 'primary', 'size': 'l'},
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
                                      }
                                    ]
                                  },
                                  { block: 'text',
                                    mods: {'view': 'primary', 'size': 'l'},
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
                                      }
                                    ]
                                  }
                                ]
                              },
                              { block: 'history',
                                elem: 'actions',
                                mix: [
                                  {block: 'list', elem: 'item', elemMods: {'distribute': 'between','indent-b': 'l'}}
                                ],
                                content: [
                                  { block: 'text',
                                    mods: {'view': 'primary', 'size': 'l'},
                                    content: [
                                      { block: 'text',
                                        elem: 'word',
                                        elemMods: {'width': 'l'}
                                      }
                                    ]
                                  },
                                  { block: 'text',
                                    mods: {'view': 'primary', 'size': 'l'},
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
                      },
                      { block: 'history',
                        elem: 'transaction',
                        mix:[{block: 'list', elem: 'item', elemMods: {'border': 'bottom','space-a': 'l'}}],
                        content: [
                          { block: 'history',
                            elem: 'show',
                            mix: [
                              {block: 'e-accordion', elem: 'short'},
                              {block: 'list', elem: 'item', elemMods: {'vertical-align': 'center', 'indent-t': 'm'}}
                            ],
                            content: [
                              { block: 'history',
                                elem: 'details',
                                content: [
                                  { block: 'history',
                                    elem: 'time',
                                    content: [
                                      { block: 'text',
                                        mods: {'view': 'ghost', 'size': 's'},
                                        content: [
                                          { block: 'text',
                                            elem: 'word',
                                            elemMods: {'width': 'm'}
                                          }
                                        ]
                                      },
                                      { block: 'text',
                                        mods: {'view': 'ghost', 'size': 's'},
                                        content: [
                                          { block: 'text',
                                            elem: 'word',
                                            elemMods: {'width': 'm'}
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  { block: 'history',
                                    elem: 'destination',
                                    mix: [
                                      {block: 'icon-plus', mods: {'vertical-align': 'center'}}
                                    ],
                                    content: [
                                      { block: 'history',
                                        elem: 'pic',
                                        mix: [
                                          {block: 'icon-plus', elem: 'icon', elemMods: {'indent-r': 's','indent-l': 'l'}}
                                        ],
                                        content: [
                                          { block: 'brand-logo',
                                            mods: {'name': 'kcell','size': 'm'}
                                          }
                                        ]
                                      },
                                      { block: 'history',
                                        elem: 'label',
                                        mix: [
                                          {block: 'icon-plus', elem: 'block'}
                                        ],
                                        content: [
                                          { block: 'text',
                                            mods: {'view': 'primary', 'size': 'l'},
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
                              },
                              { block: 'history',
                                elem: 'sum',
                                content: [
                                  { block: 'text',
                                    mods: {'view': 'primary', 'size': 'l'},
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
                          { block: 'history',
                            elem: 'hide',
                            mix: [
                              {block: 'e-accordion', elem: 'more', elemMods: {'view': 'default'}},
                              {block: 'list', elem: 'item', elemMods: {'indent-t': 'm'}}
                            ],
                            content: [
                              { block: 'history',
                                elem: 'description',
                                mix: [
                                  {block: 'list', elem: 'item', elemMods: {'indent-b': 'm'}}
                                ],
                                content: [
                                  { block: 'text',
                                    mods: {'view': 'primary', 'size': 'l'},
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
                                      }
                                    ]
                                  },
                                  { block: 'text',
                                    mods: {'view': 'primary', 'size': 'l'},
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
                                      }
                                    ]
                                  }
                                ]
                              },
                              { block: 'history',
                                elem: 'actions',
                                mix: [
                                  {block: 'list', elem: 'item', elemMods: {'distribute': 'between','indent-b': 'l'}}
                                ],
                                content: [
                                  { block: 'text',
                                    mods: {'view': 'primary', 'size': 'l'},
                                    content: [
                                      { block: 'text',
                                        elem: 'word',
                                        elemMods: {'width': 'l'}
                                      }
                                    ]
                                  },
                                  { block: 'text',
                                    mods: {'view': 'primary', 'size': 'l'},
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
                      },
                      { block: 'history',
                        elem: 'transaction',
                        mix:[{block: 'list', elem: 'item', elemMods: {'border': 'bottom','space-a': 'l'}}],
                        content: [
                          { block: 'history',
                            elem: 'show',
                            mix: [
                              {block: 'e-accordion', elem: 'short'},
                              {block: 'list', elem: 'item', elemMods: {'vertical-align': 'center', 'indent-t': 'm'}}
                            ],
                            content: [
                              { block: 'history',
                                elem: 'details',
                                content: [
                                  { block: 'history',
                                    elem: 'time',
                                    content: [
                                      { block: 'text',
                                        mods: {'view': 'ghost', 'size': 's'},
                                        content: [
                                          { block: 'text',
                                            elem: 'word',
                                            elemMods: {'width': 'm'}
                                          }
                                        ]
                                      },
                                      { block: 'text',
                                        mods: {'view': 'ghost', 'size': 's'},
                                        content: [
                                          { block: 'text',
                                            elem: 'word',
                                            elemMods: {'width': 'm'}
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  { block: 'history',
                                    elem: 'destination',
                                    mix: [
                                      {block: 'icon-plus', mods: {'vertical-align': 'center'}}
                                    ],
                                    content: [
                                      { block: 'history',
                                        elem: 'pic',
                                        mix: [
                                          {block: 'icon-plus', elem: 'icon', elemMods: {'indent-r': 's','indent-l': 'l'}}
                                        ],
                                        content: [
                                          { block: 'brand-logo',
                                            mods: {'name': 'megafon','size': 'm'}
                                          }
                                        ]
                                      },
                                      { block: 'history',
                                        elem: 'label',
                                        mix: [
                                          {block: 'icon-plus', elem: 'block'}
                                        ],
                                        content: [
                                          { block: 'text',
                                            mods: {'view': 'primary', 'size': 'l'},
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
                              },
                              { block: 'history',
                                elem: 'sum',
                                content: [
                                  { block: 'text',
                                    mods: {'view': 'primary', 'size': 'l'},
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
                          { block: 'history',
                            elem: 'hide',
                            mix: [
                              {block: 'e-accordion', elem: 'more', elemMods: {'view': 'default'}},
                              {block: 'list', elem: 'item', elemMods: {'indent-t': 'm'}}
                            ],
                            content: [
                              { block: 'history',
                                elem: 'description',
                                mix: [
                                  {block: 'list', elem: 'item', elemMods: {'indent-b': 'm'}}
                                ],
                                content: [
                                  { block: 'text',
                                    mods: {'view': 'primary', 'size': 'l'},
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
                                      }
                                    ]
                                  },
                                  { block: 'text',
                                    mods: {'view': 'primary', 'size': 'l'},
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
                                      }
                                    ]
                                  }
                                ]
                              },
                              { block: 'history',
                                elem: 'actions',
                                mix: [
                                  {block: 'list', elem: 'item', elemMods: {'distribute': 'between','indent-b': 'l'}}
                                ],
                                content: [
                                  { block: 'text',
                                    mods: {'view': 'primary', 'size': 'l'},
                                    content: [
                                      { block: 'text',
                                        elem: 'word',
                                        elemMods: {'width': 'l'}
                                      }
                                    ]
                                  },
                                  { block: 'text',
                                    mods: {'view': 'primary', 'size': 'l'},
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
                  },
                  { block: 'page-index',
                    elem: 'commercial',
                    mix: [
                      {block: 'commercial'},
                      {block: 'card', mods: {'view': 'default'}},
                      {block: 'theme', mods: {'color': 'project-brand'}},
                      {block: 'grid', elem: 'fraction', elemMods: {'m-col': '4'}}
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
                            elem: 'navigation',
                            content: [
                              { block: 'commercial',
                                elem: 'page-button'
                              },
                              { block: 'commercial',
                                elem: 'page-button'
                              },
                              { block: 'commercial',
                                elem: 'page-button'
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
  },
  pageContent: {
    "block": "page-content",
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
            elemMods: {'align': 'center', 'size': 's'},
            content: [
              { block: 'page-content',
                elem: 'title',
                mix: [
                  {block: 'text', mods: {'view': 'primary', 'size': 'xxl', 'type': 'h1'}}
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
              { block: 'page-content',
                elem: 'text',
                mix: [
                  {block: 'text', mods: {'view': 'primary', 'size': 'l', 'type': 'p'}}
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
                    elemMods: {'width': 'l'}
                  }
                ]
              },
              { block: 'page-content',
                elem: 'text',
                mix: [
                  {block: 'text', mods: {'view': 'primary', 'size': 'l', 'type': 'p'}}
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
                    elemMods: {'width': 'l'}
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
            elemMods: {'align': 'center', 'size': 'm'},
            content: [
              { block: 'grid',
                mods: {'m-columns': '10', 'col-gap': 'full', 'row-gap': 'full'},
                content: [
                  { block: 'event',
                    mix: [
                      {block: 'grid', elem: 'fraction', elemMods: {'m-col': '5'}},
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
                  },
                  { block: 'event',
                    mix: [
                      {block: 'grid', elem: 'fraction', elemMods: {'m-col': '5'}},
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
                                  { block: 'brand-logo', mods: {'name': 'yota', 'size': 'm'}}
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
            elemMods: {'align': 'center', 'size': 's'},
            content: [
              { block: 'page-content',
                elem: 'title',
                mix: [
                  {block: 'text', mods: {'view': 'primary', 'size': 'xxl', 'type': 'h2'}}
                ],
                content: [
                  { block: 'text',
                    elem: 'word',
                    elemMods: {'width': 'm'}
                  },
                  { block: 'text',
                    elem: 'word',
                    elemMods: {'width': 'm'}
                  }
                ]
              },
              { block: 'page-content',
                elem: 'text',
                mix: [
                  {block: 'text', mods: {'view': 'primary', 'size': 'l', 'type': 'p'}}
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
                  }
                ]
              },
              { block: 'page-content',
                elem: 'title',
                mix: [
                  {block: 'text', mods: {'view': 'primary', 'size': 'xxl', 'type': 'h3'}}
                ],
                content: [
                  { block: 'text',
                    elem: 'word',
                    elemMods: {'width': 'm'}
                  },
                  { block: 'text',
                    elem: 'word',
                    elemMods: {'width': 'l'}
                  }
                ]
              },
              { block: 'page-content',
                elem: 'text',
                mix: [
                  {block: 'text', mods: {'view': 'primary', 'size': 'l', 'type': 'p'}}
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
                    elemMods: {'width': 'l'}
                  },
                  { block: 'text',
                    elem: 'word',
                    elemMods: {'width': 'm'}
                  },
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
};

//const page = document.body.dataset.attr;

const div = document.createElement('div');

/*for (let prop in pages) {
  if (prop === page) div.innerHTML = template(pages[prop]);
}*/

const test = {
  "block": "form",
  "content": [
      { "block": "form",
        "elem": "label",
        "content": 
          {
            "block": "text",
            "mods": 
            { 
              "size": "m" 
            }
        }
      },
      { 
        "block": "input", 
        "mods": 
        { 
          "size": "l" 
        } 
      },
      { 
        "block": "input", 
        "mods": 
        { 
          "size": "s" 
        } 
      }
  ]
};

div.innerHTML = createHTML(test);

document.body.appendChild(div);

