import AsyncStorage from "@react-native-async-storage/async-storage";

const TASKS_STORAGE_KEY = "tasks-storage";

export type TaskStorage = {
  id: string;
  title: string;
  check: boolean;
};

async function get(): Promise<TaskStorage[]> {
  const storage = await AsyncStorage.getItem(TASKS_STORAGE_KEY);
  const response = storage ? JSON.parse(storage) : [];

  return response;
}

async function save(task: TaskStorage) {
  try {
    const storage = await get();
    const updated = JSON.stringify([...storage, task]);

    await AsyncStorage.setItem(TASKS_STORAGE_KEY, updated);
  } catch (error) {
    throw error;
  }
}

async function remove(id: string) {
  try {
    const storage = await get();
    const updated = storage.filter((task) => task.id !== id);
    await AsyncStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    throw error;
  }
}

async function updated(id: string, isChecked: boolean) {
  const storage = await get();
  const updated = storage.map((task) =>
    task.id === id ? { ...task, check: isChecked } : task
  );

  await AsyncStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(updated));
  console.log(updated);
}

export const taskStorage = { get, save, remove, updated };
