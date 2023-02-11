import { identity } from "lodash";
import ValidationError from "../../../@seedwork/errors/validation-error";
import { Category } from "./category"

describe("Category Integration Tests", () => {
    describe("Create method", () => {
        it("should a invalid category using name property", () => {
            expect(() => new Category({ name: null })).toThrow(new ValidationError("The name is required"));

            expect(() => new Category({ name: "" })).toThrow(new ValidationError("The name is required"));

            expect(() => new Category({ name: 5 as any })).toThrow(new ValidationError("The name must be a string"));

            expect(() => new Category({ name: 't'.repeat(256) })).toThrow(new ValidationError("The name must be less or equal than 255 characters"));
        })

        it("should a invalid category using description property", () => {
            expect(() => new Category({ name: "Movie", description: 5 as any })).toThrow(new ValidationError("The description must be a string"));
        })

        it("should a invalid category using id_active property", () => {
            expect(() => new Category({ name: "Movie", is_active: "" as any })).toThrow(new ValidationError("The is_active must be a boolean"));
        })

        identity("should a valid category", () => {
            const category = new Category({ name: "Movie" });

        })
    })
    describe("update method", () => {
        it("should a invalid category using name property", () => {
            const category = new Category({ name: "Movie" });
            expect(() => category.update(null, null)).toThrow(new ValidationError("The name is required"));

            expect(() => category.update("", null)).toThrow(new ValidationError("The name is required"));

            expect(() => category.update(5 as any, null)).toThrow(new ValidationError("The name must be a string"));

            expect(() => category.update('t'.repeat(256), null)).toThrow(new ValidationError("The name must be less or equal than 255 characters"));
        })

        it("should a invalid category using description property", () => {
            const category = new Category({ name: "Movie" });
            expect(() => category.update("Movie", 5 as any)).toThrow(new ValidationError("The description must be a string"));
        })
    })

})