import { Column, Entity, ObjectID, ObjectIdColumn, Unique, Index } from "typeorm";

@Entity()
export class post_meta {

    @ObjectIdColumn()
    id: ObjectID
    @Column()
    post_id: string
    @Column()
    name: string
    @Column()
    value: string
}