import { Column, Entity, ObjectID, ObjectIdColumn, Unique, Index } from "typeorm";

@Entity()
@Unique(["slug"])
export class post_category {

    @ObjectIdColumn()
    id: ObjectID
    @Column()
    name: string
    @Column()
    description: string
    @Column()
    slug: string
    @Column()
    parent: string
    @Column()
    level: number
    @Column()
    order: number
    @Column()
    icon: string
    @Column()
    type: string
}