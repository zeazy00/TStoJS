import {IOutputProvider} from "../IOutputProvider";

export class ConsoleOutput implements IOutputProvider {

    output(message: string) {
        console.log(message);
    }

}