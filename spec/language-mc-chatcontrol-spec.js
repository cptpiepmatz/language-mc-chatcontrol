// If you want an example of language specs, check out:
// https://github.com/atom/language-javascript/blob/master/spec/javascript-spec.coffee

describe("McChatcontrol grammar", function() {
  var grammar;
  grammar = null;
  beforeEach(function() {
    waitsForPromise(function() {
      return atom.packages.activatePackage("language-mc-chatcontrol");
    });
    return runs(function() {
      return grammar = atom.syntax.grammarForScopeName("source.mc-chatcontrol");
    });
  });
  return it("parses the grammar", function() {
    expect(grammar).toBeTruthy();
    return expect(grammar.scopeName).toBe("source.mc-chatcontrol");
  });
});
