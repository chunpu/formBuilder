module('render');

test('formBuilder.render should return str', function() {

  var obj = {
    section: 'section',
    content: [
      {
        name: 'first'
      },
      {
        name: 'last'
      }
    ]
  };
  var html = formBuilder.render(obj);
  ok(typeof(html) == 'string');
  
  var ele = createEle();
  ele.innerHTML = html;
  ok(ele.childNodes.length == 1);
  
/*
  var view = document.getElementById('preview');
  view.innerHTML = html;
  test("only one section", function() {
    ok(view.childNodes.length === 1, "Passed!");
  });
*/
});
