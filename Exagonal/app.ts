import { initDB } from "./src/infrastructure/Database";
import { EventModel } from "./src/adapters/models/EventModel";

export const startApp = async () => {
  await initDB();
  await EventModel.sync(); // Esto creará la tabla si no existe
  console.log('Database initialized and synchronized');
};
