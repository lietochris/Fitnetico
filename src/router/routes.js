const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  
  {
    path: '/admin',
    component: () => import('layouts/Administrador.vue'),
    children: [
      { path: 'ejercicios', component: () => import('pages/EjerciciosAdmin.vue')},
      { path: 'usuario', component: () => import('pages/UsuarioAdmin.vue')},
      { path: 'perfil', component: () => import('pages/PerfilAdmin.vue')},
      { path: 'crearejer', component: () => import('pages/CrearEjercicio.vue')},
      { path: '', component: () => import('pages/Index.vue')}
    ]
  },

  {
    path: '/prueba',
    component: () => import('pages/Prueba.vue'),
  },
  
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
