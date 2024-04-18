<?php
  $root = $_SERVER ["DOCUMENT_ROOT"];
  $directory = scandir ("$root/Describe/Content");

  $content = 0;
  print ("[ ");
  while ($content < count ($directory))
      {
         if ($directory [$content] [0] == '.')
             {
                $content += 1;
                continue;
              }
         print ("\"" . $directory [$content] . "\"");
         $content += 1;

         if ($content < count ($directory))
             {  print (", ");  }
       }
  print (" ]\n");
 ?>