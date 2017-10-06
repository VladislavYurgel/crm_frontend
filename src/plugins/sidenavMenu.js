import router from './../router/index'

let menuItems = [
    {icon: 'home', title: 'Home', clickCallback: () => {
        router.push('/');
    }},
    {icon: 'business', title: 'My companies', clickCallback: () => {
        router.push('/companies')
    }}
];

const SidenavMenu = {
    install(Vue, options) {
        Vue.prototype.$sidenavMenuItems = menuItems;
    }
};

export default SidenavMenu;