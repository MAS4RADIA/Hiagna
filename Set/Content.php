<?php
  $name = $_GET ["name"];
  $language = $_GET ["language"];
  $location = $_SERVER ["DOCUMENT_ROOT"];
  $location .= "/Describe/Content/$language";
  fetch_data ($name, $location);

  function fetch_data ($name, $location)
      {
         $open = fopen ("$location/$name.json", "r");
         if (!$open)
             {
                print ("Not found");
                return;
              }
         while (!feof ($open))
             {
                $line = fgets ($open);
                print ($line);
              }
       }
 ?>