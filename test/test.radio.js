module('test radio');

test('radio without init value', function() {

  var el = createEle();
  var section = {
    section: 'radio test',
    content: [
      {
        name: 'myradio',
        id: el.id + '-radio',
        type: 'radio',
        options: [1, 2, 3, 4]
      }
    ]
  }

  el.innerHTML = formBuilder.render(section);
  var radio = document.getElementById(el.id + '-radio');
  ok(radio instanceof HTMLElement);
  equal(radio.name, 'myradio');
  equal(radio.type, 'radio');
  
});

test('radio with init value', function() {

  var el = createEle();
  var section = {
    section: 'radio test',
    content: [
      {
        name: 'myradio',
        id: el.id + '-radio',
        type: 'radio',
        options: [1, 2, 3, 4],
        value: 3
      }
    ]
  }

  el.innerHTML = formBuilder.render(section);
  var radio = document.getElementById(el.id + '-radio');
  ok(radio instanceof HTMLElement);
  equal(radio.name, 'myradio');
  equal(radio.type, 'radio');
  
});

