import { Column, Entity, ObjectID, ObjectIdColumn, Unique, Index } from "typeorm";

@Entity()
@Unique(["slug"])
export class post {

    @ObjectIdColumn()
    id: ObjectID
    @Column()
    name: string
    @Column()
    description: string
    @Column()
    content: string
    @Column()
    category: string
    @Column({ default: function () { return new Date } })
    created_at: Date
    @Column({ default: function () { return new Date } })
    updated_at: Date
    @Column()
    slug: string
    @Column()
    creator: string
    @Column()
    thumbnail: string
    @Column()
    type: string

}