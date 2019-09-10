import Platform from "./Platform";
import { Dialogs } from "@ionic-native/dialogs";
import * as config from '../config';

export default function(router, path, message) {
  Platform.registerBackButtonAction(event => {
    event.preventDefault();
    
    Dialogs.confirm(message, config.name)
    .then((index) => {
        if (index === 1) {
          router.navigate(path);
        }
    });

    return false;
  }, 101);
}
