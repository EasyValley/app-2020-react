let pluginName = 'HelloWorldPlugin'
class LogDemo {
  apply(compiler) {
    compiler.hooks.done.tap(pluginName, (
      stats /* 在 hook 被触及时，会将 stats 作为参数传入。 */
    ) => {
      console.log('Hello World!');
    });
    compiler.hooks.run.tap(pluginName, compilation => {
      console.log('The webpack build process is starting!!!');
    });
  }
}

module.exports = LogDemo
