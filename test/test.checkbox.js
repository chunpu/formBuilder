module("checkbox");

test("checkbox without init value", function() {
  var el = createEle();
  var section = {
    section: "checkbox section",
    content: [
      {
        name: "mycheckbox",
        type: "checkbox",
        id: el.id + '-checkbox',
        options: [1,2,3,4]
      }
    ]
  }
  el.innerHTML = formBuilder.render(section);
  var checkbox = document.getElementById(el.id + '-checkbox');
  ok(checkbox instanceof HTMLElement);
});

test("checkbox without init value", function() {
  var el = createEle();
  var section = {
    section: "checkbox section",
    content: [
      {
        name: "mycheckbox",
        type: "checkbox",
        id: el.id + '-checkbox',
        options: [1,2,3,4],
        value: 3
      }
    ]
  }
  el.innerHTML = formBuilder.render(section);
  var checkbox = document.getElementById(el.id + '-checkbox');
  ok(checkbox instanceof HTMLElement);
});


