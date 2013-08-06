module("checkbox");

test("checkbox without init value", function() {
  var el = createEle();
  var section = {
    section: "checkbox section",
    content: [
      {
        name: "mycheckbox",
        type: "checkbox",
        id: el.id + '-checkbox1',
        options: [1,2,3,4]
      }
    ]
  }
  el.innerHTML = formBuilder.render(section);
  var checkbox = document.getElementById(el.id + '-checkbox1');
  ok(checkbox instanceof HTMLElement);
});

test("checkbox with one init value", function() {
  var el = createEle();
  var section = {
    section: "checkbox oen init section",
    content: [
      {
        name: "mycheckbox",
        type: "checkbox",
        id: el.id + '-checkbox2',
        options: [1,2,3,4],
        value: 3
      }
    ]
  }
  el.innerHTML = formBuilder.render(section);
  var checkbox = document.getElementById(el.id + '-checkbox2');
  ok(checkbox instanceof HTMLElement);
});

test("checkbox with multi init value", function() {
  var el = createEle();
  var section = {
    section: "checkbox multi init section",
    content: [
      {
        name: "mycheckbox",
        type: "checkbox",
        id: el.id + '-checkbox3',
        options: [1,2,3,4],
        value: [2,3]
      }
    ]
  }
  el.innerHTML = formBuilder.render(section);
  var checkbox = document.getElementById(el.id + '-checkbox3');
  ok(checkbox instanceof HTMLElement);
});


