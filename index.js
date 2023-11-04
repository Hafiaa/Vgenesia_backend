const Fastify = require("fastify");

const PORT = 3002;
const DB_NAME = "db_member";

const fastify = Fastify({ logger: true });


fastify.get('/', async (request, reply) => {

    const arrayI = [];
    for (let i = 0; i < 100; i++) {
        arrayI.push(i);
    }

    return reply.code(200).send({
        data: arrayI,
        app: {
            name: "Vegensia Backend",
        }
    });
});

fastify.get('/hafia', async (request, reply) => {
    return reply.code(200).send({
        app: {
            name: "Hafia.com",
        }
    })
});

const run = async () => {
    try {
        console.log("hai");
        await fastify.listen({ port: PORT });

    } catch (error) {
        console.error('ERROR RUNINNG', error);
        fastify.log.error(err);
        process.exit(1);
    }
};

run();