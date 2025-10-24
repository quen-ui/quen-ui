import { setValueObject } from "./";

describe("setValueObject", () => {
  describe("Basic object operations", () => {
    it("should set value at root level", () => {
      const obj = { name: "John", age: 30 };
      const result = setValueObject(obj, "name", "Jane");

      expect(result).toEqual({ name: "Jane", age: 30 });
      expect(result).not.toBe(obj); // should return new object
    });

    it("should set nested object value", () => {
      const obj = { user: { profile: { name: "John" } } };
      const result = setValueObject(obj, "user.profile.name", "Jane");

      expect(result).toEqual({ user: { profile: { name: "Jane" } } });
    });

    it("should create nested structure when it does not exist", () => {
      const obj = { user: { name: "John", profile: { age: 30 } } };
      const result = setValueObject(obj, "user.profile.age", 25);

      expect(result).toEqual({
        user: {
          name: "John",
          profile: { age: 25 }
        }
      });
    });

    it("should handle empty object", () => {
      const obj = { user: { name: "" } };
      const result = setValueObject(obj, "user.name", "John");

      expect(result).toEqual({ user: { name: "John" } });
    });
  });

  describe("Type safety", () => {
    it("should maintain type structure", () => {
      interface User {
        name: string;
        age: number;
        tags: string[];
      }

      const obj: { user: User } = {
        user: { name: "John", age: 30, tags: ["dev"] }
      };

      const result = setValueObject(obj, "user.age", 31);

      // Type should be preserved
      expect(result.user.name).toBe("John");
      expect(result.user.age).toBe(31);
      expect(result.user.tags).toEqual(["dev"]);
    });
  });
});
