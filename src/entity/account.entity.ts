import {Column, Entity, ObjectID, ObjectIdColumn, Unique, Index } from "typeorm";

@Entity()
@Unique(["email"])
export class account {

    @ObjectIdColumn()
    id: ObjectID
    @Column()
    email: string	
    @Column()
    name:	string	
    @Column()
    phone:	string	
    @Column()
    gender: number
    @Column()
    address: string	
    @Column()
    options:	Object
    @Column()
    fid:	string	
    @Column()
    gid:	string	
    @Column()
    ID:	string	
    @Column({default: function () { return new Date}})
    created_at:	Date
    @Column({default: function () { return new Date}})
    updated_at:	Date
    @Column()
    @Index()
    group: 	string
    @Column()
    password: string

}