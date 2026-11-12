import { BusinessSetting } from "../models/BusinessSetting";

export interface ISettingRepository{
    
    get(): Promise<BusinessSetting | null>;
    save(setting: BusinessSetting): Promise<BusinessSetting>;
}