import { Store } from "pullstate";
export const HideElements = new Store({ hideAvatar: false });

export const setHideAvatar = (avatar: boolean) => {
    HideElements.update(s => {
        s.hideAvatar = avatar;
    })
}