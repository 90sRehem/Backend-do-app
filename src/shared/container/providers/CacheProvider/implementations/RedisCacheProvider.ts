import Redis, { Redis as RedisClient } from 'ioredis'
import cacheConfig from '@config/cache'
import ICacheProvider from '../models/ICacheProvider'

export default class RedisCacheProvider implements ICacheProvider {
  private client: RedisClient;

  constructor() {
    console.log('ok');

    this.client = new Redis(cacheConfig.config.redis)
  }

  public async save(key: string, value: string): Promise<void> {
    console.log(key, value);

  }
  recover(key: string): Promise<string> { }
  invalidate(key: string): Promise<void> { }
}
