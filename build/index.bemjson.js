module.exports.bemjson = {
  block: 'page-index',
  content: [
    { block: 'page-index',
      elem: 'container',
      mix: [
        {block: 'layout', elem: 'container', elemMods: {'align': 'center', 'size': 'm', 'space-v': 'xxxxl', 'indent-b': 'xxxxl'}}
      ],
      content: [
        { block: 'header',
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
        },
        { block: 'page-index',
          elem: 'grid',
          mix: [
            {block: 'grid', mods: {'m-columns': '10', 'col-gap': 'full', 'row-gap': 'xxl'}}
          ],
          content: [
            { block: 'grid',
              elem: 'fraction',
              mods: {'m-col': '5'},
              content: [
                { block: 'payment',
                  mix: [
                    {block: 'form', mods: {'border': 'all'}}
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
                                {block: 'form', elem: 'label', mods: {'width': 'default'}},
                                {block: 'text', mods: {'view': 'primary', 'size': 'l'}}
                              ],
                              content: [
                                { block: 'text', elem: 'word', elemMods: {'width': 'l'}
                                }
                              ]
                            },
                            {block: 'input', mods: {'size': 'l'}}
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
                              elemMods: {'width': 'default'},
                              mix: [
                                {block: 'form', elem: 'label', mods: {'width': 'default'}},
                                {block: 'text', mods: {'view': 'primary', 'size': 'l'}}
                              ],
                              content: [
                                {block: 'text', elem: 'word', elemMods: {'width': 'l'}
                                }
                              ]
                            },
                            {block: 'input', mods: {'size': 'l'}}
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
                }
              ]
            },
            { block: 'grid',
              elem: 'fraction',
              mods: {'m-col': '5'},
              content: [
                { block: 'warning',
                  mix: [
                    {block: 'informer', mods: {'view': 'default', 'border': 'all'}},
                    {block: 'theme', mods: {'color': 'project-warning'}}
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
            },
            { block: 'grid',
              elem: 'fraction',
              mods: {'m-col': '2'},
              content: [
                { block: 'product',
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
            },
            { block: 'grid',
              elem: 'fraction',
              mods: {'m-col': '2'},
              content: [
                { block: 'product',
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
            },
            { block: 'grid',
              elem: 'fraction',
              mods: {'m-col': '2'},
              content: [
                { block: 'product',
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
            },
            { block: 'grid',
              elem: 'fraction',
              mods: {'m-col': '2'},
              content: [
                { block: 'product',
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
            },
            { block: 'grid',
              elem: 'fraction',
              mods: {'m-col': '2'},
              content: [
                { block: 'product',
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
        }
      ]
    }
  ]
}