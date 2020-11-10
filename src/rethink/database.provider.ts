import * as rethink from "rethinkdb"
import * as dotenv from 'dotenv'
dotenv.config()

export const RethinkProvider = {
    provide: 'RethinkProvider',
    useFactory: async () => {
        const conn = await rethink.connect({
            host: process.env.RHOST || 'localhost',
            port: parseInt(process.env.RPORT || '28015'),
            db: process.env.RDB || 'test'
        })
        return conn
    }
}