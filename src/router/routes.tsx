import lazyload from '@utils/lazyload';
// 使用了自定义的 foo-text-loader
import views from './views.txt';

const viewsArr = views.trim().split('\n');
function getRoutes(arr: string[]) {
  return arr.map((item: string) => {
    return {
      title: item,
      path: `/${item}`,
      component: lazyload(() => import(`@view/${item}`)),
    };
  });
}
const routes = getRoutes(viewsArr);

export default routes;
