import './libraries/helper';

let path_name = location.pathname;
if (/^\/(home)?\/?$/.test(path_name)) {
  let flexSlider = _id('flexSlider');
  if (flexSlider) {
    let flexControlNav = _id('flexControlNav').children;
    new Swipe(flexSlider, {
      autoRestart: true,
      callback: (index) => {
        Array.prototype.slice.call(flexControlNav).map((item) => {
          item.className = '';
        });
        flexControlNav[index].className = 'active';
      }
    });
  }
}
