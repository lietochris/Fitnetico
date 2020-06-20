const routes = [{
        path: '/',
        component: () =>
            import ('pages/Index.vue')
    },

    {
        path: '/bienvenida',
        component: () =>
            import ('pages/Bienvenida.vue'),
    },

    {
        path: '/expertos',
        component: () =>
            import ('pages/Expertos.vue'),
    },

    {
        path: '/registro',
        component: () =>
            import ('pages/Registro.vue'),
    },

    {
        path: '/login',
        component: () =>
            import ('pages/Login.vue'),
    },
    // Usuarios
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
    },

    // Admin
    {
        path: '/admin',
        component: () =>
            import ('layouts/Administrador.vue'),
        children: [{
                path: 'ejercicios',
                component: () =>
                    import ('pages/EjerciciosAdmin.vue')
            },
            {
                path: 'usuario',
                component: () =>
                    import ('pages/UsuarioAdmin.vue')
            },
            {
                path: 'perfil',
                component: () =>
                    import ('pages/PerfilAdmin.vue')
            },
            {
                path: 'crear',
                component: () =>
                    import ('pages/CrearEjercicio.vue')
            },
            {
                path: '',
                component: () =>
                    import ('pages/Index.vue')
            }
        ]
    },

    {
        path: '/prueba',
        component: () =>
            import ('pages/Prueba.vue'),
    },

];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
    routes.push({
        path: '*',
        component: () =>
            import ('pages/Error404.vue')
    })
}

export default routes