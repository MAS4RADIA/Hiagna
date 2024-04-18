import { MovePointerTo } from "/Build/Navigation.js";
import { FillContent } from "/Build/Content.js";

export function SetWhole (room)
    {
       var main, body, request, filter;
       body = document.body;
       main = document.getElementById ("main");
       if (main == null)
           {
              main = document.createElement ("SECTION");
              main.id = "main";
              body.appendChild (main);
            }
       filter = "name=" + room.path;

       request = new XMLHttpRequest ();
       request.open ("GET", "/Set/Layout.php?+" + filter, true);
       request.addEventListener ("load", CheckContent);
       request.send ();

       function CheckContent ()
           {
              var content;
              try
                  {  content = JSON.parse (this.response);  }
              catch (error)
                  {  console.log (error);  }

              main.innerHTML = null;
              AttachDescendants (main, content);
              FillContent (main, room);
              MovePointerTo ();
            }
     }

function AttachDescendants (parent, child = null)
    {
       if (child == null)
           {  return;  }

       var current, fixed, step, name;
       if (typeof (child) == "object" && child.nature != undefined)
           {
              current = child.nested;
              fixed = document.createElement (child.nature);
              delete child.nature;
              delete child.nested;

              for (name in child)
                  {  fixed.setAttribute (name, child [name]);  }
              parent.appendChild (fixed);
              parent = fixed;
            }
       else if (Array.isArray (child))
           {  current = child;  }

       for (step in current)
           {
              if (isNaN (step))
                  {  continue;  }
              AttachDescendants (parent, current [step]);
            }
     }