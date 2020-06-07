const routes = [{
        path: '/',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
            path: '',
            component: () =>
                import ('pages/Index.vue')
        }]
    },
    {
        path: '/inicio',
        component: () =>
            import ('pages/inicio.vue'),
    },
    {
        path: '/perfil',
        component: () =>
            import ('pages/Perfil.vue'),
    },
    {
        path: '/rutinas',
        component: () =>
            import ('pages/Rutinas.vue'),
    },
    {
        path: '/rutinas/crear',
        component: () =>
            import ('pages/CrearRutina.vue'),
    },
    {
        path: '/rutinas/ver/:slug',
        component: () =>
            import ('pages/VerRutina.vue'),
    }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
    routes.push({
        path: '*',
        component: () =>
            import ('pages/Error404.vue')
    })
}

export default routes