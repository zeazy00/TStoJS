import {IInputProvider} from "../IInputProvider";
import * as readline from "readline";

export class ConsoleInput implements IInputProvider {
    read(): Promise<string> {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        return new Promise(resolve => rl.question("", answer => {
            rl.close();
            resolve(answer);
        }));
    }

}