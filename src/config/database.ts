import { DataSource } from "typeorm";
import "dotenv/config";

export const AppDataSource = new DataSource({
  type: "cockroachdb",
  password: process.env.DATABASE_PASSWORD,
  username: process.env.DATABASE_USERNAME,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT as unknown as number,
  database: process.env.DATABASE,
  entities: ["src/entities/**/*.entity{.ts,.js}"],
  migrations: ["src/**/*.entity{.ts,.js}"],
  synchronize: true,
  ssl: true,
});
