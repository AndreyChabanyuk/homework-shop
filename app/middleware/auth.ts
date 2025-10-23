export default defineNuxtRouteMiddleware((to) => {
    const access = import.meta.client ? localStorage.getItem('access') : null
    if(!access && !to.path.startsWith('/auth')){
        return navigateTo('/auth/login')
    }
})