import { createApp, h } from "vue";
import { createInertiaApp, Link } from "@inertiajs/inertia-vue3";

import PrimeVue from "primevue/config";

/*
CSS Primevue
*/
createInertiaApp({
    resolve: (name) => import(`./Pages/${name}`),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .component("router-link", Link)
            .use(PrimeVue)
            .mount(el);
    },
});
