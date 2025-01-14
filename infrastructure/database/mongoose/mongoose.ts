import { connect } from 'mongoose';


async function db() {
    try {
        await connect('mongodb://root:password@localhost:27017/', { dbName: 'moto_management_test' });
    }
    catch (error) {
        console.error(error);
    }
}

export default db;

