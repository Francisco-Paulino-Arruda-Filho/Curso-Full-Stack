
// Singleton
export class Database {
    private static instance: Database;
    private data: any[] = [];

    private constructor() {}

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }

        return Database.instance;
    }

    public insert(data: any): void {
        this.data.push(data);
    }

    public select(): void {
        console.log(this.data);
    }
}
