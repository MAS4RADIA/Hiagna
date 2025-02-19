export function FillContent (main = null, room = null)
    {
       if (main == null || room == null || main.tagName == undefined || room.language == undefined || room.path == undefined)
           {  return;  }

       var request, filter;
       filter = "name=" + room.path + "&";
       filter += "language=" + room.language;

       request = new XMLHttpRequest ();
       request.open ("GET", "/Set/Content.php?" + filter, true);
       request.addEventListener ("load", CheckContent);
       request.send ();

       function CheckContent ()
           {
              var structure, section, name;
              try
                  {  structure = JSON.parse (this.response);  }
              catch (error)
                  {
                     console.log (error);
                     return;
                   }
              name = document.getElementById ("app_name");
              if (name != null)
                  {  name.innerHTML = room.name;  }
              MarkContent (main, structure);
            }
     }

function MarkContent (main = null, structure = null)
    {
       if (main == null || structure == null || main.tagName == undefined)
           {  return;  }

       var current, value;
       if (Array.isArray (structure))
           {  current = structure;  }
       else if (typeof (structure) == "object")
           {
              current = structure.nested;
              if (structure.text != undefined)
                  {  main.innerHTML = structure.text;  }
            }

       for (value in current)
           {
              if (isNaN (value))
                  {  continue;  }

              var child, content;
              child = main.children;
              content = current [value];

              if (content.name != undefined)
                  {  child = child [content.name];  }
              if (content ["class"] != undefined)
                  {  child = main.getElementsByClassName (content ["class"]) [value];  }

              MarkContent (child, content);
            }
     }