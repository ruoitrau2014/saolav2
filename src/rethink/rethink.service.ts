import { Injectable, Inject  } from '@nestjs/common';
import * as rethink from "rethinkdb"

@Injectable()
export class RethinkService {
    private connection: rethink.Connection

    constructor(@Inject('RethinkProvider') connection) {
        this.connection = connection
    }

    /**
     * Creates a new table in the RethinkDB instance
     * @param tableName Name of the new Table
     * @returns Creation status promise
     */
    async tableCreate(tableName:string): Promise<rethink.CreateResult> {
        let result = await rethink.tableCreate(tableName).run(this.connection)
        return result
    }

    /**
     * Inserts data in the specified table
     * @param tableName Table where insert data
     * @param content Data to insert
     * @param options Insert options
     */
    async insert(tableName:string, content:object, options?:rethink.InsertOptions): Promise<rethink.WriteResult> {
        let result = await rethink
            .table(tableName)
            .insert(content, options)
            .run(this.connection)
    
        return result
    }

    async tableList(): Promise<rethink.Table[]> {
        let result = await rethink.tableList().run(this.connection)
        return result
    }

    async tableDrop(tableName:string): Promise<rethink.DropResult> {
        let result = await rethink.tableDrop(tableName).run(this.connection)
        return result
    }

    async update(target:rethink.Table | rethink.Sequence, content:object, options?:rethink.UpdateOptions): Promise<rethink.WriteResult> {
        let result = await target
            .update(content, options)
            .run(this.connection)
    
        return result
    }

    async replace(target:rethink.Table | rethink.Sequence, content:object | Function | rethink.ExpressionFunction, options?:rethink.UpdateOptions): Promise<rethink.WriteResult> {
        let result = await target
            .replace(content, options)
            .run(this.connection)
    
        return result
    }

    async delete(target:rethink.Table | rethink.Sequence, options?:rethink.UpdateOptions): Promise<rethink.WriteResult> {
        let result = await target
            .delete(options)
            .run(this.connection)
    
        return result
    }

    /** Global method
     * @param target a Function example:
     * function(){return this.tableCreate(arguments[0])}
     */
    async run(target:Function, ...args:any[]): Promise<any> {
        return await target.call(rethink,...args).run(this.connection)
    }
}
