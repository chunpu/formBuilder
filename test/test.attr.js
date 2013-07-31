module('attr');

test('attr should become html label attr', function() {

  var ele = createEle();
  var section = {
    section: 'section',
    content: [
      {
        name: 'name',
        value: 'myname',
        id: ele.id + '-name'
      },
      {
        name: 'age',
        value: 20,
        id: ele.id + '-age',
        foo: 'bar'
      }
    ]
  }
  ele.innerHTML = formBuilder.render(section);
  var name = document.getElementById(ele.id + '-name');
  ok(name instanceof HTMLElement);
  ok(name.value == 'myname');
  ok(name.name == 'name');

  var age = document.getElementById(ele.id + '-age');
  ok(age.getAttribute('foo') == 'bar', 'attr check ok');
});
