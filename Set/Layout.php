<?php
  $name = $_GET ["name"];
  $location = $_SERVER ["DOCUMENT_ROOT"];
  $location .= "/Describe/Structure";
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