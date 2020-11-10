import { Column, Entity, ObjectID, ObjectIdColumn, Unique, Index } from "typeorm";

@Entity()
export class address {

    @ObjectIdColumn()
    id: ObjectID
    @Column()
    coordinate: string
    @Column()
    name: string
    @Column()
    object_id: string
    @Column()
    ward: string
    @Column()
    main: number
}