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
}
window.onload = function() {
  var html = formBuilder.render(obj);
  test("form builder", function() {
    ok(typeof(html) == 'string', "Passed!");
  });
}

