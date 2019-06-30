module.exports.bemjson = {
  block: "page",
  mix: [
    {block: 'page-collect'}
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
                        {block: 'theme', mods: {'color': 'project-default'}}
                      ]
                    },
                    { block: 'collect',
                      elem: 'progress',
                      content: [
                        { block: 'collect',
                          elem: 'done',
                          mods: {'size': 'two-third'}
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
                          mods: {'size': 'one-third'}
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
                          mods: {'size': 'half'}
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
                          mods: {'size': 'two-third'}
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
      mods: {'space-v': 'xxl'},
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
                                { block: 'icon-plus', elem: 'icon', mods: {'indent-r': 'm'}},
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
                                { block: 'icon-plus', elem: 'icon', mods: {'indent-r': 'm'}},
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
                                { block: 'icon-plus', elem: 'icon', mods: {'indent-r': 'm'}},
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
