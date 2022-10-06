import {DataSource} from 'typeorm';
import {CoffeeRefactor1665061114191} from "./src/migrations/1665061114191-CoffeeRefactor";

export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: '',
    password: '',
    database: 'coffee-app',
    entities: [],
    migrations: [CoffeeRefactor1665061114191]
})