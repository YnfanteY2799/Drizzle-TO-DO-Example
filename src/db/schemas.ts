import { integer, text, boolean, pgTable } from "drizzle-orm/pg-core";

export const todo = pgTable("todo", {
  id: integer("id").primaryKey().unique(),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
});
