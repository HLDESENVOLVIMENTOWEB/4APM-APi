export interface RepositoryInterface<T> {
    create(entity: T): Promise<T>;
    findAll(): Promise<T[]>;
    findOneById(id: number): Promise<T | null>;
    update(id: number, entity: Partial<T>): Promise<T>;
    delete(id: number): Promise<void>;
}
  