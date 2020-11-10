import { Column, Entity, ObjectID, ObjectIdColumn, Unique, Index } from "typeorm";

@Entity()
export class group{

    @ObjectIdColumn()
    id: ObjectID
    @Column()
    name: string
    @Column()
    roles: JSON
}