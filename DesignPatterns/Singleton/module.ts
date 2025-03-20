import { MyDatabaseClassic } from "./db/myDatabaseClassic"
import { User } from "./models/User"

const db1 = MyDatabaseClassic.getInstance()
db1.add(new User('Lucas', 30))
db1.add(new User('Lais', 25))
db1.add(new User('Luna', 1))
