import { SetNavigation } from "/Build/Navigation.js";
import { SetWhole } from "/Build/Layout.js";

var room;
room = new Object ();
room.title = document.querySelector ("TITLE");
room.name = room.title.innerHTML;

export function Switch ()
    {
       var path = location.pathname;
       if (path == "/")
           {  path = "/home";  }
       if (path [0] == "/")
           {  path = path.slice (1);  }

       room.path = path;
       SetNavigation (room);
       SetWhole (room);
     }