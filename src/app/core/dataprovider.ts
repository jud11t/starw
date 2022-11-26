import { BodySize } from "../models/bodysize.model";
import { UserModel } from "../models/user.model";

export class DataProvider {
    public static UserList: UserModel[] = [
        new UserModel("Mekk", "Elek", "AAA0123", 34, "male", BodySize.Medium, 10, 15, 20),
        new UserModel("Vajda", "Julia", "B32E122", 53, "female", BodySize.Small, 12, 17, 30)
    ]
}