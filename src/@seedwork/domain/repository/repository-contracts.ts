import Entity from "../entity/entity";
import UniqueEntityID from "../value-objects/unique-entity-id.vo";

export interface RepositoryInterface<E extends Entity> {
    insert(entity: E): Promise<void>;
    findById(id: string | UniqueEntityID): Promise<E>;
    findAll(): Promise<E[]>;
    update(entity: E): Promise<void>;
    delete(id: string | UniqueEntityID): Promise<void>;

}