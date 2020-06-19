const routes = [
  {
    path: '/',
    component: () => 
    import('pages/Index.vue'),
    children: [{
      path: '',
      component: () => 
      import('pages/Index.vue'),
    }]

  },
  {
    path: '/Bienvenida',
    component: () => 
      import ('pages/Bienvenida.vue'),
  },

  {
    path: '/Expertos',
    component: () => 
      import ('pages/Expertos.vue'),
  },

  {
    path: '/Registro',
    component: () => 
      import ('pages/Registro.vue'),
  },

  {
    path: '/Login',
    component: () => 
      import ('pages/Login.vue'),
  },

]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
