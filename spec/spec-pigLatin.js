

 describe('LatinWord', function() {

  it("should return owlay for owl", function() {
    var result = toPigLatin("owl")
    expect(result).to.deep.equal("owlay");
    // getWordsUsageCount(["cat", "dog", "dog"], "cat dog dog").assert.deepEqual({ cat: 1, dog: 2 })
  })

})

// describe('sortByTimesUsed', function() {
//
//   it("should correctly handle an empty string", function () {
//     sortByTimesUsed("").should.equal("");
//   })
//
//   it("should correctly handle an invalid value e.g. number etc...", function () {
//     sortByTimesUsed(1234).should.equal(false);
//   })
//
//   it("should return the most used word first", function () {
//     sortByTimesUsed("dog cat cat bird bird girl girl").should.equal("cat bird girl dog");
//   })
//
//   it("if used same number of times order by first appearance.", function () {
//     sortByTimesUsed("dog dog cat cat").should.equal("dog cat");
//   })
//
//   it("should return the least used word last.", function () {
//     sortByTimesUsed("dog dog sheep cat cat").should.equal("dog cat sheep");
//   })
//
// })
