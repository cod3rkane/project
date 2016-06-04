/**
 * Created by jkane on 6/4/16.
 */

define([
  '../components/App',
  '../components/Publications',
  '../components/SinglePostPage',
], function (App, Publications, SinglePostPage) {
  return {
    path: '/',
    indexRoute: {
      component: App
    },
    childRoutes: [
      {
        path: 'publicacoes',
        component: Publications
      },
      {
        path: 'noticia',
        indexRoute: {
          component: SinglePostPage
        },
        childRoutes: [
          {
            path: ':post',
            component: SinglePostPage
          }
        ]
      }
    ]
  }
});