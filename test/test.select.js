module('select');

test('test the <select> element without init value', function() {

  var ele = createEle();
  var section = {
    section: 'select test',
    content: [
      {
        name: 'select',
        type: 'select',
        options: [
          1,2,3,4
        ],
        id: ele.id + '-select',
      }
    ]
  };
  ele.innerHTML = formBuilder.render(section);
  var select = document.getElementById(ele.id + '-select');
  ok(select.tagName == 'SELECT');
  ok(select.value == '1');
});

test('test the <select> element with init value', function() {
  var ele = createEle();
  var section = {
    section: 'select test',
    content: [
      {
        name: 'select',
        type: 'select',
        options: [
          1,2,3,4
        ],
        id: ele.id + '-select',
        value: 3
      }
    ]
  };
  ele.innerHTML = formBuilder.render(section);
  var select = document.getElementById(ele.id + '-select');
  ok(select.getAttribute('value') == undefined);
  ok(select.value == 3);

});
