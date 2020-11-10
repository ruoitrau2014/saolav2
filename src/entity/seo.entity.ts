import { Column, Entity, ObjectID, ObjectIdColumn, Unique, Index } from "typeorm";

@Entity()
export class seo {

    @ObjectIdColumn()
    id: ObjectID
    @Column()
    description: string
    @Column()
    title: string
    @Column()
    keywords: string
    @Column()
    object_id: string
    @Column()
    schema: string
}