(function (window) {

  // 创建一个空的插件对象
  const MyPlugin = {}
  // 必须提供install()
  MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      console.log('Vue函数对象方法 myGlobalMethod()')
    }
    // 2. 添加全局资源
    Vue.directive('my-upper-text', function (el, binding) {
      el.textContent = binding.value.toUpperCase()
    })
    // 4. 添加实例方法
    Vue.prototype.$myMethod = function () {
     console.log('vue实例方法 $myMethod()')
    }
  }
  // 暴露
  window.MyPlugin = MyPlugin
})(window)