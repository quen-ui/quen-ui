import { deleteValueObject } from "./";

describe("deleteValueObject", () => {
  it("should delete a simple property and return a new object", () => {
    const obj = { user: { name: "Alice" } };
    const result = deleteValueObject(obj, "user.name");
    expect(result).toEqual({ user: {} });
    expect(result).not.toBe(obj);
    expect(result.user).not.toBe(obj.user);
  });

  it("should delete nested property", () => {
    const obj = { user: { profile: { name: "Bob" } } };
    const result = deleteValueObject(obj, "user.profile.name");
    expect(result).toEqual({ user: { profile: {} } });
  });

  it("should delete array element", () => {
    const obj = { user: { emails: ["a", "b", "c"] } };
    const result = deleteValueObject(obj, "user.emails.1");
    expect(result).toEqual({ user: { emails: ["a", "c"] } });
    expect(result.user.emails).not.toBe(obj.user.emails);
  });

  it("does nothing if the path does not exist", () => {
    const obj = { user: { profile: {} } };
    const result = deleteValueObject(obj, "user.profile.name" as any);
    expect(result).toEqual(obj);
    expect(result).not.toBe(obj);
  });

  it("does nothing if the array index does not exist", () => {
    const obj = { arr: [1, 2, 3] };
    const result = deleteValueObject(obj, `arr.5`);
    expect(result).toEqual(obj);
    expect(result).not.toBe(obj);
  });

  it("should delete a property in a deeply nested object with an array", () => {
    const obj = { users: [{ name: "A" }, { name: "B" }, { name: "C" }] };
    const result = deleteValueObject(obj, "users.1.name");
    expect(result).toEqual({ users: [{ name: "A" }, {}, { name: "C" }] });
  });
});
