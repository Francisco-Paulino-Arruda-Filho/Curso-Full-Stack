import { User } from "../models/User"

export class MyDatabaseClassic {
    private static instance: MyDatabaseClassic | null = null
    private users: User[] = []
    private constructor() {
    }

    static getInstance(): MyDatabaseClassic {
      if (MyDatabaseClassic.instance === null) {
        MyDatabaseClassic.instance = new MyDatabaseClassic()
      }
      return MyDatabaseClassic.instance
    }

    add(user): void {
      this.users.push(user)
    }

    getUsers(): User[] {
      return this.users
    }

    getRemoveUser(index: number): User {
      return this.users.splice(index
      , 1)[0]
    }

    getUser(index: number): User {
      return this.users[index]
    }

    getInstanceOf(): MyDatabaseClassic {
      if (MyDatabaseClassic.instance === null) {
        MyDatabaseClassic.instance = new MyDatabaseClassic()
      }
      return MyDatabaseClassic.instance;
    }
}
