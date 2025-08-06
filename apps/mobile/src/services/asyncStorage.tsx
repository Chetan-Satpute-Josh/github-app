import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Enum for all AsyncStorage keys used in the app
 */
export enum StorageKey {
  AuthToken = "auth_token",
}

/**
 * Save a value to AsyncStorage
 */
export async function setStorageItem(
  key: StorageKey,
  value: string
): Promise<void> {
  const stringValue = JSON.stringify(value);

  await AsyncStorage.setItem(key, stringValue);
}

/**
 * Retrieve a value from AsyncStorage
 */
export async function getStorageItem(key: StorageKey): Promise<string | null> {
  const stringValue = await AsyncStorage.getItem(key);

  return stringValue ? JSON.parse(stringValue) : null;
}

/**
 * Remove a value from AsyncStorage
 */
export async function removeStorageItem(key: StorageKey): Promise<void> {
  await AsyncStorage.removeItem(key);
}

/**
 * Check if a key exists in AsyncStorage
 */
export async function hasStorageItem(key: StorageKey): Promise<boolean> {
  const value = await AsyncStorage.getItem(key);

  return value !== null;
}
