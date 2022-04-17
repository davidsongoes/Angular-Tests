import { UniqueIdService } from "./unique-id.service";
// describe("O artefato que queremos testar", () => {
//   it("Primeira condição que queremos testar", () => {});
//   it("Segunda condição que queremos testar", () => {});
// });

// blablabla should blablabla when blablabla

describe(UniqueIdService.name, () => {
  let service: UniqueIdService = null;
  beforeEach(() => {
    service = new UniqueIdService();
  });
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix("app");
    expect(id.startsWith("app-")).toBeTrue();
  });
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate duplicate IDs when called multiple times`, () => {
    const ids = new Set();
    for (let i = 0; i < 20; i++) {
      ids.add(service.generateUniqueIdWithPrefix("app"));
    }
    expect(ids.size).toBe(20);
  });
  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} should return the number of generatedIds when called`, () => {
    for (let i = 0; i < 5; i++) {
      service.generateUniqueIdWithPrefix("app-");
    }
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(5);
  });
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should throw when called with empty`, () => {
    const testProperties = [null, undefined, "", "0", "1"];
    testProperties.forEach((property) => {
      expect(() => service.generateUniqueIdWithPrefix(property))
        .withContext(`Valid value: ${property}`)
        .toThrow();
    });
  });
});
