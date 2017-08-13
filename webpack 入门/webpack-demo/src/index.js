import _ from 'lodash';
import $ from 'jquery';

function component() {
  // var element = document.createElement('div');
  var element = $('<div></div>');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // 
  // Lodash, now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.html(_.join(['Hello', 'webpack'], ' '));

  // return element;
  return element.get(0);
}

document.body.appendChild(component());