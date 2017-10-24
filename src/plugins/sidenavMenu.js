import router from './../router/index'

let menuItems = [
    {icon: 'home', title: 'Home', clickCallback: () => {
        router.push('/');
    }},
    {icon: 'business', title: 'Company management', clickCallback: () => {
        router.push({name: 'companyManagement'})
    }},
    {icon: 'book', title: 'Tasks', clickCallback: () => {
        router.push('/tasks')
    }}
];

const SidenavMenu = {
    install(Vue, options) {
        Vue.prototype.$sidenavMenuItems = menuItems;
    }
};

export default SidenavMenu;