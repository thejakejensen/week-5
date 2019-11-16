import { Age } from './../src/backend.js';

describe ('Age', function(){
  it('should not accept non-numerical input', function() {
    let exampleAge = new Age("peanut");
    expect(exampleAge.checkValidity()).toBe(false);
  });
});
