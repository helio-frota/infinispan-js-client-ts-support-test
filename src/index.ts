import * as infinispan from 'infinispan';

async function test() {

  try {
    const client = await infinispan.client({ port: 11222, host: '127.0.0.1' });
    console.info('Connected to Infinispan dashboard data');

    await client.put('key', 'value');

    const value = await client.get('key');
    console.info(`get(key)= ${value}`);

    const success = await client.remove('key');
    console.info(`remove(key)= ${success}`);

    const stats = await client.stats();
    console.info(`All statistics: ${JSON.stringify(stats, null, ' ')}`);

    await client.disconnect();
  } catch (error) {
    console.error(error);
  }
}

test();
