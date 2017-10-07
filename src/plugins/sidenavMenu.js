import router from './../router/index'

let menuItems = [
    {icon: 'home', title: 'Home', clickCallback: () => {
        router.push('/');
    }},
    {icon: 'business', title: 'Companies', clickCallback: () => {
        router.push('/companies')
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