export interface IInputProvider {
    read(): Promise<string>;
}