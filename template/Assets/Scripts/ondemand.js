export default function () {
    let onDemandModule = document.getElementsByClassName('js-module')
    let onDemandModules = onDemandModule.length

    for (let i = 0, l = onDemandModules; i < l; i++) {
        let module = onDemandModule[i].getAttribute('data-module')

        console.warn('loading ondemand js module: ', module)

        import(
            /* webpackChunkName: "[request]" */
            `./ondemand/${module}.js`).then(module => {
            module.init(onDemandModule[i])
        })
    }
}
