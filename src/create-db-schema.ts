import { MikroORM } from '@mikro-orm/core';
import { SqliteDriver } from '@mikro-orm/sqlite';

(async () => {
  const orm = await MikroORM.init({
    driver: SqliteDriver,
    entities: ['dist/**/*.entity.js'],
    entitiesTs: ['src/**/*.entity.ts'],
    dbName: 'taxi24-db.sqlite3',
  });

  const generator = orm.schema;
  await generator.dropSchema();
  await generator.createSchema();
  await orm.close(true);
})();
