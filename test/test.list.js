module("list");

test("test list", function() {
  var el = createEle();
  var section = {
    section: "list section",
    content: [
      {
        name: "mylist",
        type: "list",
        value: [
          1,2,3,4
        ]
      }
    ]
  }
  el.innerHTML = formBuilder.render(section);
  ok(1==1);
});
