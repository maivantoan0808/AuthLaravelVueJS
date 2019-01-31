// Views
import Login from './Login'
import Register from './Register'
import Dashboard from './pages/user/Dashboard'
import AdminDashboard from './pages/admin/Dashboard'

export const routes = [
	{
		path: '/',
		name: 'Login',
		component: Login,
		auth: false
	},
	{
		path: '/register',
		name: 'Register',
		component: Register,
		auth: false
	},
	{
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: {
            auth: true
        }
    },
    {
        path: '/admin',
        name: 'admin.dashboard',
        component: AdminDashboard,
        meta: {
            auth: { roles: 2, redirect: { name: 'login' }, forbiddenRedirect: '/403' }
        }
    },
];