// riotタグ内でSASSが使えるようにするための処理
riot.parsers.css.sass = function(tagName, css) {
  var result = Sass.compile(css);
  return result;
};
