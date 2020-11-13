function fooLoader(source) {
  console.log('让 .txt 内容变成变量')
  return `export default ${JSON.stringify(source)}`;
}

module.exports = fooLoader;
