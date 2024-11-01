import AsyncStorage from '@react-native-async-storage/async-storage';

interface CacheItem {
  content: string;
  timestamp: number;
}

const CACHE_EXPIRY = 2 * 60 * 60 * 1000; // 2 saat

export const cacheManager = {
  async set(key: string, content: string) {
    const item: CacheItem = {
      content,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(key, JSON.stringify(item));
  },

  async get(key: string): Promise<string | null> {
    const item = await AsyncStorage.getItem(key);
    if (!item) return null;

    const parsed: CacheItem = JSON.parse(item);
    if (Date.now() - parsed.timestamp > CACHE_EXPIRY) {
      await AsyncStorage.removeItem(key);
      return null;
    }

    return parsed.content;
  }
};