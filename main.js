
import { sleep } from './sleep.js';
import { getRandomNumber } from './random.js';
import { Person } from './person.js';

async function main() {
    const randomMs = getRandomNumber();
    console.log(`Sleeping for ${randomMs} milliseconds...`);

    await sleep(randomMs);

    const person = new Person('Shox ake', 1997);
    console.log(person.getInfo());
}

main();