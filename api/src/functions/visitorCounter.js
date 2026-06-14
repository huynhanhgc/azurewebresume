const { app } = require('@azure/functions');
const { TableClient } = require('@azure/data-tables');

const tableName = 'VisitorCounter';
const partitionKey = 'resume';
const rowKey = 'visitorCount';

app.http('visitorCounter', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        try {
            const connectionString = process.env.STORAGE_CONNECTION_STRING;

            if (!connectionString) {
                return {
                    status: 500,
                    jsonBody: {
                        error: 'Storage connection string is missing'
                    }
                };
            }

            const client = TableClient.fromConnectionString(connectionString, tableName);

            let entity;

            try {
                entity = await client.getEntity(partitionKey, rowKey);
            } catch (error) {
                entity = {
                    partitionKey: partitionKey,
                    rowKey: rowKey,
                    count: 0
                };

                await client.createEntity(entity);
            }

            entity.count = Number(entity.count) + 1;

            await client.updateEntity(entity, 'Replace');

            return {
                status: 200,
                jsonBody: {
                    count: entity.count
                }
            };
        } catch (error) {
            context.error(error);

            return {
                status: 500,
                jsonBody: {
                    error: 'Unable to update visitor count'
                }
            };
        }
    }
});