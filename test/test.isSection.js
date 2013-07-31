module('isSection');

test('this is section', function() {
  var section = {
    section: 'section',
    content: [
      {
        name: 'name'
      }
    ]
  };
  ok(formBuilder.isSection(section) === true);
});

test('this is not section', function() {
  var fakeSection = {
    section: 'section',
    content: {
      name: 'name'
    }
  };
  ok(formBuilder.isSection(fakeSection) === false);
})
  
