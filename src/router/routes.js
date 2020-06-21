const routes = [

    {
        path: '/',
        component: () =>
            import ('pages/Index.vue'),
        meta: {
            guest: true
        }
    },
    {
        path: '/acerca-de',
        component: () =>
            import ('pages/AcercaDe.vue'),
        meta: {
            auth: true
        }
    },

    {
        path: '/sistema-experto',
        component: () =>
            import ('pages/SistemaExperto.vue'),
        meta: {
            auth: true
        }
    },

    {
        path: '/expertos',
        component: () =>
            import ('pages/Expertos.vue'),
        meta: {
            guest: true,
            auth: true
        }
    },

    {
        path: '/registro',
        component: () =>
            import ('pages/Registro.vue'),
        meta: {
            guest: true
        }
    },

    {
        path: '/login',
        component: () =>
            import ('pages/Login.vue'),
        meta: {
            guest: true
        }
    },
    // Usuarios
    {
        path: '/inicio',
        component: () =>
            import ('pages/inicio.vue'),
        meta: {
            auth: true
        }
    },
    {
        path: '/perfil',
        component: () =>
            import ('pages/Perfil.vue'),
        meta: {
            auth: true
        }
    },
    {
        path: '/rutinas',
        component: () =>
            import ('pages/Rutinas.vue'),
        meta: {
            auth: true
        }
    },
    {
        path: '/rutinas/crear',
        component: () =>
            import ('pages/CrearRutina.vue'),
        meta: {
            auth: true
        }
    },
    {
        path: '/rutinas/ver/:slug',
        component: () =>
            import ('pages/VerRutina.vue'),
        meta: {
            auth: true
        }
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
        ],
        meta: {
            auth: true,
            admin: true
        }
    }

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