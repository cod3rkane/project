/**
 * Created by jkane on 6/4/16.
 */

define([
  '../components/App',
  '../components/Publications'
], function (App, Publications) {
  return {
    path: '/',
    indexRoute: {
      component: App
    },
    childRoutes: [
      {
        path: 'publicacoes',
        component: Publications
      }
    ]
  }
});